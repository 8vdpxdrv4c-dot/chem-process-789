/**
 * M5 联调验收截图：p=7|8|9 各拍 overview + safety，并校验事故口径不串。
 */
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
const errs = [];
page.on('pageerror', (e) => errs.push(String(e)));

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
  return p;
}
async function clickRail(i) {
  await page.evaluate((n) => {
    const rails = [...document.querySelectorAll('.rail a, #rail a')];
    rails[n]?.click();
  }, i);
  await page.waitForTimeout(2200);
}

function expectOk(cond, msg, issues) {
  if (!cond) issues.push(msg);
}

const report = { processes: {}, shell: {}, issues: [], errs };

const SPECS = [
  {
    p: 7, key: 'fluorination', short: '氟化',
    overviewMust: [/氟化/, /安全等级 · 正常/],
    safetyMust: [/HF/, /水幕|碱雾|洗消/, /ESD/],
    safetyForbid: [/闪爆/, /燃爆/, /%LEL/, /氢气泄漏/],
    coldBadge: false,
    showLel: false,
  },
  {
    p: 8, key: 'hydrogenation', short: '加氢',
    overviewMust: [/加氢/, /安全等级 · 正常/],
    safetyMust: [/H₂|氢气/, /%LEL|LEL/, /闪爆|燃爆/, /ESD|火炬/],
    safetyForbid: [/HF 泄漏/, /受热分解示意/, /水幕\/碱雾/],
    coldBadge: false,
    showLel: true,
  },
  {
    p: 9, key: 'diazotization', short: '重氮化',
    overviewMust: [/重氮/, /安全等级 · 正常/, /低温单元 · 0～5/],
    safetyMust: [/断冷|超温|冷却失效|分解/, /N₂|N2|稀释/, /受热分解示意/],
    safetyForbid: [/闪爆/, /燃爆/, /%LEL/, /HF 泄漏/, /氢气泄漏/],
    coldBadge: true,
    showLel: false,
  },
];

