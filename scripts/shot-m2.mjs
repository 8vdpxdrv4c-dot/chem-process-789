import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';

const OUT = '/workspace/chem-process-789/shots';
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: [
    '--use-gl=angle', '--use-angle=swiftshader-webgl', '--enable-webgl',
    '--ignore-gpu-blocklist', '--no-sandbox',
  ],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

async function waitReady(url, ms = 45000) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: ms });
  try { await page.waitForFunction(() => window.__ready === true, null, { timeout: ms }); }
  catch { await page.waitForTimeout(4000); }
  await page.waitForTimeout(1400);
}
async function shot(name) {
  const p = path.join(OUT, name);
  await page.screenshot({ path: p, fullPage: false });
  console.log('wrote', p);
}
async function clickRail(i) {
  await page.evaluate((n) => {
    const rails = [...document.querySelectorAll('.rail a, #rail a')];
    rails[n]?.click();
  }, i);
  await page.waitForTimeout(1800);
}
async function clickLb(id) {
  await page.evaluate((id) => {
    [...document.querySelectorAll('.lb')].find((e) => e.dataset.id === id)?.click();
  }, id);
  await page.waitForTimeout(1600);
}

// —— H8 overview labels ——
await waitReady('http://127.0.0.1:5178/?p=8&q=high&softShot=1');
await shot('accept-h8-overview.png');
await clickLb('H10');
await shot('accept-h8-h10.png');

// —— F7 ——
await waitReady('http://127.0.0.1:5178/?p=7&q=high&softShot=1');
await shot('accept-f7-overview.png');

await clickRail(3); // 氟化反应核心
await page.waitForTimeout(500);
await page.evaluate(() => document.querySelector('#btnCut')?.click());
await page.waitForTimeout(1200);
await clickLb('F04');
await shot('accept-f7-f04.png');
await shot('accept-f7-step3.png');

await clickRail(1);
await clickLb('F01');
await shot('accept-f7-f01.png');

await clickRail(6); // 安全
await page.waitForTimeout(2000);
await shot('accept-f7-safety.png');

await clickLb('F07');
await shot('accept-f7-f07.png');

await browser.close();
console.log('done');
