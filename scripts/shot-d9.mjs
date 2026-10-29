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
const errs = [];
page.on('pageerror', e => errs.push(String(e)));

async function ready(url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  try { await page.waitForFunction(() => window.__ready === true, null, { timeout: 45000 }); }
  catch { await page.waitForTimeout(4000); }
  await page.waitForTimeout(1200);
}
async function shot(n) {
  const p = path.join(OUT, n);
  await page.screenshot({ path: p, fullPage: false });
  console.log('wrote', p);
}
async function rail(i) {
  await page.evaluate((n) => [...document.querySelectorAll('.rail a')][n]?.click(), i);
  await page.waitForTimeout(1800);
}
async function lb(id) {
  await page.evaluate((id) => [...document.querySelectorAll('.lb')].find(e => e.dataset.id === id)?.click(), id);
  await page.waitForTimeout(1400);
}

await ready('http://127.0.0.1:5178/?p=9&q=high&softShot=1');
const chk0 = await page.evaluate(() => ({
  cold: document.querySelector('#coldBadge')?.classList.contains('show'),
  coldTxt: document.querySelector('#coldBadgeTxt')?.textContent,
  stub: document.querySelector('#stubBanner')?.classList.contains('show'),
  lbs: [...document.querySelectorAll('.lb')].map(e => e.dataset.id),
  eq: document.querySelector('#eqRxn')?.textContent,
  title: document.querySelector('#title')?.textContent,
}));
console.log('boot', JSON.stringify(chk0));
await shot('accept-d9-overview.png');

await rail(3);
await lb('D01');
await page.evaluate(() => document.querySelector('#btnCut')?.click());
await page.waitForTimeout(1000);
await shot('accept-d9-d01.png');
await shot('accept-d9-step3.png');

await rail(2);
await lb('D03');
await shot('accept-d9-d03.png');

await rail(6);
await page.waitForTimeout(2500);
const chkS = await page.evaluate(() => {
  const t = (document.querySelector('#sfp')?.innerText || '') + (document.querySelector('#eq')?.innerText || '');
  return {
    head: document.querySelector('#sfpHead')?.textContent,
    sub: document.querySelector('#sfpSub')?.textContent,
    hasBoom: /闪爆|燃爆|%LEL|爆炸下限|氢气/.test(t),
    hasDecomp: /受热分解|N₂|稀释/.test(t),
    lelDisplay: getComputedStyle(document.querySelector('#lel')).display,
    eq: document.querySelector('#eq')?.innerText,
  };
});
console.log('safety', JSON.stringify(chkS));
await shot('accept-d9-safety.png');

await lb('D06');
await shot('accept-d9-d06.png');

console.log('errs', errs);
await browser.close();