for (const spec of SPECS) {
  const issues = [];
  await waitReady(`http://127.0.0.1:5178/?p=${spec.p}&q=high&softShot=1`);

  const ov = await page.evaluate(() => {
    const cs = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const s = getComputedStyle(el);
      return {
        display: s.display,
        visibility: s.visibility,
        color: s.color,
        bg: s.backgroundColor,
        text: (el.textContent || '').replace(/\s+/g, ' ').trim(),
        show: el.classList.contains('show'),
        hidden: el.hidden,
      };
    };
    const legend = [...document.querySelectorAll('.legend i, .legend .sw, #legend i, .leg i, .dock-legend i, [data-leg] i')]
      .map((el) => getComputedStyle(el).backgroundColor);
    const legendText = (document.querySelector('.legend, #legend, .dock-legend, .leg')?.innerText || '')
      .replace(/\s+/g, ' ').trim();
    return {
      title: document.querySelector('#title')?.textContent?.trim(),
      sbadge: cs('#sbadge'),
      sbadgeTxt: document.querySelector('#sbadgeTxt')?.textContent?.trim(),
      coldBadge: cs('#coldBadge'),
      coldTxt: document.querySelector('#coldBadgeTxt')?.textContent?.trim(),
      railCount: document.querySelectorAll('.rail a, #rail a').length,
      railLabels: [...document.querySelectorAll('.rail a, #rail a')].map((a) => a.dataset.n || a.textContent),
      card: !!document.querySelector('#card'),
      dock: !!(document.querySelector('.dock, #dock, .dock-ctrl, #dockCtrl') || document.querySelector('[class*=dock]')),
      tag: document.querySelector('.tag')?.textContent?.replace(/\s+/g, ' ').trim(),
      chap: document.querySelector('.chap')?.textContent?.replace(/\s+/g, ' ').trim(),
      eq: document.querySelector('#eq')?.innerText?.replace(/\s+/g, ' ').trim(),
      bodyText: document.body.innerText.replace(/\s+/g, ' ').slice(0, 1200),
      legendText,
      legendColors: legend.slice(0, 12),
      hfBandSample: (() => {
        // probe any HF-colored chip in legend by text
        const nodes = [...document.querySelectorAll('.legend span, .legend label, .leg span, [class*=legend] *')];
        const hf = nodes.find((n) => /HF|氟化氢/.test(n.textContent || ''));
        if (!hf) return null;
        const sw = hf.previousElementSibling || hf.querySelector('i') || hf;
        return getComputedStyle(sw).backgroundColor || getComputedStyle(hf).color;
      })(),
    };
  });

  for (const re of spec.overviewMust) {
    expectOk(re.test(ov.bodyText) || re.test(ov.title || '') || re.test(ov.sbadgeTxt || '') || re.test(ov.coldTxt || ''),
      `p=${spec.p} overview missing ${re}`, issues);
  }
  expectOk(ov.railCount >= 7, `p=${spec.p} rail count ${ov.railCount}`, issues);
  expectOk(ov.card, `p=${spec.p} missing #card`, issues);
  expectOk(!!ov.sbadge && /安全等级 · 正常/.test(ov.sbadgeTxt || ''), `p=${spec.p} safety badge not normal`, issues);

  if (spec.coldBadge) {
    expectOk(ov.coldBadge && !ov.coldBadge.hidden && ov.coldBadge.show !== false,
      `p=${spec.p} cold badge should show`, issues);
    expectOk(/低温单元/.test(ov.coldTxt || ''), `p=${spec.p} cold badge text`, issues);
    // badges must be separate elements
    expectOk(ov.sbadgeTxt !== ov.coldTxt, `p=${spec.p} cold mixed into safety badge`, issues);
  } else {
    expectOk(!ov.coldBadge || ov.coldBadge.hidden || !ov.coldBadge.show,
      `p=${spec.p} cold badge should be hidden`, issues);
  }

  const ovPath = await shot(`m5-p${spec.p}-overview.png`);

  // —— safety step (rail index 6) ——
  await clickRail(6);
  await page.waitForTimeout(800);
  // ensure sfp open
  await page.evaluate(() => {
    const sfp = document.querySelector('#sfp');
    if (sfp && !sfp.classList.contains('show') && !sfp.classList.contains('on') && getComputedStyle(sfp).opacity === '0') {
      document.querySelector('#sfbtn')?.click();
    }
  });
  await page.waitForTimeout(1500);

  const saf = await page.evaluate(() => {
    const t = (sel) => document.querySelector(sel)?.textContent?.trim() || '';
    const panel = document.querySelector('#sfp');
    const panelText = (panel?.innerText || '').replace(/\s+/g, ' ');
    const eqText = (document.querySelector('#eq')?.innerText || '').replace(/\s+/g, ' ');
    const hint = (document.querySelector('.hint')?.innerText || '').replace(/\s+/g, ' ');
    const body = document.body.innerText.replace(/\s+/g, ' ');
    const lel = document.querySelector('#lel');
    const lelDisp = lel ? getComputedStyle(lel).display : 'none';
    const lelShow = lel && lelDisp !== 'none' && (lel.classList.contains('show') || parseFloat(getComputedStyle(lel).opacity || '1') > 0.1);
    const faults = [...document.querySelectorAll('#sfpFaults button, #sfpFaults .chip, #sfpFaults a, #sfp .chip, #sfp button')]
      .map((b) => (b.textContent || '').trim()).filter(Boolean);
    return {
      head: t('#sfpHead'),
      sub: t('#sfpSub'),
      title: t('#sfpTitle'),
      panelText,
      eqText,
      hint,
      sbadgeTxt: t('#sbadgeTxt'),
      coldTxt: t('#coldBadgeTxt'),
      coldShow: document.querySelector('#coldBadge')?.classList.contains('show') && !document.querySelector('#coldBadge')?.hidden,
      lelDisplay: lelDisp,
      lelShow: !!lelShow,
      faults,
      sfpVisible: !!(panel && (panel.classList.contains('show') || panel.classList.contains('on') || getComputedStyle(panel).opacity !== '0')),
      combined: `${panelText} ${eqText} ${hint} ${body.slice(0, 800)}`,
    };
  });

  for (const re of spec.safetyMust) {
    expectOk(re.test(saf.combined), `p=${spec.p} safety missing ${re} | head=${saf.head} sub=${saf.sub} eq=${saf.eqText}`, issues);
  }
  for (const re of spec.safetyForbid) {
    expectOk(!re.test(saf.combined) || (spec.p === 8 && /H₂|氢气|%LEL|闪爆/.test(re.source) === false),
      // forbid check: simply must not appear
      `p=${spec.p} safety FORBIDDEN phrase present: ${re} | head=${saf.head}`, issues);
  }
  // re-check forbids more carefully without the weird or
  for (const re of spec.safetyForbid) {
    if (re.test(saf.combined)) {
      // already pushed above with soft logic — force clean
      if (!issues.some((x) => x.includes(`FORBIDDEN phrase present: ${re}`))) {
        issues.push(`p=${spec.p} safety FORBIDDEN phrase present: ${re}`);
      }
    }
  }

  if (spec.showLel) {
    expectOk(saf.lelDisplay !== 'none', `p=${spec.p} %LEL should be visible on safety`, issues);
  } else {
    expectOk(saf.lelDisplay === 'none' || !saf.lelShow, `p=${spec.p} %LEL must stay hidden`, issues);
  }

  const safPath = await shot(`m5-p${spec.p}-safety.png`);

  report.processes[spec.p] = {
    short: spec.short,
    overview: ovPath,
    safety: safPath,
    overviewMeta: {
      title: ov.title,
      sbadgeTxt: ov.sbadgeTxt,
      coldTxt: ov.coldTxt,
      coldHidden: ov.coldBadge?.hidden,
      railCount: ov.railCount,
      tag: ov.tag,
      chap: ov.chap,
      eq: ov.eq,
      dock: ov.dock,
      card: ov.card,
    },
    safetyMeta: {
      head: saf.head,
      sub: saf.sub,
      eq: saf.eqText,
      hint: saf.hint,
      sbadgeTxt: saf.sbadgeTxt,
      coldShow: saf.coldShow,
      coldTxt: saf.coldTxt,
      lelDisplay: saf.lelDisplay,
      faults: saf.faults.slice(0, 12),
      sfpVisible: saf.sfpVisible,
    },
    issues,
  };
  report.issues.push(...issues);
}

// shell consistency across overviews: same chrome pieces present
const shells = [7, 8, 9].map((p) => report.processes[p].overviewMeta);
report.shell = {
  allHaveRail7: shells.every((s) => s.railCount >= 7),
  allHaveCard: shells.every((s) => s.card),
  allHaveDock: shells.every((s) => s.dock),
  allNormalBadge: shells.every((s) => /安全等级 · 正常/.test(s.sbadgeTxt || '')),
  onlyP9Cold: shells[0].coldHidden !== false && shells[1].coldHidden !== false && /低温/.test(shells[2].coldTxt || ''),
  titles: shells.map((s) => s.title),
};

console.log('REPORT', JSON.stringify(report, null, 2));
console.log('errs', errs);
await browser.close();

if (report.issues.length) {
  console.error('ISSUES', report.issues.length);
  process.exitCode = 2;
} else {
  console.log('M5 OK');
}
