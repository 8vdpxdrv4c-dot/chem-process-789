/**
 * Environment upgrade shots: dusk sky / mountains / asphalt / DOF.
 * Force ?q=high so BokehPass runs under SwiftShader.
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
  // Settle bloom/DOF + first paint
  await page.waitForTimeout(2500);
}

for (const p of [8, 7]) {
  await waitReady(`${BASE}/?p=${p}&q=high&softShot=1`);
  const meta = await page.evaluate(() => {
    const S = window.__app?.S;
    return {
      ready: !!window.__ready,
      hasBokeh: !!S?.bokeh,
      fogDensity: S?.scene?.fog?.density,
      fogColor: S?.scene?.fog?.color?.getHexString?.(),
      bgIsTex: !!(S?.scene?.background && S.scene.background.isTexture),
      mountainCount: S?.scene?.getObjectByName?.('mountains')?.children?.length,
      groundName: S?.scene?.getObjectByName?.('ground')?.name
        || S?.scene?.children?.find?.(c => c.name === 'ground' || c.type === 'Group')?.name,
    };
  });
  console.log('p=' + p, JSON.stringify(meta));
  const out = path.join(OUT, `env-p${p}-overview.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log('wrote', out);
}

console.log('errs', errs);
await browser.close();
if (errs.length) process.exitCode = 2;
