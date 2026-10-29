/**
 * SoftGL shots: p=7/8/9 overview showing pipe flow + flare/scrub/jacket FX.
 * NO 3dfans publish.
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
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  try {
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 90000 });
  } catch {
    await page.waitForTimeout(6000);
  }
  await page.waitForTimeout(1800);
}

const report = { shots: [], errs: [], soft: null };

for (const p of [7, 8, 9]) {
  await ready(withSoftShot(`${BASE}/?p=${p}&q=high`));
  await ensureSoftShotGrade(page);
  // let FX animate a few frames
  await page.waitForTimeout(2200);
  // boost core step briefly so flow is visible
  await page.evaluate((pid) => {
    const app = window.__app;
    if (!app) return;
    // step 3 is core reaction for all three
    app.go?.(3);
  }, p);
  await page.waitForTimeout(1600);
  // overview for shot
  await page.evaluate(() => window.__app?.go?.(0));
  await page.waitForTimeout(1200);

  const meta = await page.evaluate(() => {
    const app = window.__app;
    const fx = app?.fx || app?.plant?.fx;
    const lines = fx?.flows?.lines?.map?.((l) => l.tag) || [];
    const names = [];
    app?.S?.scene?.traverse?.((o) => {
      if (/flow|Flame|Mist|flare/i.test(o.name || '')) names.push(o.name);
    });
    return {
      processId: app?.process?.id,
      softGL: !!app?.S?.softGL,
      hasOutputPass: !!app?.S?.outputPass,
      flowTags: lines,
      fxNames: names.slice(0, 40),
      hasFlame: !!fx?.flame,
      hasScrub: !!fx?.scrubMist,
      hasJacket: !!fx?.jacketPulse,
      exposure: app?.S?.renderer?.toneMappingExposure,
    };
  });
  report.shots.push(meta);
  if (!report.soft) report.soft = await softShotMeta(page);

  const file = path.join(OUT, `demo-fx-p${p}-overview.png`);
  await page.screenshot({ path: file, type: 'png' });
  console.log('wrote', file, meta);
}

// p=8 close on flare for flame visibility
await ready(withSoftShot(`${BASE}/?p=8&q=high`));
await ensureSoftShotGrade(page);
await page.waitForTimeout(1000);
await page.evaluate(() => {
  const app = window.__app;
  const a = app?.plant?.anchors?.H09;
  const cam = app?.S?.camera;
  const controls = app?.S?.controls;
  if (a && cam && controls) {
    cam.position.set(a.x - 18, a.y + 6, a.z + 28);
    controls.target.set(a.x, a.y - 2, a.z);
    cam.fov = 40;
    cam.updateProjectionMatrix();
    cam.lookAt(controls.target);
  }
  app?.plant?.setFxStep?.(6, { focus: 'H09', safetyMode: true }, { playing: true });
});
await page.waitForTimeout(2500);
const flareFile = path.join(OUT, 'demo-fx-p8-flare.png');
await page.screenshot({ path: flareFile, type: 'png' });
console.log('wrote', flareFile);

report.errs = errs.slice(0, 30);
fs.writeFileSync(path.join(OUT, 'demo-fx-report.json'), JSON.stringify(report, null, 2));
console.log('report', JSON.stringify(report, null, 2));
await browser.close();
if (errs.length) {
  console.error('PAGE ERRORS', errs.slice(0, 10));
  process.exitCode = 1;
}
