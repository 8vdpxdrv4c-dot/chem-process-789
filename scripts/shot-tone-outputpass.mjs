/**
 * Verify exposure + toneMapping panel changes are visible after OutputPass fix.
 */
import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';

const OUT = '/workspace/chem-process-789/shots';
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.SHOT_BASE || 'http://127.0.0.1:4179';

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

await page.goto(`${BASE}/?p=8&q=high`, { waitUntil: 'domcontentloaded', timeout: 60000 });
try {
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
} catch {
  await page.waitForTimeout(5000);
}
await page.waitForTimeout(2500);

const meta0 = await page.evaluate(() => {
  const S = window.__app?.S;
  const TONE = { 0: 'None', 1: 'Linear', 2: 'Reinhard', 3: 'Cineon', 4: 'ACESFilmic', 5: 'Custom', 6: 'AgX', 7: 'Neutral' };
  const passes = S?.composer?.passes?.map((p) => p.constructor?.name) || [];
  return {
    ready: !!window.__ready,
    softGL: !!S?.softGL,
    exposure: S?.renderer?.toneMappingExposure,
    toneMapping: TONE[S?.renderer?.toneMapping] || String(S?.renderer?.toneMapping),
    hasOutputPass: passes.includes('OutputPass'),
    passes,
    fogDensity: S?.scene?.fog?.density,
    bloomStrength: S?.bloom?.strength,
  };
});
console.log('boot', JSON.stringify(meta0, null, 2));

async function shot(name, apply) {
  if (apply) {
    await page.evaluate((patch) => {
      const api = window.__envTweak || window.__app?.envPanel;
      if (!api) throw new Error('no env panel');
      const next = { ...api.getParams(), ...patch };
      api.apply(next);
      window.__app.S.render();
    }, apply);
    await page.waitForTimeout(900);
  }
  const out = path.join(OUT, name);
  await page.locator('#c').screenshot({ path: out });
  const state = await page.evaluate(() => {
    const S = window.__app?.S;
    const TONE = { 0: 'None', 1: 'Linear', 2: 'Reinhard', 3: 'Cineon', 4: 'ACESFilmic', 5: 'Custom', 6: 'AgX', 7: 'Neutral' };
    // Sample canvas pixels via 2d copy for mean luma
    const c = document.getElementById('c');
    const w = Math.min(c.width, 960);
    const h = Math.min(c.height, 540);
    const off = document.createElement('canvas');
    off.width = w; off.height = h;
    const ctx = off.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(c, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    let sum = 0;
    const n = w * h;
    for (let i = 0; i < n; i++) {
      const o = i * 4;
      sum += 0.2126 * data[o] + 0.7152 * data[o + 1] + 0.0722 * data[o + 2];
    }
    return {
      exposure: S?.renderer?.toneMappingExposure,
      toneMapping: TONE[S?.renderer?.toneMapping] || String(S?.renderer?.toneMapping),
      fogDensity: S?.scene?.fog?.density,
      keyIntensity: S?.key?.intensity,
      luma: sum / n,
    };
  });
  console.log(name, state);
  return { name, ...state, path: out };
}

const baseline = await shot('tone-fix-baseline-exp22-agx.png', { exposure: 2.2, toneMapping: 'AgX' });
const bright = await shot('tone-fix-exp4-agx.png', { exposure: 4, toneMapping: 'AgX' });
const dim = await shot('tone-fix-exp1-agx.png', { exposure: 1, toneMapping: 'AgX' });
const aces = await shot('tone-fix-exp22-aces.png', { exposure: 2.2, toneMapping: 'ACESFilmic' });
const none = await shot('tone-fix-exp22-none.png', { exposure: 2.2, toneMapping: 'None' });
const fog = await shot('tone-fix-fog-dense.png', { exposure: 2.2, toneMapping: 'AgX', fogDensity: 0.008 });

const checks = {
  hasOutputPass: !!meta0.hasOutputPass,
  exposureBrightens: bright.luma > baseline.luma * 1.05,
  exposureDims: dim.luma < baseline.luma * 0.95,
  toneMappingDiffers: Math.abs(aces.luma - baseline.luma) > 0.3 || Math.abs(none.luma - baseline.luma) > 0.5,
  fogStillWorks: fog.luma !== baseline.luma,
};
const report = { meta0, shots: { baseline, bright, dim, aces, none, fog }, checks };
fs.writeFileSync(path.join(OUT, 'tone-fix-report.json'), JSON.stringify(report, null, 2));
console.log('REPORT', JSON.stringify(checks, null, 2));
console.log('errs', errs);
await browser.close();

const fail = !checks.hasOutputPass || !checks.exposureBrightens || !checks.exposureDims || !checks.toneMappingDiffers;
if (fail || errs.length) process.exitCode = 2;
