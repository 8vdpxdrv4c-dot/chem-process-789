/**
 * Material realism shots: overview + device close for p=7/8/9.
 * SoftGL: softShot=1 grades darker; does not touch softGLShotGrade.js.
 */
import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';

const OUT = '/workspace/chem-process-789/shots';
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.SHOT_BASE || 'http://127.0.0.1:4178';

const JOBS = [
  { p: 7, focus: 'F04', label: 'glassLined' },
  { p: 8, focus: 'H05', label: 'reactor' },
  { p: 9, focus: 'D01', label: 'kettle' },
];

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

async function waitReady(url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  try {
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
  } catch {
    await page.waitForTimeout(5000);
  }
  await page.waitForTimeout(2500);
}

for (const job of JOBS) {
  await waitReady(`${BASE}/?p=${job.p}&q=high&softShot=1`);
  const meta = await page.evaluate(() => {
    const S = window.__app?.S;
    let metalSample = null;
    S?.scene?.traverse?.((o) => {
      if (metalSample || !o.isMesh || !o.material) return;
      const m = Array.isArray(o.material) ? o.material[0] : o.material;
      if (m?.isMeshStandardMaterial && m.metalness >= 0.7) {
        metalSample = {
          metalness: m.metalness,
          roughness: m.roughness,
          envMapIntensity: m.envMapIntensity,
          emissiveIntensity: m.emissiveIntensity,
          hasEnvMap: !!m.envMap || !!S.scene.environment,
        };
      }
    });
    return {
      ready: !!window.__ready,
      softGL: !!S?.softGL,
      softShot: !!S?.__softShotGradeApplied,
      exposure: S?.renderer?.toneMappingExposure,
      envIntensity: S?.scene?.environmentIntensity,
      hasEnv: !!S?.scene?.environment,
      metalSample,
    };
  });
  console.log('overview p=' + job.p, JSON.stringify(meta));
  const ov = path.join(OUT, `mat-p${job.p}-overview.png`);
  await page.screenshot({ path: ov, fullPage: false });
  console.log('wrote', ov);

  // Focus a primary device
  await page.evaluate((id) => {
    const app = window.__app;
    const plant = app?.plant;
    const S = app?.S;
    const a = plant?.anchors?.[id];
    if (!a || !S) return false;
    S.camera.position.set(a.x + 16, a.y + 7, a.z + 18);
    S.controls.target.set(a.x, Math.max(4, a.y * 0.4), a.z);
    S.controls.update();
    S.setDofMode?.('close');
    S.render?.();
    return true;
  }, job.focus);
  await page.waitForTimeout(1200);
  const cl = path.join(OUT, `mat-p${job.p}-${job.label}-close.png`);
  await page.screenshot({ path: cl, fullPage: false });
  console.log('wrote', cl);
}

console.log('errs', errs.slice(0, 20));
await browser.close();
if (errs.length) process.exitCode = 2;
