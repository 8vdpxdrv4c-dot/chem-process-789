/**
 * Common-shell HUD — aligned to design-v1-工艺789/common-shell.html
 * Tokens & selectors: tag / chap / safety-badge / title / eq / rail / #card / flow / dock-ctrl / sfbtn / sfp
 */
export function createHUD(root, {
  process,
  processes,
  onStep,
  onPlay,
  onCutaway,
  onAlarm,
  onReset,
  onProcessChange,
  onDemo,
  onCardBack,
}) {
  const legend = (process.legend || [])
    .map((l) => {
      const c = l.color || '#fff';
      const isWhite = /^#f[4-9a-f]f?[4-9a-f]f?[4-9a-b]/i.test(c) || c.toLowerCase() === '#ffffff';
      const border = isWhite ? 'box-shadow:inset 0 0 0 1px rgba(255,255,255,.85),0 0 0 1px rgba(180,200,220,.35);' : '';
      return `<span><i style="background:${c};${border}"></i>${l.label}</span>`;
    })
    .join('');
  const flowNodes = (process.flowNodes || [])
    .map((n, i) => `<span class="nd" data-fi="${i}">${n}</span>`)
    .join('<span class="ar">›</span>');

  root.innerHTML = `
    <div class="pswitch" id="pswitch"></div>
    <div class="tag"><i></i>重点监管危险化工工艺<span class="badge-teach">教学示意</span></div>
    <div class="chap" id="chap"><em>步骤 0</em> · —<small> / — 步</small></div>
    <div class="safety-badge" id="sbadge"><span class="dot"></span><span id="sbadgeTxt">安全等级 · 正常</span></div>
    <div class="cold-badge" id="coldBadge" hidden><span class="dot"></span><span id="coldBadgeTxt">低温单元 · 0～5 ℃</span></div>
    <div class="hint">拖动旋转 · 滚轮缩放 · 点击设备查看知识卡 · ←→ 切换步骤</div>
    <div class="title" id="title">${process.title || ''}</div>
    <div class="eq glass" id="eq">
      <span id="eqRxn">${process.reactionHtml || ''}</span>
      <span class="dh" id="eqDh">${process.dh || ''}</span>
    </div>
    <div class="rail glass" id="rail"><div class="hd">课时步骤</div></div>
    <div class="sfbtn" id="sfbtn">⚠ 报警演示</div>
    <div class="lel glass" id="lel">
      <div class="k">可燃气体 · %LEL</div>
      <div class="bar" id="lelBar" style="--w:0%"><i></i></div>
      <div class="v" id="lelVal">0%<small> / 报警阈 25%LEL</small></div>
    </div>
    <div class="sfp" id="sfp">
      <div class="hd"><span id="sfpTitle">安全演示 SAFETY</span><button type="button" class="x" id="sfpClose">×</button></div>
      <div class="big" id="sfpHead">⚠ 安全演示</div>
      <div class="big alt" id="sfpSub">—</div>
      <div class="grp" id="sfpFaultGrp">故障演示（点击开启 / 关闭）</div>
      <div id="sfpFaults"></div>
      <div class="grp" id="sfpEsdGrp">应急处置</div>
      <div id="sfpEsd"></div>
      <div class="row2">
        <button type="button" id="btnSound">🔈 报警声：关</button>
        <button type="button" id="btnAllReset">全部复位</button>
      </div>
    </div>
    <div id="card">
      <div class="hd">
        <span class="cd" id="cardCode">—</span>
        <div>
          <h3 id="cardName">—</h3>
          <div class="step" id="cardStep"></div>
        </div>
        <button type="button" class="bk" id="cardBack">‹ 返回</button>
      </div>
      <div class="role" id="cardRole"></div>
      <div class="kv" id="cardKv"></div>
      <div class="why" id="cardWhy"><b>原理：</b></div>
      <div class="why w" id="cardMistake"><b>易错：</b></div>
      <button type="button" class="demo-btn" id="cardDemo">▶ 看一看</button>
    </div>
    <div class="flow glass" id="flow">
      <div class="hd">
        <span>物料流向</span>
        <span class="lg">${legend}</span>
      </div>
      <div class="chain" id="chain">${flowNodes}</div>
      <div class="dock-ctrl">
        <button type="button" class="pri" id="btnPlay">▶ 播放</button>
        <button type="button" id="btnPrev">‹ 上一步</button>
        <button type="button" id="btnNext">下一步 ›</button>
        <button type="button" id="btnCut">剖视</button>
        <button type="button" class="warn" id="btnAlarmDock">⚠ 报警演示</button>
        <button type="button" id="btnReset">复位</button>
        <span class="note">${process.dockNote || '公共底栏 · 三工艺复用'}</span>
      </div>
    </div>
    <div class="stub-banner glass" id="stubBanner">
      <h4 id="stubTitle"></h4>
      <p id="stubBody"></p>
    </div>
  `;

  const els = {
    pswitch: root.querySelector('#pswitch'),
    chap: root.querySelector('#chap'),
    sbadge: root.querySelector('#sbadge'),
    sbadgeTxt: root.querySelector('#sbadgeTxt'),
    coldBadge: root.querySelector('#coldBadge'),
    coldBadgeTxt: root.querySelector('#coldBadgeTxt'),
    title: root.querySelector('#title'),
    eqRxn: root.querySelector('#eqRxn'),
    eqDh: root.querySelector('#eqDh'),
    rail: root.querySelector('#rail'),
    sfbtn: root.querySelector('#sfbtn'),
    sfp: root.querySelector('#sfp'),
    sfpFaults: root.querySelector('#sfpFaults'),
    sfpEsd: root.querySelector('#sfpEsd'),
    lel: root.querySelector('#lel'),
    lelBar: root.querySelector('#lelBar'),
    lelVal: root.querySelector('#lelVal'),
    card: root.querySelector('#card'),
    cardBack: root.querySelector('#cardBack'),
    cardCode: root.querySelector('#cardCode'),
    cardName: root.querySelector('#cardName'),
    cardStep: root.querySelector('#cardStep'),
    cardRole: root.querySelector('#cardRole'),
    cardKv: root.querySelector('#cardKv'),
    cardWhy: root.querySelector('#cardWhy'),
    cardMistake: root.querySelector('#cardMistake'),
    cardDemo: root.querySelector('#cardDemo'),
    chain: root.querySelector('#chain'),
    btnPlay: root.querySelector('#btnPlay'),
    btnPrev: root.querySelector('#btnPrev'),
    btnNext: root.querySelector('#btnNext'),
    btnCut: root.querySelector('#btnCut'),
    btnAlarmDock: root.querySelector('#btnAlarmDock'),
    btnReset: root.querySelector('#btnReset'),
    stubBanner: root.querySelector('#stubBanner'),
    stubTitle: root.querySelector('#stubTitle'),
    stubBody: root.querySelector('#stubBody'),
    hint: root.querySelector('.hint'),
  };

  // 按工艺灌装安全面板；缺字段时按 id 三分支兜底，禁止非 8 落到燃爆/%LEL
  const SAFETY_FB = {
    7: {
      headline: '⚠ HF 泄漏 · 洗消演示',
      subline: '☢ 水幕/碱雾洗消 → ESD 双重切断（教室克制）',
      hintSafety: '泄漏→洗消→回正 · 镜头锁定泄漏点',
      eqSafety: 'HF 泄漏示意 · 水幕/碱雾洗消 · ESD 切断',
      eqDhSafety: '剧毒 · 强腐蚀 · HF ≠ 安全绿',
    },
    8: {
      headline: '⚠ 安全演示：氢气泄漏燃爆',
      subline: '💥 逼近爆炸下限 · 闪爆（粒子 · 克制）',
      hintSafety: '事故演示镜头保持原位 · 教室克制粒子档',
      eqSafety: 'H₂ 泄漏 → %LEL 上升 → 闪爆示意 → ESD / 火炬',
      eqDhSafety: '爆炸下限约 4% · 示意',
    },
    9: {
      headline: '⚠ 冷却失效 · 超温分解',
      subline: '☢ 滴加过快 · 局部热点 → 受热分解示意',
      hintSafety: '断冷→超温→分解放N₂→稀释回正 · 教室克制',
      eqSafety: 'Ar–N₂⁺Cl⁻ → 分解产物 + N₂↑',
      eqDhSafety: '受热分解示意',
    },
  };
  const sfb = SAFETY_FB[process.id] || {
    headline: '⚠ 安全演示',
    subline: '请配置 safetyPanel（勿默认燃爆口径）',
    hintSafety: '事故演示 · 教室克制',
    eqSafety: '安全演示（示意）',
    eqDhSafety: '教学示意',
  };
  const sp = process.safetyPanel || {};
  const sfpHead = root.querySelector('#sfpHead');
  const sfpSub = root.querySelector('#sfpSub');
  const sfpTitle = root.querySelector('#sfpTitle');
  if (sfpTitle) sfpTitle.textContent = sp.title || '安全演示 SAFETY';
  if (sfpHead) sfpHead.textContent = sp.headline || sfb.headline;
  if (sfpSub) sfpSub.textContent = sp.subline || sfb.subline;
  const fg = root.querySelector('#sfpFaultGrp');
  const eg = root.querySelector('#sfpEsdGrp');
  if (fg) fg.textContent = sp.faultGroup || '故障演示（点击开启 / 关闭）';
  if (eg) eg.textContent = sp.esdGroup || '应急处置';
  els.sfp?.classList.toggle('fluor', process.id === 7);
  els.sfp?.classList.toggle('hydro', process.id === 8);
  els.sfp?.classList.toggle('diaz', process.id === 9);
  if (els.coldBadge) {
    const showCold = process.coldBadge === true || process.id === 9;
    els.coldBadge.hidden = !showCold;
    if (showCold) {
      els.coldBadgeTxt.textContent = process.coldBadgeLabel || '低温单元 · 0～5 ℃';
      els.coldBadge.classList.add('show');
    }
  }
  // 氟化永不显示 %LEL 燃爆条
  if (process.showLel === false || process.id === 7) {
    els.lel.style.display = 'none';
  }

  (processes || []).forEach((p) => {
    const a = document.createElement('a');
    a.href = `?p=${p.id}`;
    a.textContent = p.short;
    a.dataset.id = String(p.id);
    a.classList.toggle('on', p.id === process.id);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      if (p.id !== process.id) onProcessChange?.(p.id);
    });
    els.pswitch.appendChild(a);
  });

  // alarm list
  const alarms = process.alarms || [];
  alarms.filter((a) => a.group !== 'esd').forEach((a) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'it';
    btn.dataset.id = a.id;
    btn.innerHTML = `<span>${a.label}</span><i>●</i>`;
    btn.addEventListener('click', () => {
      [...els.sfpFaults.querySelectorAll('.it'), ...els.sfpEsd.querySelectorAll('.it')].forEach((n) => n.classList.remove('on'));
      btn.classList.add('on');
      onAlarm?.(a.id);
    });
    els.sfpFaults.appendChild(btn);
  });
  alarms.filter((a) => a.group === 'esd').forEach((a) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'it';
    btn.dataset.id = a.id;
    btn.innerHTML = `<span>${a.label}</span><i>●</i>`;
    btn.addEventListener('click', () => {
      [...els.sfpFaults.querySelectorAll('.it'), ...els.sfpEsd.querySelectorAll('.it')].forEach((n) => n.classList.remove('on'));
      btn.classList.add('on');
      onAlarm?.(a.id);
    });
    els.sfpEsd.appendChild(btn);
  });

  let stepIndex = 0;
  let playing = false;
  let cutaway = false;
  let activeDevice = null;

  function riskClass(level) {
    // 老师口径：正常步骤不亮「警示」；仅危险步骤 / 报警态用警示·危险色
    // 0～5 ℃ 用独立 cold-badge，不占用安全徽章文案
    if (level === 'danger') return 'danger';
    if (level === 'warn') return 'warn';
    return ''; // cold/safe/其他 → 绿「正常」或默认
  }

  function setBadge(level, label) {
    els.sbadge.className = 'safety-badge ' + riskClass(level);
    els.sbadgeTxt.textContent = label || (level === 'danger' ? '安全等级 · 危险' : level === 'warn' ? '安全等级 · 警示' : '安全等级 · 正常');
  }

  function setSafetyPanel(open) {
    els.sfp.classList.toggle('show', open);
    els.sfbtn.classList.toggle('on', open);
    els.sfbtn.textContent = open ? '⚠ 报警演示 · 开' : '⚠ 报警演示';
  }

  function setLel(pct, show) {
    if (!show) {
      els.lel.classList.remove('show');
      return;
    }
    els.lel.classList.add('show');
    const w = Math.max(0, Math.min(100, pct));
    els.lelBar.style.setProperty('--w', w + '%');
    els.lelVal.innerHTML = `${w}%<small> / 报警阈 25%LEL</small>`;
  }

  function fillCardFromStep(step, i) {
    // 全景步骤默认收起知识卡，给 H07/H09/H11 等右侧标牌让位；点设备再展开
    if (i === 0 && !step.safetyMode) {
      hideKnow();
      activeDevice = null;
      return;
    }
    const focus = step.focus;
    const dev = focus && process.devices ? process.devices[focus] : null;
    if (dev) {
      showKnow(dev, i, step);
      return;
    }
    // step-level card when no device
    els.card.classList.add('show');
    els.cardCode.textContent = String(i).padStart(2, '0');
    els.cardName.textContent = step.name;
    els.cardStep.textContent = `步骤 ${i} · ${step.name}`;
    els.cardRole.textContent = step.sub || step.why || '';
    const kvs = step.params || [];
    els.cardKv.innerHTML = kvs.map((p) =>
      `<div><div class="k">${p.k}</div><div class="v">${p.v}${p.u ? ` <small>${p.u}</small>` : ''}</div></div>`
    ).join('') || '<div><div class="k">状态</div><div class="v" style="font-size:16px;color:var(--safe)">示意</div></div>';
    els.cardWhy.innerHTML = `<b>原理：</b>${step.why || '—'}`;
    els.cardMistake.innerHTML = `<b>易错：</b>${step.mistake || '—'}`;
    els.cardDemo.textContent = `▶ ${step.demoLabel || '看一看'}`;
    activeDevice = null;
  }

  function showKnow(dev, i = stepIndex, step = process.steps[stepIndex]) {
    els.card.classList.add('show');
    els.cardCode.textContent = dev.code || '—';
    els.cardName.textContent = dev.name || '';
    els.cardStep.textContent = `步骤 ${i} · ${step?.name || ''}`;
    els.cardRole.textContent = dev.role || '';
    const kvs = dev.kv || step?.params || [];
    els.cardKv.innerHTML = kvs.map((p) =>
      `<div><div class="k">${p.k}</div><div class="v">${p.v}${p.u ? ` <small>${p.u}</small>` : ''}</div></div>`
    ).join('');
    els.cardWhy.innerHTML = `<b>原理：</b>${dev.why || step?.why || '—'}`;
    els.cardMistake.innerHTML = `<b>易错：</b>${dev.mistake || step?.mistake || '—'}`;
    els.cardDemo.textContent = `▶ ${dev.demoLabel || step?.demoLabel || '看一看'}`;
    activeDevice = dev.code;
  }

  function hideKnow() {
    els.card.classList.remove('show');
    activeDevice = null;
    onCardBack?.();
  }

  function renderStep(i) {
    const steps = process.steps || [];
    if (!steps.length) return;
    stepIndex = ((i % steps.length) + steps.length) % steps.length;
    const s = steps[stepIndex];

    els.title.textContent = process.title || '';
    els.eqRxn.innerHTML = process.reactionHtml || '';
    els.eqDh.textContent = process.dh || '';
    els.chap.innerHTML = `<em>步骤 ${stepIndex}</em> · ${s.name}<small> / ${steps.length} 步</small>`;

    const lvl = s.risk || 'safe';
    els.sbadge.className = 'safety-badge ' + riskClass(lvl);
    els.sbadgeTxt.textContent = s.riskLabel || '安全等级 · 正常';

    // rail
    [...els.rail.querySelectorAll('a, .sep')].forEach((n) => n.remove());
    steps.forEach((st, j) => {
      if (j === steps.length - 1) {
        const sep = document.createElement('div');
        sep.className = 'sep';
        els.rail.appendChild(sep);
      }
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = String(j);
      a.dataset.n = `${j} ${st.name}`;
      if (j < stepIndex) a.classList.add('done');
      if (j === stepIndex) a.classList.add('on');
      if (st.alarm || st.safetyMode) {
        const dot = document.createElement('span');
        dot.className = 'alert-dot';
        a.appendChild(dot);
      }
      a.addEventListener('click', (e) => { e.preventDefault(); go(j); });
      els.rail.appendChild(a);
    });

    // flow highlight
    const fi = s.flowIndex != null ? s.flowIndex : stepIndex;
    els.chain.querySelectorAll('.nd').forEach((n) => {
      n.classList.toggle('on', Number(n.dataset.fi) === fi);
    });

    if (process.stub) {
      els.stubBanner.classList.add('show');
      els.stubTitle.textContent = process.stubTitle || process.title;
      els.stubBody.textContent = process.stubBody || '入口 stub · 公共壳可演示';
    } else {
      els.stubBanner.classList.remove('show');
    }

    if (s.safetyMode) {
      setSafetyPanel(true);
      const showLel = process.showLel === true || (process.showLel == null && process.id === 8);
      setLel(78, showLel);
      const spx = process.safetyPanel || {};
      els.hint.textContent = spx.hintSafety || sfb.hintSafety;
      els.eqRxn.textContent = spx.eqSafety || sfb.eqSafety;
      els.eqDh.textContent = spx.eqDhSafety || sfb.eqDhSafety;
    } else {
      setLel(0, false);
      els.hint.textContent = '拖动旋转 · 滚轮缩放 · 点击设备查看知识卡 · ←→ 切换步骤';
      els.eqRxn.innerHTML = process.reactionHtml || '';
      els.eqDh.textContent = process.dh || '';
    }

    fillCardFromStep(s, stepIndex);
    onStep?.(stepIndex, s, { lockCamera: !!s.lockCamera });
  }

  function go(i) {
    renderStep(i);
  }

  els.cardBack.addEventListener('click', hideKnow);
  els.cardDemo.addEventListener('click', () => {
    const s = process.steps[stepIndex];
    onDemo?.(activeDevice || s.focus, s);
  });
  els.btnPrev.addEventListener('click', () => go(stepIndex - 1));
  els.btnNext.addEventListener('click', () => go(stepIndex + 1));
  els.btnPlay.addEventListener('click', () => {
    playing = !playing;
    els.btnPlay.textContent = playing ? '❚❚ 暂停' : '▶ 播放';
    onPlay?.(playing);
  });
  els.btnCut.addEventListener('click', () => {
    cutaway = !cutaway;
    els.btnCut.classList.toggle('on', cutaway);
    onCutaway?.(cutaway);
  });
  const toggleAlarm = () => setSafetyPanel(!els.sfp.classList.contains('show'));
  els.sfbtn.addEventListener('click', toggleAlarm);
  els.btnAlarmDock.addEventListener('click', toggleAlarm);
  root.querySelector('#sfpClose').addEventListener('click', () => setSafetyPanel(false));
  root.querySelector('#btnAllReset').addEventListener('click', () => {
    els.btnReset.click();
  });
  els.btnReset.addEventListener('click', () => {
    playing = false;
    cutaway = false;
    els.btnPlay.textContent = '▶ 播放';
    els.btnCut.classList.remove('on');
    setSafetyPanel(false);
    setLel(0, false);
    [...els.sfpFaults.querySelectorAll('.it'), ...els.sfpEsd.querySelectorAll('.it')].forEach((n) => n.classList.remove('on'));
    onReset?.();
    go(0);
  });

  addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
      go(stepIndex + 1); e.preventDefault();
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
      go(stepIndex - 1); e.preventDefault();
    }
    if (e.key === ' ') { els.btnPlay.click(); e.preventDefault(); }
    if (e.key === 'Home') go(0);
    if (e.key === 'Escape') { hideKnow(); setSafetyPanel(false); }
  });

  renderStep(0);

  return {
    go,
    showKnow: (code) => {
      const dev = process.devices?.[code];
      if (dev) showKnow(dev);
    },
    hideKnow,
    setLel,
    setBadge,
    setSafetyPanel,
    get stepIndex() { return stepIndex; },
    get playing() { return playing; },
    get activeDevice() { return activeDevice; },
    setPlaying(v) {
      playing = !!v;
      els.btnPlay.textContent = playing ? '❚❚ 暂停' : '▶ 播放';
    },
    setCutawayUi(v) {
      cutaway = !!v;
      els.btnCut.classList.toggle('on', cutaway);
    },
  };
}
