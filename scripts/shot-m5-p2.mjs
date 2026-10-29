import { chromium } from '/workspace/toilet-demo-3d/node_modules/playwright/index.mjs';
import path from 'path';
import fs from 'fs';
const OUT = '/workspace/chem-process-789/shots';
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome', headless: true,
  args: ['--use-gl=angle','--use-angle=swiftshader-webgl','--enable-webgl','--ignore-gpu-blocklist','--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
async function ready(url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  // bust any cached JSON
  try { await page.waitForFunction(() => window.__ready === true, null, { timeout: 45000 }); }
  catch { await page.waitForTimeout(4000); }
  await page.waitForTimeout(1400);
}
async function shot(n) {
  const p = path.join(OUT, n);
  await page.screenshot({ path: p, fullPage: false });
  console.log('wrote', p);
}
async function rail(i) {
  await page.evaluate((n) => [...document.querySelectorAll('.rail a')][n]?.click(), i);
  await page.waitForTimeout(2000);
}

await ready('http://127.0.0.1:5178/?p=7&_=' + Date.now());
const f7 = await page.evaluate(() => ({
  nodes: [...document.querySelectorAll('#chain .nd, .chain .nd')].map((e) => e.textContent.trim()),
  on: [...document.querySelectorAll('#chain .nd.on, .chain .nd.on')].map((e) => e.textContent.trim()),
}));
console.log('p7 overview', JSON.stringify(f7));
await shot('m5-p7-overview.png');
await rail(6);
const f7s = await page.evaluate(() => ({
  nodes: [...document.querySelectorAll('#chain .nd, .chain .nd')].map((e) => e.textContent.trim()),
  on: [...document.querySelectorAll('#chain .nd.on, .chain .nd.on')].map((e) => e.textContent.trim()),
}));
console.log('p7 safety', JSON.stringify(f7s));
await shot('m5-p7-safety.png');

await ready('http://127.0.0.1:5178/?p=8&_=' + Date.now());
const h8 = await page.evaluate(() => ({
  nodes: [...document.querySelectorAll('#chain .nd, .chain .nd')].map((e) => e.textContent.trim()),
  on: [...document.querySelectorAll('#chain .nd.on, .chain .nd.on')].map((e) => e.textContent.trim()),
}));
console.log('p8 overview', JSON.stringify(h8));
await shot('m5-p8-overview.png');

await browser.close();
