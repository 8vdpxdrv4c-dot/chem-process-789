/**
 * Zipper tone shots: cooler fog + PMREM IBL reflections.
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
  await page.waitForTimeout(2800);
}

for (const p of [8, 7]) {
  await waitReady(`${BASE}/?p=${p}&q=high&softShot=1`);
  const meta = await page.evaluate(() => {
    const S = window.__app?.S;
    const fog = S?.scene?.fog;
    return {
      ready: !!window.__ready,
      fogDensity: fog?.density,
      fogColor: fog?.color?.getHexString?.(),
      bgIsColor: !!(S?.scene?.background && S.scene.background.isColor),
      bgHex: S?.scene?.background?.isColor ? S.scene.background.getHexString() : null,
      envIntensity: S?.scene?.environmentIntensity,
      hasEnv: !!S?.scene?.environment,
      exposure: S?.renderer?.toneMappingExposure,
      bloom: S?.bloom ? { s: S.bloom.strength, r: S.bloom.radius, t: S.bloom.threshold } : null,
      keyColor: S?.key?.color?.getHexString?.(),
      keyIntensity: S?.key?.intensity,
      streetLights: !!S?.scene?.getObjectByName?.('streetLights'),
      mountains: S?.scene?.getObjectByName?.('mountains')?.children?.length,
    };
  });
  console.log('p=' + p, JSON.stringify(meta, null, 2));
  const out = path.join(OUT, `zip-tone-p${p}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log('wrote', out);
}

console.log('errs', errs);
await browser.close();
if (errs.length) process.exitCode = 2;
