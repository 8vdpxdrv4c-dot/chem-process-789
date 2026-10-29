import { COLORS } from '../../shared/colors.js';
import {
  makeGround, makeTank, makePipeRack,
  makeJacketedKettle, makeChillerSkid, makeHeadTank,
  makeQuenchTank, makeReliefVent,
} from '../../shared/devices.js';
import { createFlowNetwork } from '../../shared/fx/pipeFlow.js';
import { createJacketPulse } from '../../shared/fx/steamMist.js';

/**
 * 工艺 9 · 重氮化（对照 equipment-refs-789/diazotization + designer-d-id-map）
 * 低温单元：0～5 ℃；冰蓝夹套 #6ec8ff；重氮盐 #ff6b4a
 * 偶合 D08 默认关；事故 = 受热分解示意（N₂ 暴涌）→ 稀释回正；禁止燃爆/%LEL
 * Demo FX: coolant / nitrite / acid-amine flow cues + cold jacket pulse.
 * No Sandmeyer mislabel; no H2/%LEL; coupling only via setCoupling.
 */
export function buildDiazotizationPlant(THREE, scene, opts = {}) {
  const softGL = !!opts.softGL;
  const root = new THREE.Group();
  root.name = 'diazotizationPlant';
  root.add(makeGround(THREE, 200));

  // D01 夹套釜（核心 · 矮，非高压塔）
  const D01 = makeJacketedKettle(THREE, { id: 'D01', h: 9, r: 3.5, jacketColor: COLORS.coolant });
  D01.position.set(0, 0, 0);

  // D02 亚硝酸盐高位滴加罐
  const D02 = makeHeadTank(THREE, { id: 'D02', h: 4.2, r: 1.45, bandColor: COLORS.nitrite });
  D02.position.set(-16, 3.8, 8);

  // D03 冷冻机组撬
  const D03 = makeChillerSkid(THREE, { id: 'D03' });
  D03.position.set(28, 0, -14); // east of x-road

  // D04 酸配制罐
  const D04 = makeTank(THREE, { id: 'D04', h: 7, r: 2.4, bandColor: COLORS.acid });
  D04.position.set(-28, 0, -6);

  // D05 胺计量罐
  const D05 = makeHeadTank(THREE, { id: 'D05', h: 4, r: 1.35, bandColor: COLORS.aniline });
  D05.position.set(-22, 2.5, -10);

  // D06 紧急稀释槽
  const D06 = makeQuenchTank(THREE, { id: 'D06', r: 4.0, h: 3.0 });
  D06.position.set(32, 0, 12); // east of x-road

  // D07 泄放/逸气（挂在 D01 顶侧）
  const D07 = makeReliefVent(THREE, { id: 'D07' });
  D07.position.set(3.2, 10.5, 0);

  // D08 偶合釜 — 默认关
  const D08 = makeJacketedKettle(THREE, { id: 'D08', h: 7.5, r: 2.8, jacketColor: COLORS.azo_dye });
  D08.position.set(36, 0, 4);
  D08.visible = false;

  // D09 冰蓝保温管廊
  const D09 = makePipeRack(THREE, {
    length: 36,
    bandColors: [COLORS.coolant, COLORS.diazonium, COLORS.nitrite],
    h2Indices: [],
  });
  D09.position.set(-4, 0, -8);
  // 保温剖切暗示环
  const insul = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.55, 4, 12),
    new THREE.MeshStandardMaterial({ color: 0xc8d0da, roughness: 0.86, metalness: 0.0, envMapIntensity: 0.45 }),
  );
  insul.rotation.z = Math.PI / 2;
  insul.position.set(4, 7.2, -8);
  // Silver pipe core + thin coolant ID rings (定稿：管体银灰，色只在环)
  const core = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.28, 4.2, 10),
    new THREE.MeshStandardMaterial({
      color: 0xc0c8d0, metalness: 0.88, roughness: 0.34, envMapIntensity: 1.15,
      emissive: 0x000000, emissiveIntensity: 0,
    }),
  );
  core.rotation.z = Math.PI / 2;
  core.position.copy(insul.position);
  const coolRingMat = new THREE.MeshStandardMaterial({
    color: COLORS.coolant, metalness: 0.5, roughness: 0.38, envMapIntensity: 1.0,
    emissive: 0x000000, emissiveIntensity: 0,
  });
  const coolRingL = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.4, 12), coolRingMat);
  coolRingL.rotation.z = Math.PI / 2;
  coolRingL.position.set(insul.position.x - 1.2, insul.position.y, insul.position.z);
  const coolRingR = coolRingL.clone();
  coolRingR.position.set(insul.position.x + 1.2, insul.position.y, insul.position.z);
  const d09Group = new THREE.Group();
  d09Group.name = 'D09';
  d09Group.add(D09, insul, core, coolRingL, coolRingR);
  d09Group.userData = { id: 'D09', pickable: true, kind: 'pipeInsulation' };
  D09.userData = d09Group.userData;

  // 倾泻管 D01 → D06
  const dump = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.3, 18, 10),
    new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.8, roughness: 0.34, envMapIntensity: 1.1 }),
  );
  dump.rotation.z = Math.PI / 2.6;
  dump.position.set(16, 5, 6); // toward D06 east

  // —— N₂ 暴涌粒子（蓝 #2f7df0）· 教室克制 ——
  const n2N = 160;
  const n2Pos = new Float32Array(n2N * 3);
  for (let i = 0; i < n2N; i++) {
    n2Pos[i * 3] = (Math.random() - 0.5) * 2;
    n2Pos[i * 3 + 1] = Math.random() * 4;
    n2Pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
  }
  const n2Geo = new THREE.BufferGeometry();
  n2Geo.setAttribute('position', new THREE.BufferAttribute(n2Pos, 3));
  const n2Mat = new THREE.PointsMaterial({
    color: COLORS.N2, size: 0.32, transparent: true, opacity: 0, depthWrite: false,
  });
  const n2Burst = new THREE.Points(n2Geo, n2Mat);
  n2Burst.position.set(0, 10, 0);
  n2Burst.visible = false;

  // 重氮盐橙红溃散粒子
  const dzN = 100;
  const dzPos = new Float32Array(dzN * 3);
  for (let i = 0; i < dzN; i++) {
    dzPos[i * 3] = (Math.random() - 0.5) * 3;
    dzPos[i * 3 + 1] = Math.random() * 3;
    dzPos[i * 3 + 2] = (Math.random() - 0.5) * 3;
  }
  const dzGeo = new THREE.BufferGeometry();
  dzGeo.setAttribute('position', new THREE.BufferAttribute(dzPos, 3));
  const dzMat = new THREE.PointsMaterial({
    color: COLORS.diazonium, size: 0.28, transparent: true, opacity: 0, depthWrite: false,
  });
  const dzMist = new THREE.Points(dzGeo, dzMat);
  dzMist.position.set(0, 5, 0);
  dzMist.visible = false;

  const devices = { D01, D02, D03, D04, D05, D06, D07, D08, D09: d09Group };
  Object.values(devices).forEach((d) => root.add(d));
  root.add(dump, n2Burst, dzMist);
  scene.add(root);

  const anchors = {
    D01: new THREE.Vector3(0, 11, 0),
    D02: new THREE.Vector3(-16, 12, 8),
    D03: new THREE.Vector3(28, 5, -14),
    D04: new THREE.Vector3(-28, 9, -6),
    D05: new THREE.Vector3(-22, 10, -10),
    D06: new THREE.Vector3(32, 5, 12),
    D07: new THREE.Vector3(3.2, 16, 0),
    D08: new THREE.Vector3(36, 10, 4),
    D09: new THREE.Vector3(-4, 9, -8),
  };
  const labels = [
    ['D01', '重氮化夹套釜', '0～5 ℃ · 冰蓝夹套', anchors.D01],
    ['D02', '亚硝酸盐滴加罐', 'NaNO₂ · 高位', anchors.D02],
    ['D03', '冷冻机组', '冰蓝介质循环', anchors.D03],
    ['D04', '酸配制罐', 'HCl', anchors.D04],
    ['D05', '胺计量罐', '苯胺', anchors.D05],
    ['D06', '紧急稀释槽', '事故回正', anchors.D06],
    ['D07', '泄放 / 逸气管', 'PRV · 水封示意', anchors.D07],
    ['D09', '夹套保温管廊', '冰蓝三层剖切', anchors.D09],
  ];
  // D08 仅偶合开时加标牌
  function syncCouplingLabel(on) {
    const idx = labels.findIndex((l) => l[0] === 'D08');
    if (on && idx < 0) labels.push(['D08', '偶合釜', '可选 · 品红', anchors.D08]);
    if (!on && idx >= 0) labels.splice(idx, 1);
  }

  /* —— Demo FX: coolant / nitrite / feed flows + jacket pulse —— */
  const flows = createFlowNetwork(THREE, [
    {
      tag: 'coolant',
      name: 'flowCoolant',
      color: COLORS.coolant,
      medium: 'liquid',
      radius: 0.28,
      speed: 1.0,
      particleCount: softGL ? 20 : 36,
      points: [
        [28, 3.5, -14], [16, 4.5, -10], [8, 6.5, -6], [0, 5.5, -2], [0, 4.5, 0],
        [-2, 6.5, -4], [-4, 7.0, -8], [4, 7.2, -8], [16, 5, -10], [28, 3.8, -12],
      ],
    },
    {
      tag: 'nitrite',
      name: 'flowNitrite',
      color: COLORS.nitrite,
      medium: 'liquid',
      radius: 0.18,
      speed: 0.7,
      particleCount: softGL ? 12 : 22,
      points: [
        [-16, 9.5, 8], [-10, 9.0, 5], [-4, 8.5, 2], [0, 9.2, 0],
      ],
    },
    {
      tag: 'amine',
      name: 'flowAmine',
      color: COLORS.aniline,
      medium: 'liquid',
      radius: 0.2,
      speed: 0.75,
      particleCount: softGL ? 12 : 22,
      points: [
        [-22, 7, -10], [-14, 6.5, -6], [-6, 6, -2], [0, 6.5, 0],
      ],
    },
    {
      tag: 'acid',
      name: 'flowAcid',
      color: COLORS.acid,
      medium: 'liquid',
      radius: 0.2,
      speed: 0.7,
      particleCount: softGL ? 12 : 20,
      points: [
        [-28, 5, -6], [-18, 5.5, -4], [-8, 5.8, -2], [0, 6, 0],
      ],
    },
  ], softGL);
  root.add(flows.root);

  const jacketPulse = createJacketPulse(D01.userData?.jacket, THREE, {
    color: COLORS.coolant,
    softGL,
  });

  let fxStep = 0;
  let fxPlaying = false;

  function setCutaway(on) {
    const ud = D01.userData;
    if (ud.cutawayTarget) {
      ud.cutawayTarget.material.transparent = !!on;
      ud.cutawayTarget.material.opacity = on ? 0.22 : 1;
      ud.cutawayTarget.material.depthWrite = !on;
    }
    if (ud.jacket) ud.jacket.material.opacity = on ? 0.2 : 0.42;
    [ud.shaft, ud.blade, ud.channel].forEach((m) => {
      if (!m) return;
      m.visible = !!on;
      if (m.material && 'opacity' in m.material) m.material.opacity = on ? 0.9 : 0;
    });
  }

  function setCoupling(on) {
    D08.visible = !!on;
    syncCouplingLabel(!!on);
  }

  let fxTimer = null;
  const pending = [];
  function clearFx() {
    clearInterval(fxTimer); fxTimer = null;
    pending.forEach(clearTimeout); pending.length = 0;
  }

  function triggerAlarm(id) {
    clearFx();
    n2Burst.visible = false; n2Mat.opacity = 0;
    dzMist.visible = false; dzMat.opacity = 0;
    // 夹套干热色（断冷）
    const jacket = D01.userData.jacket;
    const restoreJacket = () => {
      if (jacket) {
        jacket.material.color.set(COLORS.coolant);
        jacket.material.emissive.set(COLORS.coolant);
        jacket.material.emissiveIntensity = 0.18;
      }
    };
    restoreJacket();

    const showDecompose = () => {
      dzMist.visible = true; dzMat.opacity = 0.7;
      n2Burst.visible = true; n2Mat.opacity = 0.85;
      n2Mat.color.set(COLORS.N2);
      if (jacket) {
        jacket.material.color.set(COLORS.warn_orange);
        jacket.material.emissive.set(COLORS.danger_red);
        jacket.material.emissiveIntensity = 0.45;
      }
      fxTimer = setInterval(() => {
        const a = n2Geo.attributes.position.array;
        for (let i = 0; i < n2N; i++) {
          a[i * 3 + 1] += 0.05 + Math.random() * 0.06;
          if (a[i * 3 + 1] > 6) a[i * 3 + 1] = 0;
        }
        n2Geo.attributes.position.needsUpdate = true;
        const b = dzGeo.attributes.position.array;
        for (let i = 0; i < dzN; i++) {
          b[i * 3] += (Math.random() - 0.5) * 0.04;
          b[i * 3 + 1] += 0.02;
          if (b[i * 3 + 1] > 4) b[i * 3 + 1] = 0;
        }
        dzGeo.attributes.position.needsUpdate = true;
      }, 40);
    };

    const showQuench = () => {
      // 强化冷却回正：冰蓝恢复 + N₂ 减弱
      if (jacket) {
        jacket.material.color.set(COLORS.coolant);
        jacket.material.emissive.set(COLORS.coolant);
        jacket.material.emissiveIntensity = 0.55;
      }
      n2Mat.opacity = 0.25;
      dzMat.opacity = 0.15;
    };

    if (id === 'dilute' || id === 'cool_boost') {
      showDecompose();
      showQuench();
    } else if (id === 'fast_drip') {
      dzMist.visible = true; dzMat.opacity = 0.55;
      fxTimer = setInterval(() => {
        const b = dzGeo.attributes.position.array;
        for (let i = 0; i < dzN; i++) {
          b[i * 3 + 1] += 0.03;
          if (b[i * 3 + 1] > 4) b[i * 3 + 1] = 0;
        }
        dzGeo.attributes.position.needsUpdate = true;
      }, 40);
    } else {
      // overtemp / chill_fail / decompose — 受热分解示意链路
      if (jacket) {
        jacket.material.emissiveIntensity = 0.05;
        jacket.material.color.set(0x6a4a3a);
      }
      pending.push(setTimeout(showDecompose, 600));
      pending.push(setTimeout(showQuench, 2200));
    }

    return () => {
      clearFx();
      n2Burst.visible = false; n2Mat.opacity = 0;
      dzMist.visible = false; dzMat.opacity = 0;
      restoreJacket();
    };
  }

  function setFxStep(i, step, { playing = false } = {}) {
    fxStep = i | 0;
    fxPlaying = !!playing;
    const focus = step?.focus;
    let tags = [];
    if (fxStep === 0) tags = [];
    else if (focus === 'D05' || fxStep === 1) tags = ['amine', 'acid'];
    else if (focus === 'D03' || fxStep === 2) tags = ['coolant'];
    else if (focus === 'D01' && fxStep === 3) tags = ['nitrite', 'coolant'];
    else if (focus === 'D01' || fxStep === 4) tags = ['coolant', 'nitrite'];
    else if (focus === 'D06' || fxStep === 5) tags = ['coolant'];
    else if (step?.safetyMode || fxStep === 6) tags = ['coolant'];
    flows.applyStepBoost(tags, { idle: 0.5, active: 1.0, playing: fxPlaying });
    const jp = (focus === 'D01' || focus === 'D03' || fxStep === 2 || fxStep === 3 || fxStep === 4 || fxStep === 0)
      ? (fxPlaying ? 1.4 : 1.1)
      : 0.7;
    jacketPulse.setBoost(jp);
  }

  function update(dt, ctx = {}) {
    const elapsed = ctx.elapsed ?? 0;
    if (ctx.playing != null) fxPlaying = !!ctx.playing;
    flows.update(dt, elapsed);
    jacketPulse.update(elapsed);
  }

  function reset() {
    setCutaway(false);
    setCoupling(false);
    clearFx();
    n2Burst.visible = false; n2Mat.opacity = 0;
    dzMist.visible = false; dzMat.opacity = 0;
    const jacket = D01.userData.jacket;
    if (jacket) {
      jacket.material.color.set(COLORS.coolant);
      jacket.material.emissive.set(COLORS.coolant);
      jacket.material.emissiveIntensity = 0.18;
      jacket.material.opacity = 0.42;
    }
    setFxStep(0, { focus: 'D01' }, { playing: false });
  }

  setFxStep(0, { focus: 'D01' }, { playing: false });

  return {
    root, devices, anchors, labels,
    setCutaway, setCoupling, triggerAlarm, reset,
    update, setFxStep,
    fx: { flows, jacketPulse },
  };
}
