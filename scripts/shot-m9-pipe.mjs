/**
 * SoftGL shots: p=7/8/9 overview after pipe-color realism (silver + bands).
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
  await page.waitForTimeout(1800);
  await page.evaluate(() => window.__app?.go?.(3));
  await page.waitForTimeout(1400);
  await page.evaluate(() => window.__app?.go?.(0));
  await page.waitForTimeout(1200);

  const meta = await page.evaluate(() => {
    const app = window.__app;
    const fx = app?.fx || app?.plant?.fx;
    const lines = fx?.flows?.lines?.map?.((l) => ({
      tag: l.tag,
      kids: l.root?.children?.length,
    })) || [];
    let silver = 0;
    let neonShell = 0;
    app?.S?.scene?.traverse?.((o) => {
      if (!o.isMesh || !o.material) return;
      const n = o.parent?.name || o.name || '';
      if (!/flow/i.test(n) && o.parent?.parent && !/flow/i.test(o.parent.parent.name || '')) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        if (m.isMeshStandardMaterial && m.metalness > 0.7) silver += 1;
        if (m.isShaderMaterial && m.uniforms?.uEmissive) {
          const e = m.uniforms.uEmissive.value;
          const en = m.uniforms.uEnergy?.value ?? 0;
          if (e && (e.r + e.g + e.b) * en > 0.25) neonShell += 1;
        }
      }
    });
    const legend = [...document.querySelectorAll('.lg i, .lg .sw, .legend i, [class*=legend] i')]
      .slice(0, 8)
      .map((el) => getComputedStyle(el).backgroundColor);
    return {
      processId: app?.process?.id,
      softGL: !!app?.S?.softGL,
      flowLines: lines,
      silverMats: silver,
      neonShell,
      exposure: app?.S?.renderer?.toneMappingExposure,
      legendSample: legend,
    };
  });
  report.shots.push(meta);
  if (!report.soft) report.soft = await softShotMeta(page);

  const file = path.join(OUT, `m9-pipe-p${p}-overview.png`);
  await page.screenshot({ path: file, type: 'png' });
  console.log('wrote', file, JSON.stringify(meta));
}

report.errs = errs.slice(0, 30);
fs.writeFileSync(path.join(OUT, 'm9-pipe-report.json'), JSON.stringify(report, null, 2));
console.log('report', JSON.stringify(report, null, 2));
await browser.close();
if (errs.length) {
  console.error('PAGE ERRORS', errs.slice(0, 10));
  process.exitCode = 1;
}
