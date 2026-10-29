/**
 * Chinese env tweak panel shot (p=8 overview, panel open).
 */
import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';

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

await page.goto(`${BASE}/?p=8&q=high&softShot=1`, { waitUntil: 'domcontentloaded', timeout: 60000 });
try {
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
} catch {
  await page.waitForTimeout(5000);
}
await page.waitForTimeout(2200);

const meta = await page.evaluate(() => {
  window.__envTweak?.open?.();
  window.__app?.S?.render?.();
  const panel = document.getElementById('envPanel');
  const body = panel?.innerText || '';
  const labels = [...panel?.querySelectorAll('.env-lab') || []].map((el) => el.textContent.trim());
  const descs = [...panel?.querySelectorAll('.env-desc') || []].map((el) => el.textContent.trim());
  const buttons = [...panel?.querySelectorAll('.env-panel-ft button') || []].map((el) => el.textContent.trim());
  const sections = [...panel?.querySelectorAll('.env-sec > summary') || []].map((el) => el.textContent.trim());
  const hint = panel?.querySelector('.env-hint')?.textContent?.trim();
  const fab = document.getElementById('envFab')?.textContent?.trim();
  return {
    ready: !!window.__ready,
    panelVisible: !!panel && !panel.hidden,
    fab,
    hint,
    buttons,
    sections,
    labelCount: labels.length,
    descCount: descs.length,
    sampleLabels: labels.slice(0, 8),
    sampleDescs: descs.slice(0, 4),
    hasEnglishReset: buttons.includes('Reset') || body.includes('Exposure'),
    hasZhExposure: labels.includes('曝光'),
    hasZhReset: buttons.includes('重置'),
  };
});
console.log('meta', JSON.stringify(meta, null, 2));
await page.waitForTimeout(500);
const out = path.join(OUT, 'env-tweak-zh-p8.png');
await page.screenshot({ path: out, fullPage: false });
console.log('wrote', out);
console.log('errs', errs);
await browser.close();
if (!meta.panelVisible || !meta.hasZhExposure || !meta.hasZhReset || meta.hasEnglishReset) {
  process.exitCode = 2;
}
if (errs.length) process.exitCode = 2;
