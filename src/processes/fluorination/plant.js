import { COLORS } from '../../shared/colors.js';
import {
  makeGround, makeTank, makeExchanger, makeSeparator,
  makePipeRack, makeValveSkid,
  makeBundTank, makeGlassLinedReactor, makeScrubber,
  makeDelugeRing, makeEsdPanel, makeF2CylinderRack,
} from '../../shared/devices.js';
import { createFlowNetwork } from '../../shared/fx/pipeFlow.js';
import { createSteamMist } from '../../shared/fx/steamMist.js';

/**
 * 工艺 7 · 氟化厂区（对照 equipment-refs-789/fluorination + designer-f-id-map）
 * HF 主路线色 #c8e86c；禁止当安全绿 #3dd68c。
 * F₂ 对比架默认隐藏。
 * Demo FX: HF/organic/product pipe flow + F07 scrubber mist (pale, not HF).
 */
export function buildFluorinationPlant(THREE, scene, opts = {}) {
  const softGL = !!opts.softGL;
  const root = new THREE.Group();
  root.name = 'fluorinationPlant';
  root.add(makeGround(THREE, 240));

  // F01 HF 储罐 + bund
  const F01 = makeBundTank(THREE, { id: 'F01', h: 11, r: 3.4, bandColor: COLORS.HF });
  F01.position.set(-52, 0, -8);

  // F02 有机原料罐 + 计量泵撬
  const F02 = makeTank(THREE, { id: 'F02', h: 9, r: 2.9, bandColor: COLORS.organic_in });
  F02.position.set(-52, 0, 14);
  const pump = makeValveSkid(THREE, { id: 'F02-pump' });
  pump.scale.set(0.7, 0.7, 0.7);
  pump.position.set(-44, 0, 14);

  // F03 预热/预冷换热器
  const F03 = makeExchanger(THREE, { id: 'F03', L: 11 });
  F03.position.set(-26, 0, -2);

  // F04 搪玻璃/衬里反应器
  const F04 = makeGlassLinedReactor(THREE, { id: 'F04', h: 16, r: 3.5 });
  F04.position.set(0, 0, 0);

  // F05 气液分离器
  const F05 = makeSeparator(THREE, { id: 'F05', h: 10, r: 2.8 });
  F05.position.set(28, 0, -6);

  // F06 冷凝器
  const F06 = makeExchanger(THREE, { id: 'F06', L: 9, r: 1.5 });
  F06.position.set(28, 0, 14);

  // F07 尾气吸收塔
  const F07 = makeScrubber(THREE, { id: 'F07', h: 18, r: 2.7 });
  F07.position.set(50, 0, 2);

  // F08 洗消水幕（包住 F09 泄漏点附近 / 反应器侧）
  const F08 = makeDelugeRing(THREE, { id: 'F08', radius: 5.5 });
  F08.position.set(-8, 0, 12);

  // F09 危险法兰 / 双切断阀组（泄漏起点）
  const F09 = makeValveSkid(THREE, { id: 'F09' });
  F09.position.set(-10, 0, 12);

  // F10 ESD
  const F10 = makeEsdPanel(THREE, { id: 'F10' });
  F10.position.set(66, 0, -16);

  // 产物罐（无独立 F 号 · 薄荷绿环）
  const product = makeTank(THREE, { id: 'FP', h: 8, r: 2.6, bandColor: COLORS.fluor_product });
  product.position.set(66, 0, 12);

  // F₂ 对比架（默认关）
  const F2 = makeF2CylinderRack(THREE, { id: 'F2' });
  F2.position.set(-62, 0, -22);
  F2.visible = false;

  const rack1 = makePipeRack(THREE, {
    length: 48,
    bandColors: [COLORS.organic_in, COLORS.HF, COLORS.fluor_product],
    h2Indices: [],
  });
  rack1.position.set(-12, 0, 6);

  const rack2 = makePipeRack(THREE, {
    length: 28,
    bandColors: [COLORS.HF, COLORS.fluor_product],
    h2Indices: [],
  });
  rack2.position.set(34, 0, 8);
  rack2.rotation.y = Math.PI / 2;

  // —— HF 泄漏雾粒子（色 #c8e86c，禁止安全绿）——
  const mistN = 180;
  const mistPos = new Float32Array(mistN * 3);
  for (let i = 0; i < mistN; i++) {
    mistPos[i * 3] = (Math.random() - 0.5) * 2.4;
    mistPos[i * 3 + 1] = Math.random() * 3.5;
    mistPos[i * 3 + 2] = (Math.random() - 0.5) * 2.4;
  }
  const mistGeo = new THREE.BufferGeometry();
  mistGeo.setAttribute('position', new THREE.BufferAttribute(mistPos, 3));
  const mistMat = new THREE.PointsMaterial({
    color: COLORS.HF, // #c8e86c 浅绿黄警示感
    size: 0.35,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const mist = new THREE.Points(mistGeo, mistMat);
  mist.position.set(-10, 2.2, 12);
  mist.name = 'hfMist';
  mist.visible = false;

  // 水幕粒子（淡青，非 HF 色）
  const washN = 120;
  const washPos = new Float32Array(washN * 3);
  for (let i = 0; i < washN; i++) {
    const a = Math.random() * Math.PI * 2;
    const rr = 3 + Math.random() * 3;
    washPos[i * 3] = Math.cos(a) * rr;
    washPos[i * 3 + 1] = Math.random() * 5;
    washPos[i * 3 + 2] = Math.sin(a) * rr;
  }
  const washGeo = new THREE.BufferGeometry();
  washGeo.setAttribute('position', new THREE.BufferAttribute(washPos, 3));
  const washMat = new THREE.PointsMaterial({
    color: 0xa8d4ff,
    size: 0.22,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const wash = new THREE.Points(washGeo, washMat);
  wash.position.copy(F08.position);
  wash.visible = false;

  const devices = { F01, F02, F03, F04, F05, F06, F07, F08, F09, F10 };
  Object.values(devices).forEach((d) => root.add(d));
  root.add(pump, product, F2, rack1, rack2, mist, wash);
  scene.add(root);

  const anchors = {
    F01: new THREE.Vector3(-52, 13, -8),
    F02: new THREE.Vector3(-52, 11, 14),
    F03: new THREE.Vector3(-26, 4.5, -2),
    F04: new THREE.Vector3(0, 14, 0),
    F05: new THREE.Vector3(28, 12, -6),
    F06: new THREE.Vector3(28, 4, 14),
    F07: new THREE.Vector3(50, 18, 2),
    F08: new THREE.Vector3(-8, 7, 12),
    F09: new THREE.Vector3(-10, 3.5, 12),
    F10: new THREE.Vector3(66, 3.5, -16),
  };
  const labels = [
    ['F01', 'HF 储罐', '耐蚀 · bund · 双切断', anchors.F01],
    ['F02', '有机原料罐', 'R–X · 淡青', anchors.F02],
    ['F03', '预热/预冷换热器', '管壳式', anchors.F03],
    ['F04', '氟化反应器', '搪玻璃/衬里', anchors.F04],
    ['F05', '气液分离器', '顶气底液', anchors.F05],
    ['F06', '冷凝器', '冷却水环带', anchors.F06],
    ['F07', '尾气吸收塔', '碱/水喷淋', anchors.F07],
    ['F08', '洗消水幕', '喷淋环 · 雨淋阀', anchors.F08],
    ['F09', '危险法兰', '双密封 · 泄漏点', anchors.F09],
    ['F10', 'ESD 面板', '急停示意', anchors.F10],
  ];

  /* —— Demo FX: HF / organic / product flows + scrubber mist —— */
  const flows = createFlowNetwork(THREE, [
    {
      tag: 'HF',
      name: 'flowHF',
      color: COLORS.HF, // #c8e86c — NOT safe_green
      medium: 'liquid',
      radius: 0.3,
      speed: 1.05,
      particleCount: softGL ? 20 : 36,
      points: [
        [-52, 7, -8], [-38, 6.8, -4], [-26, 5.5, -2], [-12, 6.5, 2], [0, 8, 0],
      ],
    },
    {
      tag: 'organic',
      name: 'flowOrganic',
      color: COLORS.organic_in,
      medium: 'liquid',
      radius: 0.26,
      speed: 0.9,
      particleCount: softGL ? 16 : 28,
      points: [
        [-52, 6, 14], [-40, 5.5, 8], [-26, 5.0, 2], [-10, 6, 0], [0, 7.5, 0],
      ],
    },
    {
      tag: 'product',
      name: 'flowFluorProduct',
      color: COLORS.fluor_product,
      medium: 'liquid',
      radius: 0.26,
      speed: 0.85,
      particleCount: softGL ? 16 : 30,
      points: [
        [0, 8, 0], [14, 7, -3], [28, 8, -6], [40, 7, 0], [50, 6, 4], [66, 6, 12],
      ],
    },
    {
      tag: 'tail',
      name: 'flowTailGas',
      color: COLORS.HF,
      medium: 'gas',
      radius: 0.2,
      speed: 1.1,
      particleCount: softGL ? 14 : 24,
      points: [
        [0, 14, 0], [14, 13, -2], [28, 12, -4], [40, 14, 0], [50, 16, 2],
      ],
    },
  ], softGL);
  root.add(flows.root);

  // Scrubber mist: pale cyan/white — NOT HF warning color
  const scrubMist = createSteamMist(THREE, {
    position: { x: 50, y: 18.2, z: 2 },
    color: '#b0c4e0',
    count: softGL ? 40 : 70,
    rise: 5.5,
    spread: 1.8,
    softGL,
    name: 'F07ScrubMist',
  });
  root.add(scrubMist.root);

  let fxStep = 0;
  let fxPlaying = false;

  function setCutaway(on) {
    const ud = F04.userData;
    if (ud.cutawayTarget) {
      ud.cutawayTarget.material.transparent = !!on;
      ud.cutawayTarget.material.opacity = on ? 0.22 : 1;
      ud.cutawayTarget.material.depthWrite = !on;
      ud.cutawayTarget.material.needsUpdate = true;
    }
    if (ud.jacket) ud.jacket.visible = !on;
    [ud.lining, ud.shaft, ud.blade, ud.cutPlane].forEach((m) => {
      if (!m) return;
      m.visible = !!on;
      if (m.material && 'opacity' in m.material) {
        m.material.opacity = on ? (m === ud.cutPlane ? 0.35 : 0.85) : 0;
      }
    });
    // F07 喷淋/填料剖视
    if (F07.userData.spray) F07.userData.spray.visible = !!on;
    if (F07.userData.pack) F07.userData.pack.visible = !!on;
    if (F05.userData.demister) F05.userData.demister.visible = !!on;
  }

  function setF2Contrast(on) {
    F2.visible = !!on;
  }

  const alarmLight = new THREE.PointLight(COLORS.HF, 0, 36);
  alarmLight.position.set(-10, 6, 12);
  root.add(alarmLight);

  let mistTimer = null;
  let washTimer = null;
  let esdTimer = null;
  const pending = [];

  function clearFxTimers() {
    clearInterval(mistTimer); mistTimer = null;
    clearInterval(washTimer); washTimer = null;
    clearInterval(esdTimer); esdTimer = null;
    pending.forEach(clearTimeout);
    pending.length = 0;
  }

  function setEsdFlash(on) {
    const btn = F10.userData?.btn;
    if (btn?.material) {
      btn.material.emissiveIntensity = on ? 1.2 : 0.65;
    }
    // F09 阀组灯闪（双切断）
    F09.traverse((o) => {
      if (o.isMesh && o.material?.emissive && o.geometry?.type === 'SphereGeometry') {
        o.material.emissiveIntensity = on ? 1.4 : 0.6;
        if (on) o.material.emissive.set(COLORS.danger_red);
      }
    });
    F01.traverse((o) => {
      if (o.isMesh && o.material?.emissive && o.geometry?.type === 'SphereGeometry') {
        o.material.emissiveIntensity = on ? 1.2 : 0.6;
      }
    });
  }

  function startMistDrift() {
    clearInterval(mistTimer);
    mistTimer = setInterval(() => {
      const arr = mistGeo.attributes.position.array;
      for (let i = 0; i < mistN; i++) {
        arr[i * 3 + 1] += 0.02 + Math.random() * 0.03;
        if (arr[i * 3 + 1] > 4) arr[i * 3 + 1] = 0;
      }
      mistGeo.attributes.position.needsUpdate = true;
    }, 40);
  }

  function startWashDrift() {
    clearInterval(washTimer);
    washTimer = setInterval(() => {
      const arr = washGeo.attributes.position.array;
      for (let i = 0; i < washN; i++) {
        arr[i * 3 + 1] -= 0.04 + Math.random() * 0.04;
        if (arr[i * 3 + 1] < 0) arr[i * 3 + 1] = 5;
      }
      washGeo.attributes.position.needsUpdate = true;
    }, 40);
  }

  /** HF 泄漏烟雾 → 水幕/碱雾 → ESD 阀闪（无燃爆/%LEL） */
  function triggerAlarm(id) {
    clearFxTimers();
    mist.visible = false; mistMat.opacity = 0;
    wash.visible = false; washMat.opacity = 0;
    alarmLight.intensity = 0;
    setEsdFlash(false);

    const showMist = () => {
      mist.visible = true;
      mistMat.color.set(COLORS.HF); // #c8e86c 禁止安全绿
      mistMat.opacity = 0.78;
      alarmLight.color.set(COLORS.HF);
      alarmLight.intensity = 1.8;
      startMistDrift();
    };
    const showWash = () => {
      wash.visible = true;
      washMat.opacity = 0.7;
      mistMat.opacity = Math.min(mistMat.opacity, 0.28);
      startWashDrift();
    };
    const showEsd = () => {
      setEsdFlash(true);
      alarmLight.color.set(COLORS.danger_red);
      alarmLight.intensity = 2.0;
      clearInterval(esdTimer);
      esdTimer = setInterval(() => {
        const btn = F10.userData?.btn;
        if (btn?.material) {
          btn.material.emissiveIntensity = btn.material.emissiveIntensity > 0.8 ? 0.35 : 1.25;
        }
      }, 280);
    };

    if (id === 'washdown') {
      showMist();
      showWash();
    } else if (id === 'esd') {
      showMist();
      showWash();
      showEsd();
    } else if (id === 'overtemp' || id === 'valve_open') {
      // 超温 / 阀未关：HF 雾警示 + 危险光，不启燃爆
      showMist();
      mistMat.opacity = 0.45;
      alarmLight.intensity = 1.2;
    } else {
      // hf_leak 默认链路：雾 → 洗消 → ESD
      showMist();
      pending.push(setTimeout(showWash, 900));
      pending.push(setTimeout(showEsd, 1800));
    }

    return () => {
      clearFxTimers();
      mist.visible = false; mistMat.opacity = 0;
      wash.visible = false; washMat.opacity = 0;
      alarmLight.intensity = 0;
      setEsdFlash(false);
    };
  }

  function setFxStep(i, step, { playing = false } = {}) {
    fxStep = i | 0;
    fxPlaying = !!playing;
    const focus = step?.focus;
    let tags = [];
    if (fxStep === 0) tags = [];
    else if (focus === 'F01' || fxStep === 1) tags = ['HF', 'organic'];
    else if (focus === 'F03' || fxStep === 2) tags = ['HF', 'organic'];
    else if (focus === 'F04' || fxStep === 3) tags = ['HF', 'organic', 'product'];
    else if (focus === 'F05' || fxStep === 4) tags = ['product', 'tail'];
    else if (focus === 'F07' || fxStep === 5) tags = ['tail', 'HF'];
    else if (step?.safetyMode || fxStep === 6) tags = ['HF'];
    flows.applyStepBoost(tags, { idle: 0.48, active: 1.0, playing: fxPlaying });
    const mistBoost = (focus === 'F07' || fxStep === 5 || fxStep === 0)
      ? (fxPlaying ? 1.35 : 1.0)
      : 0.55;
    scrubMist.setBoost(mistBoost);
  }

  function update(dt, ctx = {}) {
    const elapsed = ctx.elapsed ?? 0;
    if (ctx.playing != null) fxPlaying = !!ctx.playing;
    flows.update(dt, elapsed);
    scrubMist.update(dt);
  }

  function reset() {
    setCutaway(false);
    setF2Contrast(false);
    clearFxTimers();
    mist.visible = false; mistMat.opacity = 0;
    wash.visible = false; washMat.opacity = 0;
    alarmLight.intensity = 0;
    setEsdFlash(false);
    setFxStep(0, { focus: 'F04' }, { playing: false });
  }

  setFxStep(0, { focus: 'F04' }, { playing: false });

  return {
    root, devices, anchors, labels,
    setCutaway, setF2Contrast, triggerAlarm, reset,
    update, setFxStep,
    fx: { flows, scrubMist },
  };
}
