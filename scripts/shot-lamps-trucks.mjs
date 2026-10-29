/**
 * SoftGL shots: p=8 overview + road/lamps + trucks.
 * Clears chem789-env-tweak so CODE_DEFAULTS boot.
 * NO 3dfans publish.
 */
import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';
import { ensureSoftShotGrade, softShotMeta, withSoftShot } from './lib/softShot.mjs';

const OUT = '/workspace/chem-process-789/shots';
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.SHOT_BASE || 'http://127.0.0.1:4178';

const EXPECT = {
  exposure: 0.47,
  toneMapping: 'ACESFilmic',
  fogColor: '20245b',
  fogDensity: 0.002,
  envIntensity: 2.5,
  envMapEnabled: true,
  streetLampIntensity: 6,
  plantColor: 'fe7606',
};

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
  await page.waitForTimeout(2500);
}

await ready(withSoftShot(`${BASE}/?p=8&q=high`));
await ensureSoftShotGrade(page);
await page.waitForTimeout(800);

const meta = await page.evaluate(() => {
  const S = window.__app?.S;
  const g = S?.scene?.getObjectByName?.('ground')?.userData?.env;
  const st = S?.scene?.getObjectByName?.('streetLights')?.userData?.env || g?.street;
  const traffic = S?.scene?.getObjectByName?.('roadTraffic');
  const TONE = { 0: 'None', 1: 'Linear', 2: 'Reinhard', 3: 'Cineon', 4: 'ACESFilmic', 5: 'Custom', 6: 'AgX', 7: 'Neutral' };
  let metalSample = null;
  S?.scene?.traverse?.((o) => {
    if (metalSample || !o.isMesh || !o.material) return;
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    if (m?.isMeshStandardMaterial && m.metalness > 0.7) {
      metalSample = {
        name: o.name || o.parent?.name || '',
        metalness: m.metalness,
        roughness: m.roughness,
        envMap: !!m.envMap,
        envMapIntensity: m.envMapIntensity,
      };
    }
  });
  let lampMeshes = 0;
  const street = S?.scene?.getObjectByName?.('streetLights');
  street?.traverse?.((o) => { if (o.isMesh) lampMeshes += 1; });
  return {
    ready: !!window.__ready,
    softGL: !!S?.softGL,
    hasOutputPass: !!S?.outputPass,
    toneMapping: TONE[S?.renderer?.toneMapping] || String(S?.renderer?.toneMapping),
    exposure: S?.renderer?.toneMappingExposure,
    fogColor: S?.scene?.fog?.color?.getHexString?.(),
    fogDensity: S?.scene?.fog?.density,
    envIntensity: S?.scene?.environmentIntensity,
    hasEnv: !!S?.scene?.environment,
    plantColor: S?.plantA?.color?.getHexString?.(),
    plantAIntensity: S?.plantA?.intensity,
    keyIntensity: S?.key?.intensity,
    keyPos: S?.key ? [S.key.position.x, S.key.position.y, S.key.position.z] : null,
    bloomStrength: S?.bloom?.strength,
    dofEnabled: S?.bokeh?.enabled,
    dofAperture: S?.bokeh?.uniforms?.aperture?.value,
    streetLampCount: st?.lights?.length ?? 0,
    streetLampIntensity: st?.lights?.[0]?.intensity,
    streetHeadEmissiveIntensity: st?.headMat?.emissiveIntensity,
    lampMeshes,
    truckCount: traffic?.userData?.fleet?.length ?? 0,
    truckPos: traffic?.children?.[0]?.position ? {
      x: +traffic.children[0].position.x.toFixed(2),
      z: +traffic.children[0].position.z.toFixed(2),
    } : null,
    metalSample,
    codeDefaultsOk: !!(window.__envTweak?.getDefaults),
    defaultsSnippet: window.__envTweak?.getDefaults?.(),
  };
});

const grade = await softShotMeta(page);
const overview = path.join(OUT, 'lamps-trucks-p8-overview.png');
await page.screenshot({ path: overview, fullPage: false });

// Road / lamps / trucks camera — look along south asphalt road
await page.evaluate(() => {
  const S = window.__app?.S;
  if (!S) return;
  S.camera.position.set(28, 14, 55);
  S.controls.target.set(18, 1.5, -28.8); // near z = -size*0.12 for size 240
  S.camera.fov = 40;
  S.camera.updateProjectionMatrix();
  S.controls.update();
  // Advance traffic so trucks are mid-road
  const traffic = S.scene.getObjectByName('roadTraffic');
  if (traffic?.userData?.update) {
    for (let i = 0; i < 90; i++) traffic.userData.update(33);
  }
  S.render();
});
await page.waitForTimeout(600);
const road = path.join(OUT, 'lamps-trucks-p8-road.png');
await page.screenshot({ path: road, fullPage: false });

// Closer asphalt + lamp pools + truck
await page.evaluate(() => {
  const S = window.__app?.S;
  if (!S) return;
  const traffic = S.scene.getObjectByName('roadTraffic');
  const t0 = traffic?.children?.[0];
  if (t0) {
    const p = t0.position;
    S.camera.position.set(p.x + 18, 8, p.z + 16);
    S.controls.target.set(p.x, 1.2, p.z);
  } else {
    S.camera.position.set(10, 8, -12);
    S.controls.target.set(0, 1, -28.8);
  }
  S.camera.fov = 42;
  S.camera.updateProjectionMatrix();
  S.controls.update();
  S.render();
});
await page.waitForTimeout(500);
const truck = path.join(OUT, 'lamps-trucks-p8-truck.png');
await page.screenshot({ path: truck, fullPage: false });

const checks = [];
const approx = (a, b, eps = 0.02) => Math.abs(a - b) <= eps;
if (meta.toneMapping !== EXPECT.toneMapping) checks.push(`tone ${meta.toneMapping}`);
// softShot grades exposure — compare pre-grade via defaults
const d = meta.defaultsSnippet || {};
if (d.exposure != null && !approx(d.exposure, EXPECT.exposure)) checks.push(`defaults.exposure ${d.exposure}`);
if (d.toneMapping !== EXPECT.toneMapping) checks.push(`defaults.tone ${d.toneMapping}`);
if (d.envIntensity != null && !approx(d.envIntensity, EXPECT.envIntensity)) checks.push(`defaults.env ${d.envIntensity}`);
if (meta.fogColor !== EXPECT.fogColor) checks.push(`fogColor ${meta.fogColor}`);
if (!approx(meta.fogDensity, EXPECT.fogDensity, 0.0001)) checks.push(`fogDensity ${meta.fogDensity}`);
if (!meta.hasEnv) checks.push('no scene.environment');
if (!meta.hasOutputPass) checks.push('no OutputPass');
if ((meta.streetLampCount || 0) < 8) checks.push(`few lamps ${meta.streetLampCount}`);
if ((meta.truckCount || 0) < 4) checks.push(`few trucks ${meta.truckCount}`);
if (!meta.metalSample?.envMap) checks.push('metal missing envMap');
if ((meta.metalSample?.envMapIntensity || 0) < 1.5) checks.push(`weak envMapIntensity ${meta.metalSample?.envMapIntensity}`);

const report = { meta, grade, overview, road, truck, checks, errs, expect: EXPECT };
console.log(JSON.stringify(report, null, 2));
fs.writeFileSync(path.join(OUT, 'lamps-trucks-report.json'), JSON.stringify(report, null, 2));
await browser.close();
if (checks.length || errs.length) {
  console.error('FAIL', checks, errs.slice(0, 5));
  process.exit(1);
}
console.log('OK', overview, road, truck);
