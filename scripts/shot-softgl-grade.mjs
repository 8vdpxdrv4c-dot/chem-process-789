/**
 * SoftGL brightness calibration: before (raw look-dev) vs after (shot grade).
 * Also sweeps a few exposure muls for luminance pick.
 */
import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';
import { ensureSoftShotGrade, softShotMeta, withSoftShot } from './lib/softShot.mjs';

const OUT = '/workspace/chem-process-789/shots';
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.SHOT_BASE || 'http://127.0.0.1:4178';

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: [
    '--use-gl=angle', '--use-angle=swiftshader-webgl', '--enable-webgl',
    '--ignore-gpu-blocklist', '--no-sandbox',
  ],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errs = [];
page.on('pageerror', (e) => errs.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error') errs.push('console:' + m.text());
});

await page.addInitScript(() => {
  try { localStorage.removeItem('chem789-env-tweak'); } catch (_) {}
});

async function ready(url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  try {
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
  } catch {
    await page.waitForTimeout(5000);
  }
  await page.waitForTimeout(2800);
}

// --- BEFORE: raw SoftGL look-dev (no softShot) ---
await ready(`${BASE}/?p=8&q=high`);
const beforeMeta = await softShotMeta(page);
const beforePath = path.join(OUT, 'softgl-grade-before-p8.png');
await page.screenshot({ path: beforePath, fullPage: false });

// --- AFTER default grade via API (same page) ---
const applied = await ensureSoftShotGrade(page);
await page.waitForTimeout(600);
const afterMeta = await softShotMeta(page);
const afterPath = path.join(OUT, 'softgl-grade-after-p8.png');
await page.screenshot({ path: afterPath, fullPage: false });

// --- URL boot path softShot=1 ---
await ready(withSoftShot(`${BASE}/?p=8&q=high`));
const bootMeta = await softShotMeta(page);
const bootPath = path.join(OUT, 'softgl-grade-boot-p8.png');
await page.screenshot({ path: bootPath, fullPage: false });

// --- mul sweep for calibration notes ---
const sweep = [];
for (const mul of [0.7, 0.55, 0.48, 0.42]) {
  await ready(`${BASE}/?p=8&q=high`);
  await ensureSoftShotGrade(page, {
    exposureMul: mul,
    envIntensityMul: 0.75,
    bloomMul: 0.4,
    badge: true,
  });
  await page.waitForTimeout(500);
  const p = path.join(OUT, `softgl-grade-mul${String(mul).replace('.', '')}-p8.png`);
  await page.screenshot({ path: p, fullPage: false });
  sweep.push({ mul, path: p, meta: await softShotMeta(page) });
}

const report = { beforeMeta, applied, afterMeta, bootMeta, beforePath, afterPath, bootPath, sweep, errs };
console.log(JSON.stringify(report, null, 2));
fs.writeFileSync(path.join(OUT, 'softgl-grade-report.json'), JSON.stringify(report, null, 2));
await browser.close();
if (errs.length) process.exitCode = 2;
