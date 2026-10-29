/**
 * Verify baked CODE_DEFAULTS + screenshot p=8 overview.
 * Clears chem789-env-tweak so localStorage cannot override boot.
 * SoftGL: verify ungraded look-dev params, then apply softShot grade for the overview PNG
 * so agent screenshots approximate real-GPU darkness.
 */
import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';
import { ensureSoftShotGrade, softShotMeta } from './lib/softShot.mjs';

const OUT = '/workspace/chem-process-789/shots';
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.SHOT_BASE || 'http://127.0.0.1:4178';
const EXPECT = {
  exposure: 2.2,
  toneMapping: 'AgX',
  background: '6a8dd2',
  fogColor: '0029cc',
  fogDensity: 0.0011,
  envIntensity: 1.36,
  hemiIntensity: 3,
  keyIntensity: 3.28,
  fillIntensity: 4,
  rimIntensity: 0.91,
  bloomStrength: 0.59,
  bloomRadius: 1.5,
  bloomThreshold: 1.58,
  groundOuter: '342704',
  streetLampIntensity: 2.46,
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

await page.goto(`${BASE}/?p=8&q=high`, { waitUntil: 'domcontentloaded', timeout: 60000 });
try {
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
} catch {
  await page.waitForTimeout(5000);
}
await page.waitForTimeout(3000);

const meta = await page.evaluate(() => {
  const S = window.__app?.S;
  const g = S?.scene?.getObjectByName?.('ground')?.userData?.env;
  const st = S?.scene?.getObjectByName?.('streetLights')?.userData?.env || g?.street;
  const tonemap = S?.renderer?.toneMapping;
  const TONE = { 0: 'None', 1: 'Linear', 2: 'Reinhard', 3: 'Cineon', 4: 'ACESFilmic', 5: 'Custom', 6: 'AgX', 7: 'Neutral' };
  return {
    ready: !!window.__ready,
    softGL: !!S?.softGL,
    toneMapping: TONE[tonemap] || String(tonemap),
    exposure: S?.renderer?.toneMappingExposure,
    background: S?.scene?.background?.isColor ? S.scene.background.getHexString() : null,
    fogColor: S?.scene?.fog?.color?.getHexString?.(),
    fogDensity: S?.scene?.fog?.density,
    envIntensity: S?.scene?.environmentIntensity,
    hasEnv: !!S?.scene?.environment,
    hemiSky: S?.hemi?.color?.getHexString?.(),
    hemiGround: S?.hemi?.groundColor?.getHexString?.(),
    hemiIntensity: S?.hemi?.intensity,
    keyColor: S?.key?.color?.getHexString?.(),
    keyIntensity: S?.key?.intensity,
    keyPos: S?.key ? [S.key.position.x, S.key.position.y, S.key.position.z] : null,
    fillIntensity: S?.fill?.intensity,
    fillPos: S?.fill ? [S.fill.position.x, S.fill.position.y, S.fill.position.z] : null,
    rimIntensity: S?.rim?.intensity,
    plantColor: S?.plantA?.color?.getHexString?.(),
    plantAIntensity: S?.plantA?.intensity,
    plantBIntensity: S?.plantB?.intensity,
    bloom: S?.bloom ? { enabled: S.bloom.enabled, s: S.bloom.strength, r: S.bloom.radius, t: S.bloom.threshold } : null,
    bokehEnabled: S?.bokeh?.enabled,
    dofModes: S?.DOF_MODES,
    groundOuter: g?.outerMat?.color?.getHexString?.(),
    groundOuterRough: g?.outerMat?.roughness,
    groundPad: g?.padMat?.color?.getHexString?.(),
    groundPadRough: g?.padMat?.roughness,
    groundPadEmissiveIntensity: g?.padMat?.emissiveIntensity,
    groundAsphaltRough: g?.asphaltMats?.[0]?.roughness,
    groundUnitRough: g?.unitMat?.roughness,
    groundUnitEmissiveIntensity: g?.unitMat?.emissiveIntensity,
    curbRough: g?.curbMat?.roughness,
    curbEmissiveIntensity: g?.curbMat?.emissiveIntensity,
    streetLampIntensity: st?.lights?.[0]?.intensity,
    streetHeadEmissiveIntensity: st?.headMat?.emissiveIntensity,
    panelDefaults: window.__envTweak?.getDefaults?.() || null,
  };
});

const mismatches = [];
function near(a, b, eps = 1e-6) {
  return Math.abs(Number(a) - Number(b)) <= eps;
}
if (meta.toneMapping !== EXPECT.toneMapping) mismatches.push(`toneMapping ${meta.toneMapping}`);
if (!near(meta.exposure, EXPECT.exposure)) mismatches.push(`exposure ${meta.exposure}`);
if (meta.background !== EXPECT.background) mismatches.push(`background ${meta.background}`);
if (meta.fogColor !== EXPECT.fogColor) mismatches.push(`fogColor ${meta.fogColor}`);
if (!near(meta.fogDensity, EXPECT.fogDensity)) mismatches.push(`fogDensity ${meta.fogDensity}`);
if (!near(meta.envIntensity, EXPECT.envIntensity)) mismatches.push(`envIntensity ${meta.envIntensity}`);
if (!near(meta.hemiIntensity, EXPECT.hemiIntensity)) mismatches.push(`hemiIntensity ${meta.hemiIntensity}`);
if (!near(meta.keyIntensity, EXPECT.keyIntensity)) mismatches.push(`keyIntensity ${meta.keyIntensity}`);
if (!near(meta.fillIntensity, EXPECT.fillIntensity)) mismatches.push(`fillIntensity ${meta.fillIntensity}`);
if (!near(meta.rimIntensity, EXPECT.rimIntensity)) mismatches.push(`rimIntensity ${meta.rimIntensity}`);
if (!near(meta.bloom?.s, EXPECT.bloomStrength)) mismatches.push(`bloomStrength ${meta.bloom?.s}`);
if (!near(meta.bloom?.r, EXPECT.bloomRadius)) mismatches.push(`bloomRadius ${meta.bloom?.r}`);
if (!near(meta.bloom?.t, EXPECT.bloomThreshold)) mismatches.push(`bloomThreshold ${meta.bloom?.t}`);
if (meta.groundOuter !== EXPECT.groundOuter) mismatches.push(`groundOuter ${meta.groundOuter}`);
if (!near(meta.streetLampIntensity, EXPECT.streetLampIntensity)) mismatches.push(`streetLamp ${meta.streetLampIntensity}`);
if (meta.softGL && meta.bokehEnabled) mismatches.push('softGL but bokeh enabled');

// Raw SoftGL (pre-grade) reference
const rawOut = path.join(OUT, 'lookdev-bake-p8-raw-softgl.png');
await page.screenshot({ path: rawOut, fullPage: false });

// SoftGL shot grade → user-facing overview (closer to real-GPU darkness)
const grade = await ensureSoftShotGrade(page);
await page.waitForTimeout(500);
const gradeMeta = await softShotMeta(page);
const out = path.join(OUT, 'lookdev-bake-p8-overview.png');
await page.screenshot({ path: out, fullPage: false });

console.log(JSON.stringify({ meta, mismatches, grade, gradeMeta, rawOut, out, errs }, null, 2));
await browser.close();
if (mismatches.length || errs.length) process.exitCode = 2;
