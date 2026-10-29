/**
 * Ground hierarchy + DOF mode shots for p=8.
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
  await page.waitForTimeout(2500);
}

await waitReady(`${BASE}/?p=8&q=high&softShot=1`);
const metaOv = await page.evaluate(() => {
  const S = window.__app?.S;
  const g = S?.scene?.getObjectByName?.('ground');
  const mats = [];
  g?.children?.forEach?.((c) => {
    if (c.isMesh && c.material?.color) {
      mats.push({
        geo: c.geometry?.type,
        color: c.material.color.getHexString(),
        y: +c.position.y.toFixed(3),
        em: c.material.emissiveIntensity ?? 0,
      });
    }
  });
  return {
    ready: !!window.__ready,
    dofMode: S?.getDofMode?.(),
    ap: S?.bokeh?.uniforms?.aperture?.value,
    mb: S?.bokeh?.uniforms?.maxblur?.value,
    bokehEnabled: S?.bokeh?.enabled,
    streetLights: !!S?.scene?.getObjectByName?.('streetLights'),
    topMats: mats.slice(0, 8),
  };
});
console.log('overview', JSON.stringify(metaOv, null, 2));
await page.screenshot({ path: path.join(OUT, 'ground-dof-p8-overview.png'), fullPage: false });
console.log('wrote overview');

// Close focus on H05: set DOF + snap camera (fly can lag under SwiftShader RAF)
await page.evaluate(() => {
  const app = window.__app;
  const S = app.S;
  const a = app.plant.anchors.H05;
  S.setDofMode('close');
  S.camera.position.set(a.x + 18, a.y + 8, a.z + 22);
  S.controls.target.set(a.x, Math.max(4, a.y * 0.45), a.z);
  S.camera.fov = 38;
  S.camera.updateProjectionMatrix();
  S.controls.update();
  app.hud?.showKnow?.('H05');
  app.openDevice?.('H05', { flyCam: false });
  // force a few renders
  for (let i = 0; i < 3; i++) S.render();
});
await page.waitForTimeout(800);
const metaFocus = await page.evaluate(() => {
  const S = window.__app?.S;
  return {
    dofMode: S?.getDofMode?.(),
    ap: S?.bokeh?.uniforms?.aperture?.value,
    mb: S?.bokeh?.uniforms?.maxblur?.value,
    bokehEnabled: S?.bokeh?.enabled,
    cam: S?.camera?.position?.toArray?.()?.map((n) => +n.toFixed(2)),
    tgt: S?.controls?.target?.toArray?.()?.map((n) => +n.toFixed(2)),
  };
});
console.log('focus', JSON.stringify(metaFocus, null, 2));
await page.screenshot({ path: path.join(OUT, 'ground-dof-p8-focus.png'), fullPage: false });
console.log('wrote focus');

console.log('errs', errs);
await browser.close();
if (errs.length) process.exitCode = 2;
