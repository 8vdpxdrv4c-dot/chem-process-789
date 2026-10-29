/**
 * Env tweak panel shots: panel open + after exposure bump (p=8 overview).
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

async function waitReady(url, ms = 60000) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: ms });
  try {
    await page.waitForFunction(() => window.__ready === true, null, { timeout: ms });
  } catch {
    await page.waitForTimeout(5000);
  }
  await page.waitForTimeout(2200);
}

await waitReady(`${BASE}/?p=8&q=high&softShot=1`);

const meta0 = await page.evaluate(() => {
  const app = window.__app;
  const S = app?.S;
  const H = app?.envHandles;
  const p = app?.envPanel?.getParams?.();
  return {
    ready: !!window.__ready,
    hasPanel: !!app?.envPanel,
    hasFab: !!document.getElementById('envFab'),
    exposure: S?.renderer?.toneMappingExposure,
    fogDensity: S?.scene?.fog?.density,
    hemi: H?.hemi?.intensity,
    key: H?.key?.intensity,
    bloom: S?.bloom?.strength,
    ground: !!H?.ground,
    streetLights: H?.street?.lights?.length ?? 0,
    paramsKeys: p ? Object.keys(p).length : 0,
  };
});
console.log('boot', JSON.stringify(meta0, null, 2));

// Open panel
await page.evaluate(() => {
  window.__envTweak?.open?.();
  window.__app?.S?.render?.();
});
await page.waitForTimeout(600);
const panelVisible = await page.evaluate(() => {
  const el = document.getElementById('envPanel');
  return !!el && !el.hidden;
});
console.log('panelVisible', panelVisible);
await page.screenshot({ path: path.join(OUT, 'env-tweak-p8-panel.png'), fullPage: false });
console.log('wrote env-tweak-p8-panel.png');

// Bump exposure + key a bit to show live update
const after = await page.evaluate(() => {
  const api = window.__envTweak;
  const cur = api.getParams();
  api.apply({
    ...cur,
    exposure: 1.35,
    keyIntensity: Math.min(6, (cur.keyIntensity || 2.1) * 1.15),
    hemiIntensity: Math.min(3, (cur.hemiIntensity || 0.5) * 1.2),
    fogDensity: Math.max(0, (cur.fogDensity || 0.0045) * 0.75),
  });
  // force renders
  for (let i = 0; i < 4; i++) window.__app.S.render();
  return {
    exposure: window.__app.S.renderer.toneMappingExposure,
    key: window.__app.envHandles.key.intensity,
    hemi: window.__app.envHandles.hemi.intensity,
    fog: window.__app.S.scene.fog.density,
    paramsExposure: api.getParams().exposure,
  };
});
console.log('bumped', JSON.stringify(after, null, 2));
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(OUT, 'env-tweak-p8-brighter.png'), fullPage: false });
console.log('wrote env-tweak-p8-brighter.png');

// Reset works
const resetMeta = await page.evaluate(() => {
  window.__envTweak.reset();
  for (let i = 0; i < 3; i++) window.__app.S.render();
  return {
    exposure: window.__app.S.renderer.toneMappingExposure,
    ls: localStorage.getItem('chem789-env-tweak'),
  };
});
console.log('reset', JSON.stringify(resetMeta, null, 2));

console.log('errs', errs);
await browser.close();
if (!meta0.hasPanel || !panelVisible) process.exitCode = 2;
if (errs.length) process.exitCode = 2;
