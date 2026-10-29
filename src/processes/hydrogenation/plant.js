import { COLORS } from '../../shared/colors.js';
import {
  makeGround,
  makeTank,
  makeFixedBedReactor,
  makeExchanger,
  makeSeparator,
  makeCompressor,
  makeFlare,
  makePipeRack,
  makeValveSkid,
  makeGasProbe,
} from '../../shared/devices.js';
import { createFlowNetwork } from '../../shared/fx/pipeFlow.js';
import { createFlareFlame } from '../../shared/fx/flareFlame.js';

/**
 * 加氢厂区 — H-ID 对照 designer-h-id-map.md
 * 参考包：/workspace/out/equipment-refs-789/hydrogenation/ A→G + H10 标牌探头
 * 教学示意级剪影；非专有工厂。
 * Demo FX: H2/N2/substrate/product pipe flow + H09 flare flame + H08 rotor + bed pulse.
 */
export function buildHydrogenationPlant(THREE, scene, opts = {}) {
  const softGL = !!opts.softGL;
  const root = new THREE.Group();
  root.name = 'hydrogenationPlant';
  root.add(makeGround(THREE, 240));

  // H01 氢气缓冲罐 — 厚壁立式 + 白色 H₂ 色环
  const H01 = makeTank(THREE, { id: 'H01', h: 12, r: 3.5, bandColor: COLORS.H2, h2: true });
  H01.position.set(-52, 0, -6);

  // H02 N₂ 置换阀组 — 阀撬 + 蓝 N₂
  const H02 = makeValveSkid(THREE, { id: 'H02' });
  H02.position.set(-36, 0, 10);

  // H03 底物进料罐 — 卧式/立式储罐琥珀带 + 小泵暗示（压缩机缩小充当泵撬）
  const H03 = makeTank(THREE, { id: 'H03', h: 9, r: 2.8, bandColor: COLORS.substrate });
  H03.position.set(-28, 0, -10);
  const H03pump = makeCompressor(THREE, { id: 'H03pump', h2: false });
  H03pump.position.set(-20, 0, -10);
  H03pump.scale.set(0.45, 0.45, 0.45);
  // 合并拾取到 H03
  H03pump.traverse((o) => { if (o.userData) o.userData.id = 'H03'; });

  // H04 进料换热器
  const H04 = makeExchanger(THREE, { id: 'H04', L: 12, r: 1.7 });
  H04.position.set(-8, 0, -4);

  // H05 加氢反应器（固定床）
  const H05 = makeFixedBedReactor(THREE, { id: 'H05', h: 22, r: 3.7 });
  H05.position.set(6, 0, -2); // west of x-road corridor
  const bedMat = new THREE.MeshStandardMaterial({
    color: 0x3a2a22, metalness: 0.15, roughness: 0.82, envMapIntensity: 0.5,
    transparent: true, opacity: 0.9,
    emissive: new THREE.Color(COLORS.warn_orange),
    emissiveIntensity: 0.05,
  });
  const beds = new THREE.Group();
  beds.name = 'beds';
  beds.visible = false;
  for (let i = 0; i < 3; i++) {
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 3.1, 1.8, 24), bedMat.clone());
    disk.material.color.offsetHSL(0.02 * i, 0, 0.04 * i);
    disk.position.y = 7 + i * 4.5;
    beds.add(disk);
  }
  H05.add(beds);
  H05.userData.beds = beds;

  // H06 出料换热器
  const H06 = makeExchanger(THREE, { id: 'H06', L: 11, r: 1.6 });
  H06.position.set(30, 0, -8);

  // H07 高压气液分离器 — 矮胖 KO
  const H07 = makeSeparator(THREE, { id: 'H07', h: 11, r: 3.1 });
  H07.position.set(44, 0, 2);

  // H08 循环氢压缩机
  const H08 = makeCompressor(THREE, { id: 'H08', h2: true });
  H08.position.set(32, 0, 16);
  H08.scale.set(0.85, 0.85, 0.85);

  // H09 火炬
  const H09 = makeFlare(THREE, { id: 'H09' });
  H09.position.set(62, 0, -18); // north of south asphalt

  // H10 可燃气体探头（标牌小组件）
  const H10 = makeGasProbe(THREE, { id: 'H10' });
  H10.position.set(-12, 0, 12);

  // H11 产物储罐 — 紫蓝色环
  const H11 = makeTank(THREE, { id: 'H11', h: 9, r: 3.1, bandColor: COLORS.h2_product });
  H11.position.set(64, 0, 10);

  // F 管廊：H₂ 白 + 底物橙 / 产物紫
  const rack1 = makePipeRack(THREE, {
    length: 40,
    bandColors: [COLORS.H2, COLORS.substrate],
    h2Indices: [0],
  });
  rack1.position.set(-16, 0, 6);

  const rack2 = makePipeRack(THREE, {
    length: 30,
    bandColors: [COLORS.H2, COLORS.h2_product],
    h2Indices: [0],
  });
  rack2.position.set(34, 0, 12);
  rack2.rotation.y = Math.PI / 2;

  // 地面 H₂ 白色标识条（非蓝）
  const h2Mark = new THREE.Mesh(
    new THREE.BoxGeometry(78, 0.08, 1.15),
    new THREE.MeshBasicMaterial({ color: COLORS.H2 }),
  );
  h2Mark.position.set(2, 0.05, 18);
  root.add(h2Mark);

  // 泄漏 FX 挂在管廊法兰附近
  const leak = new THREE.Mesh(
    new THREE.SphereGeometry(2.4, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }),
  );
  leak.position.set(-16, 7.2, 6);
  leak.name = 'leakFx';
  const zone = new THREE.Mesh(
    new THREE.RingGeometry(4.5, 9, 48),
    new THREE.MeshBasicMaterial({
      color: COLORS.danger_red, transparent: true, opacity: 0, side: THREE.DoubleSide,
    }),
  );
  zone.rotation.x = -Math.PI / 2;
  zone.position.set(-16, 0.08, 6);
  root.add(leak, zone);

  const devices = { H01, H02, H03, H04, H05, H06, H07, H08, H09, H10, H11 };
  Object.values(devices).forEach((d) => root.add(d));
  root.add(H03pump, rack1, rack2);
  scene.add(root);

  const anchors = {
    H01: new THREE.Vector3(-52, 13, -6),
    H02: new THREE.Vector3(-36, 3.5, 10),
    H03: new THREE.Vector3(-28, 10, -10),
    H04: new THREE.Vector3(-8, 4.5, -4),
    H05: new THREE.Vector3(6, 16, -2),
    H06: new THREE.Vector3(30, 4.5, -8),
    H07: new THREE.Vector3(44, 14, 2),
    H08: new THREE.Vector3(32, 4, 16),
    H09: new THREE.Vector3(62, 28, -18),
    H10: new THREE.Vector3(-12, 4.2, 12),
    H11: new THREE.Vector3(64, 12, 10),
  };

  const labels = [
    ['H01', '氢气缓冲罐', 'H₂ · 白色标识', anchors.H01],
    ['H02', 'N₂ 置换阀组', '开车前惰性置换', anchors.H02],
    ['H03', '底物进料', '硝基苯 · 示意', anchors.H03],
    ['H04', '进料换热器', '预热混合', anchors.H04],
    ['H05', '加氢反应器', '固定床 · 教学示意', anchors.H05],
    ['H06', '出料换热器', '冷却', anchors.H06],
    ['H07', '高压分离器', '气液分离', anchors.H07],
    ['H08', '循环氢压缩机', '提高利用率', anchors.H08],
    ['H09', '火炬', '事故放空', anchors.H09],
    ['H10', '可燃气体探头', '管廊挂点 · 示意', anchors.H10],
    ['H11', '产物储罐', '苯胺 · 示意', anchors.H11],
  ];

  /* —— Demo FX: pipe flow + flare —— */
  const flows = createFlowNetwork(THREE, [
    {
      tag: 'H2',
      name: 'flowH2',
      color: COLORS.H2,
      medium: 'gas',
      radius: 0.32,
      speed: 1.35,
      particleCount: softGL ? 22 : 40,
      points: [
        [-52, 8, -6], [-36, 7.2, 0], [-16, 7.0, 4], [-8, 6.2, -2], [6, 10, -2],
      ],
    },
    {
      tag: 'N2',
      name: 'flowN2',
      color: COLORS.N2,
      medium: 'gas',
      radius: 0.22,
      speed: 0.95,
      particleCount: softGL ? 16 : 28,
      points: [
        [-36, 3.2, 10], [-30, 4.5, 6], [-24, 5.5, 0], [-16, 6.2, 4],
      ],
    },
    {
      tag: 'substrate',
      name: 'flowSubstrate',
      color: COLORS.substrate,
      medium: 'liquid',
      radius: 0.28,
      speed: 0.9,
      particleCount: softGL ? 18 : 32,
      points: [
        [-28, 6, -10], [-18, 5.5, -6], [-8, 5.0, -4], [0, 7, -3], [6, 9, -2],
      ],
    },
    {
      tag: 'product',
      name: 'flowProduct',
      color: COLORS.h2_product,
      medium: 'liquid',
      radius: 0.26,
      speed: 0.85,
      particleCount: softGL ? 18 : 32,
      points: [
        [6, 8, -2], [22, 6, -5], [30, 5.5, -8], [38, 7, -2], [44, 8, 2], [54, 7, 6], [64, 7, 10],
      ],
    },
    {
      tag: 'recycle',
      name: 'flowRecycleH2',
      color: COLORS.H2,
      medium: 'gas',
      radius: 0.24,
      speed: 1.2,
      particleCount: softGL ? 16 : 28,
      points: [
        [44, 12, 2], [38, 9, 10], [32, 5, 16], [22, 8, 8], [12, 14, -2],
      ],
    },
  ], softGL);
  root.add(flows.root);

  const flareTipWorld = new THREE.Vector3(62, 30.4, -24);
  const flame = createFlareFlame(THREE, {
    position: flareTipWorld,
    intensity: softGL ? 0.95 : 1.15,
    softGL,
    sizeMode: softGL ? 'small' : 'mid',
    name: 'H09Flame',
  });
  root.add(flame.root);

  let cutawayOn = false;
  let fxStep = 0;
  let fxPlaying = false;
  let bedPulse = 0.05;

  function setCutaway(on) {
    cutawayOn = !!on;
    const shell = H05.userData.cutawayTarget;
    if (shell) {
      shell.material.transparent = cutawayOn;
      shell.material.opacity = cutawayOn ? 0.22 : 1;
      shell.material.depthWrite = !cutawayOn;
      shell.material.needsUpdate = true;
    }
    const ins = H05.userData.insulation;
    if (ins) {
      ins.material.transparent = cutawayOn;
      ins.material.opacity = cutawayOn ? 0.12 : 1;
      ins.material.depthWrite = !cutawayOn;
      ins.visible = !cutawayOn || true;
      ins.material.needsUpdate = true;
    }
    beds.visible = cutawayOn;
    const dem = H07.userData.demister;
    if (dem) dem.visible = cutawayOn;
  }

  const alarmLight = new THREE.PointLight(COLORS.danger_red, 0, 55);
  alarmLight.position.set(-16, 10, 6);
  root.add(alarmLight);

  function setProbeAlarm(on) {
    const lens = H10.userData.lens;
    if (lens) {
      lens.material.color.set(on ? COLORS.danger_red : COLORS.safe_green);
      lens.material.emissive.set(on ? COLORS.danger_red : COLORS.safe_green);
      lens.material.emissiveIntensity = on ? 1.15 : 0.7;
    }
    const lw = H10.userData.lampWarn;
    const la = H10.userData.lampAlarm;
    if (lw) lw.material.emissiveIntensity = on ? 0.9 : 0.05;
    if (la) la.material.emissiveIntensity = on ? 1.2 : 0.05;
  }

  function triggerAlarm(id) {
    if (id === 'h2_leak' || id === 'lel') {
      leak.material.opacity = 0.38;
      zone.material.opacity = 0.24;
      alarmLight.intensity = 2.5;
      setProbeAlarm(true);
      flame.setBoost(1.55);
    } else if (id === 'hotspot' || id === 'poison') {
      alarmLight.position.copy(anchors.H05).setY(24);
      alarmLight.intensity = 2.0;
      bedPulse = 0.35;
    } else if (id === 'esd') {
      leak.material.opacity = 0.12;
      zone.material.opacity = 0.1;
      alarmLight.intensity = 1.2;
      setProbeAlarm(true);
      flame.setBoost(1.4);
    }
    return () => {
      leak.material.opacity = 0;
      zone.material.opacity = 0;
      alarmLight.intensity = 0;
      alarmLight.position.set(-16, 10, 6);
      setProbeAlarm(false);
      bedPulse = 0.05;
      flame.setBoost(1);
    };
  }

  function setHero(id) {
    const shell = H05.userData.cutawayTarget;
    if (!shell) return;
    if (id === 'H05') {
      shell.material.emissive = new THREE.Color(COLORS.warn_orange);
      shell.material.emissiveIntensity = 0.18;
    } else {
      shell.material.emissiveIntensity = 0;
    }
  }

  /** Map HUD step → flow tags to boost. Idle overview keeps mild life. */
  function setFxStep(i, step, { playing = false } = {}) {
    fxStep = i | 0;
    fxPlaying = !!playing;
    const focus = step?.focus;
    let tags = [];
    if (fxStep === 0) tags = []; // mild all
    else if (focus === 'H02' || fxStep === 1) tags = ['N2', 'H2'];
    else if (focus === 'H04' || fxStep === 2) tags = ['substrate', 'H2'];
    else if (focus === 'H05' || fxStep === 3) tags = ['H2', 'substrate', 'recycle'];
    else if (focus === 'H07' || fxStep === 4) tags = ['product', 'recycle', 'H2'];
    else if (focus === 'H11' || fxStep === 5) tags = ['product'];
    else if (step?.safetyMode || fxStep === 6) tags = ['H2', 'recycle'];
    flows.applyStepBoost(tags, {
      idle: 0.5,
      active: 1.0,
      playing: fxPlaying,
    });
    const flareBoost = (focus === 'H09' || step?.safetyMode || fxStep === 6)
      ? (fxPlaying ? 1.45 : 1.2)
      : (fxStep === 0 ? 0.85 : 0.7);
    flame.setBoost(flareBoost);
    bedPulse = (focus === 'H05' || fxStep === 3 || cutawayOn) ? 0.22 : 0.05;
  }

  function update(dt, ctx = {}) {
    const elapsed = ctx.elapsed ?? 0;
    if (ctx.playing != null) fxPlaying = !!ctx.playing;
    flows.update(dt, elapsed);
    flame.update(dt, elapsed);

    // H08 compressor rotor spin (teaching cue)
    const rotor = H08.userData?.rotor;
    if (rotor) {
      const spin = (fxStep === 0 || fxStep === 3 || fxStep === 4 || fxPlaying) ? 1.0 : 0.45;
      rotor.rotation.x += dt * 2.8 * spin * (fxPlaying ? 1.35 : 1);
    }
    // bed activity when visible / on core step
    if (beds.visible || fxStep === 3) {
      beds.children.forEach((disk, i) => {
        if (!disk.material) return;
        const wave = 0.5 + 0.5 * Math.sin(elapsed * 2.4 + i * 1.1);
        disk.material.emissiveIntensity = bedPulse * (0.6 + wave * 0.8);
      });
    }
  }

  function reset() {
    setCutaway(false);
    leak.material.opacity = 0;
    zone.material.opacity = 0;
    alarmLight.intensity = 0;
    setProbeAlarm(false);
    setHero(null);
    bedPulse = 0.05;
    flame.setBoost(0.85);
    setFxStep(0, { focus: 'H05' }, { playing: false });
  }

  // mild life at boot
  setFxStep(0, { focus: 'H05' }, { playing: false });

  return {
    root, devices, anchors, labels,
    setCutaway, triggerAlarm, setHero, reset,
    update, setFxStep,
    fx: { flows, flame },
    get cutaway() { return cutawayOn; },
  };
}
