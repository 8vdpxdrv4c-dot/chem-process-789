import { COLORS } from './colors.js';
import { asphaltTex, concreteTex } from './environment.js';

/**
 * 程序化设备（教学示意级）— 外形对照
 * /workspace/out/equipment-refs-789/hydrogenation/ A→F
 * 深蓝灰金属电影感；禁止照片贴图 / CAD dump。
 */

const METAL = COLORS.metal;
const METAL_D = COLORS.metal_dark;
const CONCRETE = COLORS.concrete;

/**
 * Industrial PBR presets — metals must accept Zipper/AgX IBL (scene.environment).
 * Avoid toy-plastic: no high roughness+low metalness+self-emissive body paint.
 * Intentional emissives stay on lamps / ESD / flare / alarm only.
 */
export function makeMaterials(THREE) {
  const metal = new THREE.MeshStandardMaterial({
    color: 0xb8c0ca, metalness: 0.88, roughness: 0.32,
    envMapIntensity: 1.2, emissive: 0x000000, emissiveIntensity: 0,
  });
  const metalDark = new THREE.MeshStandardMaterial({
    color: 0x5a6572, metalness: 0.82, roughness: 0.38,
    envMapIntensity: 1.1, emissive: 0x000000, emissiveIntensity: 0,
  });
  const metalLite = new THREE.MeshStandardMaterial({
    color: 0xd0d6de, metalness: 0.92, roughness: 0.26,
    envMapIntensity: 1.25, emissive: 0x000000, emissiveIntensity: 0,
  });
  // Painted industrial enamel (safety orange, process bands)
  const painted = new THREE.MeshStandardMaterial({
    color: 0xa8b0ba, metalness: 0.55, roughness: 0.4,
    envMapIntensity: 0.95,
  });
  // Insulation jacket / lagging — matte, still receives soft IBL
  const insulation = new THREE.MeshStandardMaterial({
    color: 0x7a8494, metalness: 0.0, roughness: 0.86,
    envMapIntensity: 0.45,
  });
  const concrete = new THREE.MeshStandardMaterial({
    color: CONCRETE, metalness: 0.0, roughness: 0.92,
    envMapIntensity: 0.35,
  });
  const warn = new THREE.MeshStandardMaterial({
    color: COLORS.warn_orange, metalness: 0.58, roughness: 0.38,
    envMapIntensity: 1.0,
    emissive: COLORS.warn_orange, emissiveIntensity: 0.035,
  });
  // H₂ / N₂ 识别色环 — 锁色相；近零自发光（管体银灰，色只在环上）
  const h2Band = new THREE.MeshStandardMaterial({
    color: COLORS.H2, metalness: 0.42, roughness: 0.36,
    envMapIntensity: 1.05,
    emissive: 0x000000, emissiveIntensity: 0,
  });
  const n2Band = new THREE.MeshStandardMaterial({
    color: COLORS.N2, metalness: 0.5, roughness: 0.38,
    envMapIntensity: 1.0,
    emissive: 0x000000, emissiveIntensity: 0,
  });
  return { metal, metalDark, metalLite, painted, insulation, concrete, warn, h2Band, n2Band };
}

/**
 * After PMREM is on scene.environment, nudge Standard/Physical mats to take IBL.
 * SoftGL / some post paths need an explicit material.envMap. That bypasses
 * scene.environmentIntensity, so bake intensityScale (usually CODE_DEFAULTS.envIntensity)
 * into material.envMapIntensity = base * intensityScale.
 */
export function refreshDeviceEnvMaps(root, scene, { intensityScale = 1, enabled = true } = {}) {
  if (!root || !scene) return 0;
  const on = enabled !== false && intensityScale > 0;
  const env = on ? (scene.environment || null) : null;
  let n = 0;
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const list = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of list) {
      if (!m || !(m.isMeshStandardMaterial || m.isMeshPhysicalMaterial)) continue;
      if (m.userData?.lockEnvMap === true) continue;
      if (m.userData?.baseEnvMapIntensity == null) {
        m.userData.baseEnvMapIntensity = m.envMapIntensity ?? 1;
      }
      if (on && env) {
        m.envMap = env;
        m.envMapIntensity = m.userData.baseEnvMapIntensity * intensityScale;
      } else if (!on) {
        m.envMap = null;
        m.envMapIntensity = m.userData.baseEnvMapIntensity;
      }
      m.needsUpdate = true;
      n += 1;
    }
  });
  return n;
}

function flange(THREE, r, mats) {
  const g = new THREE.Group();
  const disk = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.25, r * 1.25, 0.22, 20), mats.metalLite);
  disk.castShadow = true;
  g.add(disk);
  return g;
}

function colorBand(THREE, radius, y, colorHex, { h2 = false } = {}) {
  const mats = makeMaterials(THREE);
  const mat = h2
    ? mats.h2Band.clone()
    : mats.painted.clone();
  if (h2) {
    mat.color.set(COLORS.H2);
    mat.emissive.setHex(0x000000);
    mat.emissiveIntensity = 0;
  } else {
    mat.color.set(colorHex);
    mat.emissive.setHex(0x000000);
    mat.emissiveIntensity = 0;
    mat.metalness = 0.52;
    mat.roughness = 0.38;
    mat.envMapIntensity = 1.0;
  }
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius + 0.06, radius + 0.06, 0.5, 24), mat);
  mesh.position.y = y;
  mesh.castShadow = true;
  return mesh;
}

/** E · 立式厚壁储罐 / 缓冲罐（裙座 + 碟形封头 + 色环） */
export function makeTank(THREE, { h = 10, r = 3.2, bandColor = COLORS.ui_blue, id = '', h2 = false } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id || 'tank';
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 28), mats.metal);
  body.position.y = h / 2 + 0.8;
  body.castShadow = true;
  body.receiveShadow = true;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), mats.metal);
  cap.position.y = h + 0.8;
  cap.castShadow = true;
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r * 1.08, 1.0, 20), mats.concrete);
  skirt.position.y = 0.5;
  skirt.receiveShadow = true;
  // 顶喷嘴
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.22, r * 0.22, 1.2, 12), mats.metalDark);
  nozzle.position.y = h + 0.8 + r * 0.55;
  const fl = flange(THREE, r * 0.28, mats);
  fl.position.y = nozzle.position.y + 0.7;
  g.add(body, cap, skirt, nozzle, fl, colorBand(THREE, r, h * 0.55 + 0.8, bandColor, { h2 }));
  g.userData = { kind: 'tank', id, pickable: true };
  body.userData = g.userData;
  return g;
}

/** E · 卧式压力罐（鞍座）— 对照 E-storage-tanks */
export function makeHorizontalTank(THREE, { L = 14, r = 2.8, bandColor = COLORS.substrate, id = '', h2 = false } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id || 'htank';
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, 28), mats.metal);
  body.rotation.z = Math.PI / 2;
  body.position.y = r + 1.1;
  body.castShadow = true;
  const capGeo = new THREE.SphereGeometry(r, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const c1 = new THREE.Mesh(capGeo, mats.metal);
  c1.rotation.z = -Math.PI / 2;
  c1.position.set(-L / 2, r + 1.1, 0);
  const c2 = c1.clone();
  c2.rotation.z = Math.PI / 2;
  c2.position.x = L / 2;
  const saddle = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, r * 2.2), mats.concrete);
  const s1 = saddle.clone(); s1.position.set(-L * 0.28, 0.6, 0);
  const s2 = saddle.clone(); s2.position.set(L * 0.28, 0.6, 0);
  const manway = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.35, 16), mats.metalLite);
  manway.rotation.x = Math.PI / 2;
  manway.position.set(0, r + 1.1, r + 0.05);
  const band = colorBand(THREE, r, 0, bandColor, { h2 });
  band.rotation.z = Math.PI / 2;
  band.position.set(0, r + 1.1, 0);
  g.add(body, c1, c2, s1, s2, manway, band);
  g.userData = { kind: 'htank', id, pickable: true };
  body.userData = g.userData;
  return g;
}

/**
 * A · 立式固定床加氢反应器
 * 高细比圆筒 + 碟形封头 + 裙座 + 测温环 + 可剖视床层
 */
export function makeFixedBedReactor(THREE, { h = 22, r = 3.6, id = 'reactor' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  // 保温层（外筒略粗、浅灰哑光）— 剖视时外壳半透仍指向 shell
  const insulation = new THREE.Mesh(
    new THREE.CylinderGeometry(r + 0.28, r + 0.28, h - 0.6, 32),
    mats.insulation.clone(),
  );
  insulation.position.y = h / 2 + 1.8;
  insulation.castShadow = true;
  const shell = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 32), mats.metal.clone());
  shell.position.y = h / 2 + 1.8;
  shell.castShadow = true;
  shell.receiveShadow = true;
  const topHead = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), mats.metal);
  topHead.position.y = h + 1.8;
  topHead.castShadow = true;
  // 加强裙座：更高 + 加劲肋 + 地脚环
  const skirtH = 2.8;
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.08, r * 1.28, skirtH, 24), mats.metalDark);
  skirt.position.y = skirtH / 2;
  skirt.receiveShadow = true;
  const footing = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.38, r * 1.42, 0.35, 24), mats.concrete);
  footing.position.y = 0.18;
  footing.receiveShadow = true;
  for (let i = 0; i < 8; i++) {
    const ang = (i / 8) * Math.PI * 2;
    const rib = new THREE.Mesh(new THREE.BoxGeometry(0.18, skirtH * 0.85, 0.55), mats.metalLite);
    rib.position.set(Math.cos(ang) * r * 1.12, skirtH * 0.5, Math.sin(ang) * r * 1.12);
    rib.lookAt(0, skirtH * 0.5, 0);
    g.add(rib);
  }
  // 侧面人孔（法兰圆盖）
  const manNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.55, 16), mats.metalDark);
  manNeck.rotation.x = Math.PI / 2;
  manNeck.position.set(0, h * 0.42 + 1.8, r + 0.35);
  const manCover = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.22, 18), mats.metalLite);
  manCover.rotation.x = Math.PI / 2;
  manCover.position.set(0, h * 0.42 + 1.8, r + 0.72);
  const manBolt = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.06, 8, 20), mats.warn);
  manBolt.position.copy(manCover.position);
  // 顶进料 / 人孔
  const topNoz = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.35, r * 0.4, 2.4, 14), mats.metalDark);
  topNoz.position.y = h + 1.8 + r * 0.55;
  topNoz.castShadow = true;
  const platform = new THREE.Mesh(new THREE.TorusGeometry(r + 1.05, 0.14, 8, 32), mats.warn);
  platform.rotation.x = Math.PI / 2;
  platform.position.y = h * 0.55 + 1.8;
  for (let i = 0; i < 3; i++) {
    const probe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.8, 8), mats.metalLite);
    probe.position.set(r + 0.95, 7 + i * 4.5, 0);
    probe.rotation.z = Math.PI / 2;
    g.add(probe);
  }
  // 保温包扎带暗示
  for (let i = 0; i < 4; i++) {
    const strap = new THREE.Mesh(
      new THREE.CylinderGeometry(r + 0.32, r + 0.32, 0.18, 28),
      mats.metalLite.clone(),
    );
    strap.position.y = 4 + i * (h / 5) + 1.8;
    g.add(strap);
  }
  g.add(footing, skirt, insulation, shell, topHead, topNoz, platform, manNeck, manCover, manBolt,
    colorBand(THREE, r + 0.28, h * 0.38 + 1.8, COLORS.substrate));
  g.userData = { kind: 'reactor', id, pickable: true, cutawayTarget: shell, insulation };
  shell.userData = g.userData;
  return g;
}

/** D · 管壳式换热器（卧式 · 管箱法兰 · 鞍座 · 冷热环带） */
export function makeExchanger(THREE, { L = 12, r = 1.7, id = 'hx' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const y0 = r + 1.3;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, 24), mats.metal);
  body.rotation.z = Math.PI / 2;
  body.position.y = y0;
  body.castShadow = true;
  // 管箱（加长加粗）+ 双层法兰 + 分程隔板暗示
  function channel(xSign) {
    const grp = new THREE.Group();
    const box = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.12, r * 1.12, 2.2, 22), mats.metalDark);
    box.rotation.z = Math.PI / 2;
    box.position.set(xSign * (L / 2 + 0.5), y0, 0);
    box.castShadow = true;
    const fOuter = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.45, r * 1.45, 0.28, 22), mats.metalLite);
    fOuter.rotation.z = Math.PI / 2;
    fOuter.position.set(xSign * (L / 2 + 1.7), y0, 0);
    const fInner = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.32, r * 1.32, 0.22, 22), mats.warn);
    fInner.rotation.z = Math.PI / 2;
    fInner.position.set(xSign * (L / 2 + 0.05), y0, 0);
    // 螺栓暗示环
    const bolts = new THREE.Mesh(new THREE.TorusGeometry(r * 1.38, 0.05, 6, 24), mats.metalLite);
    bolts.rotation.y = Math.PI / 2;
    bolts.position.copy(fOuter.position);
    // 端面管板蜂窝暗示（深色圆盘）
    const sheet = new THREE.Mesh(
      new THREE.CylinderGeometry(r * 0.95, r * 0.95, 0.12, 20),
      new THREE.MeshStandardMaterial({ color: 0x7a8490, metalness: 0.75, roughness: 0.4, envMapIntensity: 1.1 }),
    );
    sheet.rotation.z = Math.PI / 2;
    sheet.position.set(xSign * (L / 2 + 1.55), y0, 0);
    // 进出接管
    const noz = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.6, 12), mats.metalLite);
    noz.position.set(xSign * (L / 2 + 1.7), y0 + r * 0.9, 0);
    grp.add(box, fInner, fOuter, bolts, sheet, noz);
    return grp;
  }
  const saddle = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.35, r * 2.4), mats.concrete);
  const s1 = saddle.clone(); s1.position.set(-L * 0.28, 0.68, 0);
  const s2 = saddle.clone(); s2.position.set(L * 0.28, 0.68, 0);
  const hot = colorBand(THREE, r, 0, COLORS.warn_orange);
  hot.rotation.z = Math.PI / 2;
  hot.position.set(-L * 0.18, y0, 0);
  const cold = colorBand(THREE, r, 0, COLORS.ui_blue);
  cold.rotation.z = Math.PI / 2;
  cold.position.set(L * 0.18, y0, 0);
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 2.0, 12), mats.metalLite);
  nozzle.position.set(0, y0 + r + 0.7, 0);
  g.add(body, channel(-1), channel(1), s1, s2, hot, cold, nozzle);
  g.userData = { kind: 'exchanger', id, pickable: true };
  body.userData = g.userData;
  return g;
}

/**
 * C · 高压气液分离器 / KO drum
 * 相对反应器更矮胖；顶气相、底液相；剖视 demister 占位
 */
export function makeSeparator(THREE, { h = 12, r = 3.0, id = 'sep' } = {}) {
  const mats = makeMaterials(THREE);
  const g = makeTank(THREE, { h, r, bandColor: COLORS.h2_product, id });
  // demister 盘（剖视时可见）
  const demister = new THREE.Mesh(
    new THREE.CylinderGeometry(r * 0.85, r * 0.85, 0.5, 20),
    new THREE.MeshStandardMaterial({
      color: 0x8aa0b8, metalness: 0.7, roughness: 0.28, envMapIntensity: 1.15, transparent: true, opacity: 0.55,
    }),
  );
  demister.position.y = h * 0.72 + 0.8;
  demister.visible = false;
  demister.name = 'demister';
  g.add(demister);
  g.userData.demister = demister;
  // 侧向进料接管
  const side = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.2, 12), mats.metalDark);
  side.rotation.z = Math.PI / 2;
  side.position.set(r + 1.0, h * 0.45 + 0.8, 0);
  g.add(side);
  return g;
}

/**
 * B · 工艺气压缩机撬块
 * 电机 + 联轴黄罩 + 压缩壳体 + 顶部冷却筒 — 对照 B-hydrogen-compressor
 */
export function makeCompressor(THREE, { id = 'comp', h2 = false } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  // 矮胖撬：更宽更短，整体高度压低
  const skid = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.7, 5.8), mats.metalDark);
  skid.position.y = 0.35;
  skid.receiveShadow = true;
  const curb = new THREE.Mesh(new THREE.BoxGeometry(11.7, 0.25, 6.0), mats.concrete);
  curb.position.y = 0.08;
  // 电机（粗短）
  const motor = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 2.8, 20), mats.metalLite);
  motor.rotation.z = Math.PI / 2;
  motor.position.set(-2.8, 1.55, 0);
  motor.castShadow = true;
  const motorEnd = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.4, 16), mats.metalDark);
  motorEnd.rotation.z = Math.PI / 2;
  motorEnd.position.set(-4.35, 1.55, 0);
  const couple = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.5, 1.9), mats.warn);
  couple.position.set(-0.9, 1.55, 0);
  // 压缩壳体（宽扁）
  const housing = new THREE.Mesh(new THREE.BoxGeometry(4.0, 2.2, 3.6), mats.metal);
  housing.position.set(2.0, 1.5, 0);
  housing.castShadow = true;
  // 冷却筒贴壳体侧面，降低总高
  const cooler = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.2, 14), mats.metalLite);
  cooler.rotation.z = Math.PI / 2;
  cooler.position.set(2.2, 2.85, 1.4);
  const band = colorBand(THREE, 0.85, 0, h2 ? COLORS.H2 : COLORS.ui_blue, { h2 });
  band.rotation.z = Math.PI / 2;
  band.position.copy(cooler.position);
  // 侧向接管簇增强「撬块」体积感
  for (let i = 0; i < 3; i++) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 8), mats.metalLite);
    p.position.set(3.6, 1.2 + i * 0.45, -1.6);
    g.add(p);
  }
  g.add(curb, skid, motor, motorEnd, couple, housing, cooler, band);
  g.userData = { kind: 'compressor', id, pickable: true, rotor: motor };
  motor.userData = g.userData;
  housing.userData = g.userData;
  return g;
}

/** G · 火炬（细高筒 + tip） */
export function makeFlare(THREE, { id = 'flare' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.58, 30, 12), mats.metalDark);
  pole.position.y = 15;
  pole.castShadow = true;
  const tip = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 12, 12),
    new THREE.MeshStandardMaterial({
      color: COLORS.warn_orange, emissive: COLORS.warn_orange, emissiveIntensity: 0.85,
    }),
  );
  tip.position.y = 30.3;
  tip.name = 'flareTip';
  g.add(pole, tip);
  g.userData = { kind: 'flare', id, pickable: true, tip, tipLocalY: 30.3 };
  pole.userData = g.userData;
  tip.userData = g.userData;
  return g;
}

/**
 * F · 管廊桁架 + 银灰平行管 + 薄识别色环 + 法兰/阀门暗示
 * 管体 ALWAYS 银灰金属；色只在薄环。H₂ #f4f7fb / N₂ #2f7df0 锁色相。
 */
export function makePipeRack(THREE, {
  length = 40,
  bandColors = [COLORS.H2, COLORS.substrate],
  h2Indices = [0],
} = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = 'pipeRack';
  const n = Math.max(2, Math.floor(length / 8));
  for (let i = 0; i <= n; i++) {
    const x = -length / 2 + (i / n) * length;
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.45, 6.5, 0.45), mats.metalDark);
    leg.position.set(x, 3.25, 0);
    leg.castShadow = true;
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.35, 4.5), mats.metal);
    beam.position.set(x, 6.4, 0);
    const cross = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.8, 0.25), mats.metalLite);
    cross.position.set(x, 5.2, 1.6);
    g.add(leg, beam, cross);
  }
  bandColors.forEach((c, i) => {
    const isH2 = h2Indices.includes(i) || String(c).toLowerCase() === COLORS.H2.toLowerCase();
    const isN2 = String(c).toLowerCase() === COLORS.N2.toLowerCase();
    // Pipe body = silver metal ALWAYS (定稿)
    const pipeMat = mats.metal.clone();
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, length, 12), pipeMat);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(0, 6.85 + i * 0.75, (i - (bandColors.length - 1) / 2) * 1.0);
    pipe.castShadow = true;
    g.add(pipe);

    // Thin ID colour rings (1–2 places) — locked hues stay; secondaries already desat in COLORS
    let bandMat;
    if (isH2) {
      bandMat = mats.h2Band.clone();
      bandMat.color.set(COLORS.H2);
    } else if (isN2) {
      bandMat = mats.n2Band.clone();
      bandMat.color.set(COLORS.N2);
    } else {
      bandMat = new THREE.MeshStandardMaterial({
        color: c, metalness: 0.5, roughness: 0.38,
        envMapIntensity: 1.0, emissive: 0x000000, emissiveIntensity: 0,
      });
    }
    for (const fx of [-length * 0.28, length * 0.28]) {
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.48, 14), bandMat);
      ring.rotation.z = Math.PI / 2;
      ring.position.set(fx, pipe.position.y, pipe.position.z);
      ring.castShadow = true;
      g.add(ring);
    }
    // 法兰盘
    for (const fx of [-length * 0.25, length * 0.25]) {
      const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.18, 14), mats.metalLite);
      fl.rotation.z = Math.PI / 2;
      fl.position.set(fx, pipe.position.y, pipe.position.z);
      g.add(fl);
    }
  });
  // 闸阀手轮暗示（泄漏点可挂）
  const valveBody = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), mats.metalDark);
  valveBody.position.set(0, 6.85, 0);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.08, 8, 16), mats.warn);
  wheel.position.set(0, 7.7, 0);
  g.add(valveBody, wheel);
  g.userData.leakAnchor = new THREE.Vector3(0, 7.2, 0);
  return g;
}

/** 阀组撬（N₂ 置换） */
export function makeValveSkid(THREE, { id = 'valves' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const base = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 3.2), mats.metalDark);
  base.position.y = 0.2;
  g.add(base);
  for (let i = 0; i < 3; i++) {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 12), mats.metal);
    body.position.set(-1.6 + i * 1.6, 1.2, 0);
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.06, 8, 14), mats.warn);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(-1.6 + i * 1.6, 2.1, 0);
    const lamp = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 10, 10),
      new THREE.MeshStandardMaterial({
        color: i === 0 ? COLORS.N2 : COLORS.safe_green,
        emissive: i === 0 ? COLORS.N2 : COLORS.safe_green,
        emissiveIntensity: 0.6,
      }),
    );
    lamp.position.set(-1.6 + i * 1.6, 2.55, 0);
    g.add(body, wheel, lamp);
  }
  // N₂ 色环（蓝）
  const band = colorBand(THREE, 1.2, 0.6, COLORS.N2);
  band.scale.set(1, 0.4, 1);
  band.position.set(0, 0.55, 1.2);
  g.add(band);
  g.userData = { kind: 'valves', id, pickable: true };
  base.userData = g.userData;
  return g;
}


/**
 * H10 · 可燃气体探头（对照 I-gas-detector/fixed-gas-detector）
 * 挂壁控制箱 + 探头头；远景非手持仪。报警灯可闪红。
 */
export function makeGasProbe(THREE, { id = 'H10' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  // 立柱 / 管廊挂架
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 3.6, 8), mats.metalDark);
  pole.position.y = 1.8;
  const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.6, 0.8), mats.metalLite);
  bracket.position.set(0.25, 3.0, 0);
  // 控制箱（米色工业外壳）
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1.15, 1.55, 0.55),
    new THREE.MeshStandardMaterial({ color: 0xc5c0b0, metalness: 0.45, roughness: 0.55, envMapIntensity: 0.85 }),
  );
  box.position.set(0.85, 3.15, 0);
  box.castShadow = true;
  // 指示灯：电源 / 阈值1黄 / 阈值2红（正常仅电源微亮）
  function lamp(x, y, color, intensity = 0.15) {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 10, 10),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity }),
    );
    m.position.set(x, y, 0.3);
    return m;
  }
  const lampPower = lamp(0.55, 3.55, 0xffffff, 0.35);
  const lampWarn = lamp(0.85, 3.25, COLORS.warn_orange, 0.05);
  const lampAlarm = lamp(1.15, 3.25, COLORS.danger_red, 0.05);
  // 探头头（深色壳 + 银色面板）
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.85, 0.95, 0.55),
    new THREE.MeshStandardMaterial({ color: 0x6a7380, metalness: 0.72, roughness: 0.4, envMapIntensity: 1.05 }),
  );
  head.position.set(2.0, 3.1, 0);
  head.castShadow = true;
  const face = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.7, 0.06),
    new THREE.MeshStandardMaterial({ color: 0xb0b8c4, metalness: 0.8, roughness: 0.28, envMapIntensity: 1.15 }),
  );
  face.position.set(2.0, 3.15, 0.3);
  // 传感器圆口
  const sensor = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.22, 0.12, 14),
    new THREE.MeshStandardMaterial({ color: 0xdde3ea, metalness: 0.85, roughness: 0.22, envMapIntensity: 1.2 }),
  );
  sensor.rotation.x = Math.PI / 2;
  sensor.position.set(2.0, 3.05, 0.38);
  // 状态透镜（绿正常 / 红报警）— plant.triggerAlarm 驱动
  const lens = new THREE.Mesh(
    new THREE.CircleGeometry(0.12, 12),
    new THREE.MeshStandardMaterial({
      color: COLORS.safe_green, emissive: COLORS.safe_green, emissiveIntensity: 0.75,
    }),
  );
  lens.position.set(2.0, 3.45, 0.34);
  // LEL 标牌
  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.4, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x6a7380, metalness: 0.65, roughness: 0.42, envMapIntensity: 0.95 }),
  );
  plate.position.set(1.3, 2.15, 0.2);
  const cable = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6),
    new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.35, roughness: 0.7, envMapIntensity: 0.6 }),
  );
  cable.rotation.z = Math.PI / 2;
  cable.position.set(1.4, 3.1, 0);
  g.add(pole, bracket, box, lampPower, lampWarn, lampAlarm, head, face, sensor, lens, plate, cable);
  g.userData = {
    kind: 'probe', id, pickable: true, lens,
    lampWarn, lampAlarm,
  };
  box.userData = g.userData;
  head.userData = g.userData;
  return g;
}


/** F01 · HF 储罐落在混凝土 bund 内 + 双切断暗示 */
export function makeBundTank(THREE, {
  h = 11, r = 3.3, bandColor = COLORS.HF, id = 'F01',
} = {}) {
  const mats = makeMaterials(THREE);
  const g = makeTank(THREE, { h, r, bandColor, id });
  // 围堰矮墙（二次围护）
  const bund = new THREE.Mesh(
    new THREE.BoxGeometry(r * 5.2, 1.1, r * 5.2),
    mats.concrete,
  );
  bund.position.y = 0.55;
  // 挖空感：内腔用略低的地坪
  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(r * 4.4, 0.15, r * 4.4),
    new THREE.MeshStandardMaterial({ color: 0x6a7380, metalness: 0.05, roughness: 0.92, envMapIntensity: 0.35 }),
  );
  floor.position.y = 0.12;
  // 双切断阀撬贴罐脚
  const valve = makeValveSkid(THREE, { id: id + '-cut' });
  valve.scale.set(0.55, 0.55, 0.55);
  valve.position.set(r + 2.2, 0, 0);
  // 泄漏探头标牌
  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.45, 0.06),
    new THREE.MeshStandardMaterial({
      color: COLORS.HF, emissive: COLORS.HF, emissiveIntensity: 0.05, metalness: 0.45, roughness: 0.42, envMapIntensity: 0.95,
    }),
  );
  plate.position.set(0, h * 0.35 + 0.8, r + 0.2);
  g.add(bund, floor, valve, plate);
  g.userData.kind = 'bundTank';
  return g;
}

/**
 * F04 · 搪玻璃/衬里氟化反应器（对照 glass-lined BE6300）
 * 剖视青色衬里切面；顶搅拌电机；夹套环。
 */
export function makeGlassLinedReactor(THREE, { h = 16, r = 3.4, id = 'F04' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  // 外壳体（深蓝灰金属电影感，非照片红）
  const shell = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 28), mats.metal.clone());
  shell.position.y = h / 2 + 1.0;
  shell.castShadow = true;
  shell.receiveShadow = true;
  const cap = new THREE.Mesh(
    new THREE.SphereGeometry(r, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2),
    mats.metal,
  );
  cap.position.y = h + 1.0;
  // 夹套带
  const jacket = new THREE.Mesh(
    new THREE.CylinderGeometry(r + 0.35, r + 0.35, h * 0.55, 28),
    mats.metalDark,
  );
  jacket.position.y = h * 0.4 + 1.0;
  // 裙座
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.9, r * 1.1, 1.2, 20), mats.concrete);
  skirt.position.y = 0.6;
  // 顶搅拌电机 + 机架
  const drive = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.6, 2.2), mats.metalDark);
  drive.position.y = h + 1.0 + r * 0.55 + 1.2;
  const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.4, 16), mats.metalLite);
  motor.position.y = drive.position.y + 1.4;
  // 人孔
  const manway = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.35, 16), mats.metalLite);
  manway.rotation.x = Math.PI / 2;
  manway.position.set(r * 0.15, h + 1.0 + r * 0.35, r * 0.55);
  // 侧接管簇
  for (let i = 0; i < 3; i++) {
    const noz = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.6, 10), mats.metalDark);
    noz.rotation.z = Math.PI / 2;
    noz.position.set(-(r + 0.8), 4 + i * 2.2, 0);
    g.add(noz);
  }
  // HF 色环（警示浅绿黄，≠安全绿）
  const band = colorBand(THREE, r, h * 0.55 + 1.0, COLORS.HF);
  // —— 剖视：青色衬里切面 + 搅拌桨 ——
  const lining = new THREE.Mesh(
    new THREE.CylinderGeometry(r * 0.92, r * 0.92, h * 0.92, 28),
    new THREE.MeshPhysicalMaterial({
      color: 0x3ec8e0, metalness: 0.05, roughness: 0.18,
      clearcoat: 0.85, clearcoatRoughness: 0.12,
      envMapIntensity: 1.35, transparent: true, opacity: 0.0, side: THREE.DoubleSide,
    }),
  );
  lining.position.y = h / 2 + 1.0;
  lining.visible = false;
  lining.name = 'lining';
  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.18, h * 0.7, 10),
    mats.metalLite,
  );
  shaft.position.y = h * 0.45 + 1.0;
  shaft.visible = false;
  const blade = new THREE.Mesh(new THREE.BoxGeometry(r * 1.4, 0.18, 0.55), mats.warn);
  blade.position.y = 3.2;
  blade.visible = false;
  const cutPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(r * 1.9, h * 0.9),
    new THREE.MeshStandardMaterial({
      color: 0x2ff3ff, emissive: 0x2ff3ff, emissiveIntensity: 0.2,
      metalness: 0.2, roughness: 0.35, envMapIntensity: 0.8,
      transparent: true, opacity: 0, side: THREE.DoubleSide,
    }),
  );
  cutPlane.position.set(0, h / 2 + 1.0, 0);
  cutPlane.visible = false;

  g.add(skirt, shell, jacket, cap, drive, motor, manway, band, lining, shaft, blade, cutPlane);
  g.userData = {
    kind: 'glassLinedReactor', id, pickable: true,
    cutawayTarget: shell, lining, shaft, blade, cutPlane, jacket,
  };
  shell.userData = g.userData;
  return g;
}

/** F07 · 填料吸收塔 + 旁侧碱罐 */
export function makeScrubber(THREE, { h = 18, r = 2.6, id = 'F07' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  // 下粗上细
  const base = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.15, r * 1.25, h * 0.35, 24), mats.metal);
  base.position.y = h * 0.175 + 0.6;
  base.castShadow = true;
  const col = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.85, r, h * 0.6, 24), mats.metalDark);
  col.position.y = h * 0.35 + h * 0.3 + 0.6;
  col.castShadow = true;
  const top = new THREE.Mesh(
    new THREE.SphereGeometry(r * 0.85, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    mats.metalLite,
  );
  top.position.y = h * 0.95 + 0.6;
  // 喷淋环（内件暗示）
  const spray = new THREE.Mesh(
    new THREE.TorusGeometry(r * 0.7, 0.12, 8, 20),
    new THREE.MeshStandardMaterial({
      color: COLORS.coolant || '#6ec8ff', metalness: 0.55, roughness: 0.38,
      envMapIntensity: 1.0, emissive: 0x6ec8ff, emissiveIntensity: 0.04,
    }),
  );
  spray.rotation.x = Math.PI / 2;
  spray.position.y = h * 0.72;
  spray.visible = false;
  spray.name = 'spray';
  // 填料段
  const pack = new THREE.Mesh(
    new THREE.CylinderGeometry(r * 0.78, r * 0.78, h * 0.28, 16),
    new THREE.MeshStandardMaterial({ color: 0x4a5a6e, metalness: 0.4, roughness: 0.55, envMapIntensity: 0.7, transparent: true, opacity: 0.55, wireframe: true }),
  );
  pack.position.y = h * 0.48;
  pack.visible = false;
  // HF 警示环（非安全绿）
  const band = colorBand(THREE, r * 1.05, h * 0.28 + 0.6, COLORS.HF);
  // 人孔
  const mw = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.25, 14), mats.metalLite);
  mw.rotation.x = Math.PI / 2;
  mw.position.set(0, h * 0.4, r * 1.05);
  // 旁侧碱罐
  const alkali = makeTank(THREE, { h: 7, r: 1.8, bandColor: 0xa8b8c8, id: id + '-alkali' });
  alkali.position.set(r + 5.5, 0, 0);
  alkali.scale.set(0.85, 0.85, 0.85);
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.1, r * 1.2, 0.8, 16), mats.concrete);
  skirt.position.y = 0.4;
  g.add(skirt, base, col, top, spray, pack, band, mw, alkali);
  g.userData = { kind: 'scrubber', id, pickable: true, spray, pack, cutawayTarget: col };
  base.userData = g.userData;
  col.userData = g.userData;
  return g;
}

/** F08 · 洗消水幕环 + 雨淋阀站 */
export function makeDelugeRing(THREE, { radius = 4.5, id = 'F08' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.16, 8, 32), mats.metalDark);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 5.5;
  // 喷嘴
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const noz = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.45, 8), mats.metalLite);
    noz.position.set(Math.cos(a) * radius, 5.2, Math.sin(a) * radius);
    noz.rotation.x = Math.PI;
    g.add(noz);
  }
  // 立柱
  for (const a of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 5.5, 8), mats.metalDark);
    post.position.set(Math.cos(a) * radius, 2.75, Math.sin(a) * radius);
    g.add(post);
  }
  // 雨淋阀站
  const station = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.0, 1.4), mats.metal);
  station.position.set(radius + 2.5, 1.1, 0);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.07, 8, 14), mats.warn);
  wheel.position.set(radius + 2.5, 2.3, 0.75);
  g.add(ring, station, wheel);
  g.userData = { kind: 'deluge', id, pickable: true, ring };
  ring.userData = g.userData;
  station.userData = g.userData;
  return g;
}

/** F10 · ESD 箱 + 红蘑菇头 */
export function makeEsdPanel(THREE, { id = 'F10' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const cabinet = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.8, 1.5), mats.metalDark);
  cabinet.position.y = 1.5;
  cabinet.castShadow = true;
  const door = new THREE.Mesh(
    new THREE.BoxGeometry(3.0, 2.4, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x6a7380, metalness: 0.72, roughness: 0.4, envMapIntensity: 1.05 }),
  );
  door.position.set(0, 1.5, 0.78);
  const btn = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.48, 0.35, 20),
    new THREE.MeshStandardMaterial({
      color: COLORS.danger_red, emissive: COLORS.danger_red, emissiveIntensity: 0.65,
    }),
  );
  btn.rotation.x = Math.PI / 2;
  btn.position.set(0, 1.7, 0.95);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.06, 8, 20),
    new THREE.MeshStandardMaterial({ color: 0xffee88, emissive: 0xffaa00, emissiveIntensity: 0.4 }),
  );
  ring.position.copy(btn.position);
  ring.position.z += 0.02;
  const pad = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.2, 2.0), mats.concrete);
  pad.position.y = 0.1;
  g.add(pad, cabinet, door, btn, ring);
  g.userData = { kind: 'esd', id, pickable: true, btn };
  cabinet.userData = g.userData;
  btn.userData = g.userData;
  return g;
}

/** F₂ 对比气瓶排架（默认隐藏 · 极危险示意） */
export function makeF2CylinderRack(THREE, { id = 'F2' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const rack = new THREE.Mesh(new THREE.BoxGeometry(8, 0.3, 2.2), mats.metalDark);
  rack.position.y = 0.15;
  g.add(rack);
  for (let i = 0; i < 5; i++) {
    const cyl = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.38, 3.2, 14),
      new THREE.MeshStandardMaterial({ color: 0x7a8490, metalness: 0.78, roughness: 0.36, envMapIntensity: 1.1 }),
    );
    cyl.position.set(-3 + i * 1.5, 1.75, 0);
    const tip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.18, 0.5, 10),
      mats.metalLite,
    );
    tip.position.set(-3 + i * 1.5, 3.55, 0);
    // F₂ 对比色环（亮黄绿 · 非安全绿）
    const band = colorBand(THREE, 0.38, 2.2, COLORS.F2);
    band.position.x = -3 + i * 1.5;
    band.position.z = 0;
    g.add(cyl, tip, band);
  }
  const placard = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 1.8, 0.08),
    new THREE.MeshStandardMaterial({
      color: COLORS.danger_red, emissive: COLORS.danger_red, emissiveIntensity: 0.12,
      metalness: 0.35, roughness: 0.45, envMapIntensity: 0.8,
    }),
  );
  placard.position.set(0, 2.2, 1.3);
  g.add(placard);
  g.visible = false; // 默认关
  g.userData = { kind: 'f2rack', id, pickable: true };
  return g;
}


/** D01 · 重氮化夹套釜（低温单元 · 非高压塔） */
export function makeJacketedKettle(THREE, {
  h = 9, r = 3.6, id = 'D01', jacketColor = COLORS.coolant,
} = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const shell = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.05, h, 28), mats.metal);
  shell.position.y = h / 2 + 0.9;
  shell.castShadow = true;
  const cap = new THREE.Mesh(
    new THREE.SphereGeometry(r, 22, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    mats.metal,
  );
  cap.position.y = h + 0.9;
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.85, r * 1.05, 1.0, 18), mats.concrete);
  skirt.position.y = 0.5;
  const jacket = new THREE.Mesh(
    new THREE.CylinderGeometry(r + 0.45, r + 0.5, h * 0.7, 28),
    new THREE.MeshPhysicalMaterial({
      color: jacketColor, metalness: 0.35, roughness: 0.42,
      transparent: true, opacity: 0.48, envMapIntensity: 1.05,
      clearcoat: 0.25, clearcoatRoughness: 0.4,
      emissive: jacketColor, emissiveIntensity: 0.04,
    }),
  );
  jacket.position.y = h * 0.4 + 0.9;
  jacket.name = 'jacket';
  const inPipe = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.28, 3.2, 10),
    new THREE.MeshStandardMaterial({
      color: jacketColor, emissive: jacketColor, emissiveIntensity: 0.04,
      metalness: 0.62, roughness: 0.36, envMapIntensity: 1.05,
    }),
  );
  inPipe.rotation.z = Math.PI / 2;
  inPipe.position.set(-(r + 1.8), h * 0.25 + 0.9, 0);
  const outPipe = inPipe.clone();
  outPipe.position.set(r + 1.8, h * 0.55 + 0.9, 0);
  const drive = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 1.8), mats.metalDark);
  drive.position.y = h + 0.9 + r * 0.4 + 0.9;
  const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.1, 14), mats.metalLite);
  motor.position.y = drive.position.y + 1.05;
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, h * 0.65, 8), mats.metalLite);
  shaft.position.y = h * 0.45 + 0.9;
  shaft.visible = false;
  const blade = new THREE.Mesh(new THREE.BoxGeometry(r * 1.2, 0.15, 0.4), mats.warn);
  blade.position.y = 2.8;
  blade.visible = false;
  const well = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.4, 8), mats.metalLite);
  well.position.set(r * 0.55, h + 0.5, r * 0.35);
  const drip = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 1.4, 10), mats.metalDark);
  drip.position.set(-r * 0.4, h + 0.9 + r * 0.55, 0);
  const band = colorBand(THREE, r, h * 0.45 + 0.9, COLORS.diazonium);
  const channel = new THREE.Mesh(
    new THREE.TorusGeometry(r + 0.15, 0.18, 8, 24),
    new THREE.MeshStandardMaterial({
      color: jacketColor, emissive: jacketColor, emissiveIntensity: 0.12,
      metalness: 0.4, roughness: 0.4, envMapIntensity: 0.9,
      transparent: true, opacity: 0,
    }),
  );
  channel.rotation.x = Math.PI / 2;
  channel.position.y = h * 0.4 + 0.9;
  channel.visible = false;
  channel.name = 'jacketChannel';
  g.add(skirt, shell, jacket, cap, drive, motor, shaft, blade, well, drip, band, inPipe, outPipe, channel);
  g.userData = {
    kind: 'jacketedKettle', id, pickable: true,
    cutawayTarget: shell, jacket, shaft, blade, channel,
  };
  shell.userData = g.userData;
  return g;
}

/** D03 · 冷冻机组撬（箱体 · 非高塔） */
export function makeChillerSkid(THREE, { id = 'D03' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const pad = new THREE.Mesh(new THREE.BoxGeometry(10, 0.25, 6), mats.concrete);
  pad.position.y = 0.12;
  const body = new THREE.Mesh(new THREE.BoxGeometry(8.5, 3.6, 5.2), mats.metalDark);
  body.position.y = 2.0;
  body.castShadow = true;
  const grille = new THREE.Mesh(
    new THREE.BoxGeometry(7.8, 1.6, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x6a7380, metalness: 0.7, roughness: 0.45, envMapIntensity: 0.95 }),
  );
  grille.position.set(0, 2.4, 2.65);
  const out = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.32, 6, 12),
    new THREE.MeshStandardMaterial({
      color: COLORS.coolant, emissive: COLORS.coolant, emissiveIntensity: 0.04,
      metalness: 0.6, roughness: 0.36, envMapIntensity: 1.05,
    }),
  );
  out.rotation.z = Math.PI / 2;
  out.position.set(5.5, 2.2, 0);
  const fan = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.35, 16), mats.metalLite);
  fan.rotation.x = Math.PI / 2;
  fan.position.set(-2.2, 3.6, 0);
  g.add(pad, body, grille, out, fan);
  g.userData = { kind: 'chiller', id, pickable: true };
  body.userData = g.userData;
  return g;
}

/** D02/D05 · 高位滴加/计量小罐 */
export function makeHeadTank(THREE, {
  h = 4.5, r = 1.5, bandColor = COLORS.nitrite, id = 'D02',
} = {}) {
  const mats = makeMaterials(THREE);
  const g = makeTank(THREE, { h, r, bandColor, id });
  for (const [x, z] of [[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, 4.5, 0.25), mats.metalDark);
    leg.position.set(x, 2.25, z);
    g.add(leg);
  }
  const valve = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.06, 8, 12), mats.warn);
  valve.position.set(0, 0.8, r + 0.6);
  g.add(valve);
  g.userData.kind = 'headTank';
  return g;
}

/** D06 · 紧急稀释敞口槽 */
export function makeQuenchTank(THREE, { id = 'D06', r = 4.2, h = 3.2 } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(r, r * 1.05, h, 24, 1, true),
    mats.metalDark,
  );
  wall.position.y = h / 2 + 0.2;
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(r * 0.98, 24), mats.concrete);
  bottom.rotation.x = -Math.PI / 2;
  bottom.position.y = 0.22;
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(r * 0.92, r * 0.92, 0.8, 24),
    new THREE.MeshPhysicalMaterial({
      color: COLORS.coolant, transparent: true, opacity: 0.5,
      metalness: 0.05, roughness: 0.12, envMapIntensity: 1.2,
      clearcoat: 0.6, clearcoatRoughness: 0.2,
      emissive: COLORS.coolant, emissiveIntensity: 0.03,
    }),
  );
  water.position.y = 0.7;
  const band = colorBand(THREE, r, h * 0.55, COLORS.coolant);
  g.add(wall, bottom, water, band);
  g.userData = { kind: 'quench', id, pickable: true };
  wall.userData = g.userData;
  return g;
}

/** D07 · 泄放阀 + 逸气管 */
export function makeReliefVent(THREE, { id = 'D07' } = {}) {
  const mats = makeMaterials(THREE);
  const g = new THREE.Group();
  g.name = id;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 1.2, 12), mats.metal);
  body.position.y = 0.7;
  const spring = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.8, 10), mats.warn);
  spring.position.y = 1.6;
  const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 6, 10), mats.metalDark);
  stack.position.y = 4.5;
  g.add(body, spring, stack);
  g.userData = { kind: 'relief', id, pickable: true };
  body.userData = g.userData;
  return g;
}


/** M8 · 厂区路灯 — 沿沥青路两侧加密暖白灯 + 地面光池（三工艺共用） */
export function makeStreetLights(THREE, size = 220) {
  const g = new THREE.Group();
  g.name = 'streetLights';

  const poleMat = new THREE.MeshStandardMaterial({
    color: 0x5a6570, metalness: 0.82, roughness: 0.36, envMapIntensity: 1.1,
  });
  const headMat = new THREE.MeshStandardMaterial({
    color: 0x2a2e34, metalness: 0.65, roughness: 0.35, envMapIntensity: 0.9,
    emissive: 0xffd2a0, emissiveIntensity: 4.62, // CODE_DEFAULTS streetHeadEmissiveIntensity
  });
  const armMat = poleMat;

  // Soft warm radial pool (Haber-style additive) — stronger for night asphalt read
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  const gr = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, 'rgba(255, 232, 200, 0.48)');
  gr.addColorStop(0.35, 'rgba(255, 210, 160, 0.22)');
  gr.addColorStop(1, 'rgba(255, 200, 140, 0)');
  ctx.fillStyle = gr;
  ctx.fillRect(0, 0, 256, 256);
  const poolTex = new THREE.CanvasTexture(c);
  poolTex.colorSpace = THREE.SRGBColorSpace;
  const poolMat = new THREE.MeshBasicMaterial({
    map: poolTex,
    transparent: true,
    opacity: 0.51, // CODE_DEFAULTS streetPoolOpacity
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  });

  const poleG = new THREE.CylinderGeometry(0.07, 0.11, 1, 8);
  const headG = new THREE.BoxGeometry(0.7, 0.14, 0.32);
  const armG = new THREE.BoxGeometry(1.1, 0.07, 0.07);
  const poolG = new THREE.PlaneGeometry(1, 1);
  poolG.rotateX(-Math.PI / 2);

  // Dense both-sides placements along makeGround asphalt roads
  // z-roads at -size*0.12 / size*0.18; x-road at size*0.08
  const zRoads = [-size * 0.12, size * 0.18];
  const xRoad = size * 0.08;
  const h = 5.2;
  const poolD = 5.2;
  const spacing = 12;
  const curb = 4.0;
  const lamps = [];

  for (let ri = 0; ri < zRoads.length; ri++) {
    const z = zRoads[ri];
    for (let x = -size * 0.38; x <= size * 0.38 + 0.01; x += spacing) {
      // Both curbs; stagger opposite side by half spacing
      for (const side of [-1, 1]) {
        const xOff = side > 0 ? 0 : spacing * 0.5;
        const xx = x + xOff;
        if (xx < -size * 0.4 || xx > size * 0.4) continue;
        lamps.push({
          x: xx,
          z: z + side * curb,
          ry: side > 0 ? -Math.PI / 2 : Math.PI / 2,
        });
      }
    }
  }
  // Cross road — both sides, denser
  const zSpacing = 14;
  for (let z = -size * 0.34; z <= size * 0.32 + 0.01; z += zSpacing) {
    for (const side of [-1, 1]) {
      const zOff = side > 0 ? 0 : zSpacing * 0.5;
      const zz = z + zOff;
      if (zz < -size * 0.36 || zz > size * 0.34) continue;
      lamps.push({
        x: xRoad + side * curb,
        z: zz,
        ry: side > 0 ? Math.PI : 0,
      });
    }
  }

  // Cap visual poles (teaching density, not stadium)
  const placed = lamps.slice(0, 36);

  let lightBudget = 0;
  const maxPointLights = 12;
  const lights = [];

  for (let li = 0; li < placed.length; li++) {
    const { x, z, ry } = placed[li];
    const pole = new THREE.Mesh(poleG, poleMat);
    pole.scale.set(1, h, 1);
    pole.position.set(x, h / 2, z);
    pole.castShadow = false;
    g.add(pole);

    const ax = x + Math.cos(ry) * 0.95;
    const az = z - Math.sin(ry) * 0.95;

    const arm = new THREE.Mesh(armG, armMat);
    arm.position.set((x + ax) / 2, h, (z + az) / 2);
    arm.rotation.y = ry;
    g.add(arm);

    const head = new THREE.Mesh(headG, headMat);
    head.position.set(ax, h - 0.02, az);
    head.rotation.y = ry;
    g.add(head);

    const pool = new THREE.Mesh(poolG, poolMat);
    pool.position.set(ax, 0.06, az);
    pool.scale.set(poolD, 1, poolD * 0.9);
    g.add(pool);

    // Point lights on every other pole to keep SoftGL budget sane
    if (lightBudget < maxPointLights && li % 2 === 0) {
      const pl = new THREE.PointLight(0xffd8b0, 0.97, 22, 2); // CODE_DEFAULTS streetLampIntensity
      pl.position.set(ax, h - 0.3, az);
      g.add(pl);
      lights.push(pl);
      lightBudget += 1;
    }
  }

  g.userData.env = {
    headMat,
    poolMat,
    poleMat,
    lights,
  };

  return g;
}

/** Teaching-示意 industrial trucks looping asphalt roads (metallic, takes IBL). */
export function makeRoadTraffic(THREE, size = 220) {
  const g = new THREE.Group();
  g.name = 'roadTraffic';

  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x8a93a0, metalness: 0.78, roughness: 0.34, envMapIntensity: 1.15,
  });
  const cabMat = new THREE.MeshStandardMaterial({
    color: 0xb0bac6, metalness: 0.85, roughness: 0.28, envMapIntensity: 1.25,
  });
  const bedMat = new THREE.MeshStandardMaterial({
    color: 0x6a7380, metalness: 0.72, roughness: 0.4, envMapIntensity: 1.05,
  });
  const wheelMat = new THREE.MeshStandardMaterial({
    color: 0x1a1c20, metalness: 0.35, roughness: 0.72, envMapIntensity: 0.55,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: 0xc45a12, metalness: 0.6, roughness: 0.38, envMapIntensity: 1.0,
    emissive: 0xc45a12, emissiveIntensity: 0.04,
  });

  // Local -X is cab/windshield (visual front). Orient so -X faces travel.
  const headlampMat = new THREE.MeshStandardMaterial({
    color: 0xfff2d0, metalness: 0.2, roughness: 0.25,
    emissive: 0xffe0a8, emissiveIntensity: 3.4, envMapIntensity: 0.3,
  });

  function makeTruck({ scale = 1, bedColor = 0x6a7380 } = {}) {
    const t = new THREE.Group();
    t.name = 'truck';
    const bedM = bedMat.clone();
    bedM.color.setHex(bedColor);

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.35, 1.7), bodyMat);
    chassis.position.y = 0.55;
    chassis.castShadow = true;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.35, 1.15, 1.65), cabMat);
    cab.position.set(-1.35, 1.25, 0);
    cab.castShadow = true;
    const windshield = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.55, 1.35),
      new THREE.MeshStandardMaterial({
        color: 0x8ec8e8, metalness: 0.9, roughness: 0.12, envMapIntensity: 1.4,
        transparent: true, opacity: 0.55,
      }),
    );
    windshield.position.set(-2.0, 1.35, 0);
    const bed = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.05, 1.6), bedM);
    bed.position.set(0.7, 1.15, 0);
    bed.castShadow = true;
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.62, 0.12, 1.62), accentMat);
    stripe.position.set(0.7, 0.72, 0);
    const wheelG = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 12);
    const wheels = [];
    for (const [wx, wz] of [[-1.4, 0.85], [-1.4, -0.85], [1.35, 0.85], [1.35, -0.85], [0.35, 0.85], [0.35, -0.85]]) {
      const w = new THREE.Mesh(wheelG, wheelMat);
      w.rotation.z = Math.PI / 2;
      w.position.set(wx, 0.38, wz);
      w.castShadow = true;
      wheels.push(w);
      t.add(w);
    }
    // Emissive lamp housings on cab front (local -X)
    const lampG = new THREE.BoxGeometry(0.12, 0.16, 0.28);
    const lampL = new THREE.Mesh(lampG, headlampMat);
    lampL.position.set(-2.05, 0.95, 0.52);
    const lampR = new THREE.Mesh(lampG, headlampMat);
    lampR.position.set(-2.05, 0.95, -0.52);
    t.add(chassis, cab, windshield, bed, stripe, lampL, lampR);

    // One SpotLight per truck: warm beam lighting asphalt ahead of travel
    const spot = new THREE.SpotLight(0xffe6c0, 4.2, 38, Math.PI / 7, 0.42, 1.35);
    spot.position.set(-2.15, 1.05, 0);
    spot.castShadow = false;
    const spotTarget = new THREE.Object3D();
    spotTarget.position.set(-16, 0.15, 0); // local -X = forward once oriented
    t.add(spot);
    t.add(spotTarget);
    spot.target = spotTarget;

    t.scale.setScalar(scale);
    t.userData.wheels = wheels;
    t.userData.headlight = spot;
    t.userData.headlightTarget = spotTarget;
    return t;
  }

  const roadW = 7.2;
  const zRoads = [-size * 0.12, size * 0.18];
  const xRoad = size * 0.08;
  const xMin = -size * 0.4;
  const xMax = size * 0.4;
  const zMin = -size * 0.34;
  const zMax = size * 0.32;

  // Lane offsets keep trucks off center dashes / clear of device pads a bit
  const routes = [
    { axis: 'x', z: zRoads[0] - 1.6, dir: 1, speed: 9.5, x0: xMin + 8, color: 0x6a7380, scale: 1.05 },
    { axis: 'x', z: zRoads[0] + 1.6, dir: -1, speed: 8.2, x0: xMax - 20, color: 0x5a6878, scale: 0.95 },
    { axis: 'x', z: zRoads[1] - 1.5, dir: 1, speed: 7.8, x0: xMin + 35, color: 0x7a6470, scale: 1.0 },
    { axis: 'x', z: zRoads[1] + 1.5, dir: -1, speed: 10.2, x0: xMax - 5, color: 0x4a5a68, scale: 1.1 },
    { axis: 'z', x: xRoad - 1.55, dir: 1, speed: 8.6, z0: zMin + 12, color: 0x687888, scale: 0.98 },
    { axis: 'z', x: xRoad + 1.55, dir: -1, speed: 9.1, z0: zMax - 18, color: 0x706858, scale: 1.02 },
  ];

  /** Face local -X (cab) along travel heading. */
  function headingY(axis, dir) {
    if (axis === 'x') return dir > 0 ? Math.PI : 0;           // +X travel → face +X
    return dir > 0 ? Math.PI / 2 : -Math.PI / 2;              // +Z travel → face +Z
  }

  const _fwd = new THREE.Vector3();
  const fleet = [];
  for (const r of routes) {
    const truck = makeTruck({ scale: r.scale, bedColor: r.color });
    if (r.axis === 'x') {
      truck.position.set(r.x0, 0, r.z);
    } else {
      truck.position.set(r.x, 0, r.z0);
    }
    truck.rotation.y = headingY(r.axis, r.dir);
    g.add(truck);
    // SpotLight.target must live in the scene graph root path
    if (truck.userData.headlightTarget) g.add(truck.userData.headlightTarget);
    fleet.push({ truck, ...r });
  }

  g.userData.update = (dtMs) => {
    const dt = Math.min(0.05, (dtMs || 16) / 1000);
    for (const f of fleet) {
      const { truck, axis, dir, speed } = f;
      if (axis === 'x') {
        truck.position.x += dir * speed * dt;
        if (dir > 0 && truck.position.x > xMax) truck.position.x = xMin;
        if (dir < 0 && truck.position.x < xMin) truck.position.x = xMax;
      } else {
        truck.position.z += dir * speed * dt;
        if (dir > 0 && truck.position.z > zMax) truck.position.z = zMin;
        if (dir < 0 && truck.position.z < zMin) truck.position.z = zMax;
      }
      truck.rotation.y = headingY(axis, dir);
      // Keep headlight beam target on asphalt ahead of travel
      const spot = truck.userData.headlight;
      const tgt = truck.userData.headlightTarget;
      if (spot && tgt) {
        const yaw = truck.rotation.y;
        // Local -X forward after headingY: world dir = (-cos(yaw), 0, sin(yaw))?
        // rotation.y maps local (-1,0,0) → (-cos(y), 0, sin(y))
        _fwd.set(-Math.cos(yaw), 0, Math.sin(yaw));
        tgt.position.set(
          truck.position.x + _fwd.x * 18,
          0.2,
          truck.position.z + _fwd.z * 18,
        );
        spot.target = tgt;
        spot.target.updateMatrixWorld?.();
      }
      const wheels = truck.userData.wheels || [];
      for (const w of wheels) w.rotation.x += dir * speed * dt * 1.8;
    }
  };

  g.userData.fleet = fleet;
  return g;
}


/** Shared asphalt corridor geometry (ground / lamps / trucks / plant clearance). */
export function getRoadLayout(size = 220) {
  const roadW = 7.2;
  const margin = 2.2; // equipment footprints stay off curb
  const half = roadW * 0.5 + margin;
  const zRoads = [-size * 0.12, size * 0.18];
  const xRoad = size * 0.08;
  return {
    roadW,
    margin,
    half,
    zRoads,
    xRoad,
    /** True if (x,z) disk intersects asphalt+margin corridor */
    hitsRoad(x, z, radius = 0) {
      const r = Math.max(0, radius);
      for (const zr of zRoads) {
        if (Math.abs(z - zr) < half + r) return true;
      }
      if (Math.abs(x - xRoad) < half + r) return true;
      return false;
    },
  };
}

/**
 * Stylized safety inspectors (hardhat + vest) on pad/walkway patrol loops.
 * Paths stay on concrete islands — never along asphalt centerlines or through
 * major equipment centroids.
 */
export function makeSafetyPatrols(THREE, size = 220) {
  const g = new THREE.Group();
  g.name = 'safetyPatrols';
  const roads = getRoadLayout(size);

  function makeInspector({ vest = 0xff8a1e, hardhat = 0xffe14a, scale = 1 } = {}) {
    const fig = new THREE.Group();
    fig.name = 'inspector';
    const boot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.18, 0.22, 8),
      new THREE.MeshStandardMaterial({ color: 0x2a2e34, roughness: 0.85, metalness: 0.1 }),
    );
    boot.position.y = 0.11;
    const legL = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.13, 0.7, 8),
      new THREE.MeshStandardMaterial({ color: 0x3a4550, roughness: 0.8, metalness: 0.15 }),
    );
    legL.position.set(-0.12, 0.55, 0);
    const legR = legL.clone();
    legR.position.x = 0.12;
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.75, 0.32),
      new THREE.MeshStandardMaterial({
        color: vest, roughness: 0.55, metalness: 0.25,
        emissive: vest, emissiveIntensity: 0.08, envMapIntensity: 0.7,
      }),
    );
    torso.position.y = 1.2;
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.56, 0.1, 0.33),
      new THREE.MeshStandardMaterial({
        color: 0xfff2a8, emissive: 0xfff2a8, emissiveIntensity: 0.35, roughness: 0.5, metalness: 0.2,
      }),
    );
    stripe.position.y = 1.05;
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 12, 10),
      new THREE.MeshStandardMaterial({ color: 0xcfa886, roughness: 0.7, metalness: 0.05 }),
    );
    head.position.y = 1.72;
    const hat = new THREE.Mesh(
      new THREE.SphereGeometry(0.23, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({
        color: hardhat, roughness: 0.45, metalness: 0.2,
        emissive: hardhat, emissiveIntensity: 0.12,
      }),
    );
    hat.position.y = 1.78;
    const brim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.04, 12),
      new THREE.MeshStandardMaterial({ color: hardhat, roughness: 0.45, metalness: 0.2 }),
    );
    brim.position.y = 1.78;
    fig.add(boot, legL, legR, torso, stripe, head, hat, brim);
    fig.scale.setScalar(scale);
    fig.userData.legs = [legL, legR];
    return fig;
  }

  // Patrol loops on unit-pad islands (clear of asphalt corridors)
  const s = size / 240;
  const loops = [
    { // feed pad walkway
      pts: [
        [-52 * s, -12 * s], [-30 * s, -12 * s], [-30 * s, 4 * s], [-52 * s, 4 * s],
      ],
      speed: 1.55,
      vest: 0xff8a1e,
      phase: 0,
    },
    { // reactor island (west of x-road)
      pts: [
        [-6 * s, -12 * s], [8 * s, -12 * s], [8 * s, 6 * s], [-6 * s, 6 * s],
      ],
      speed: 1.35,
      vest: 0xffc107,
      phase: 0.35,
      hardhat: 0xffffff,
    },
    { // sep / compressor east of x-road
      pts: [
        [28 * s, -10 * s], [48 * s, -10 * s], [48 * s, 10 * s], [28 * s, 10 * s],
      ],
      speed: 1.7,
      vest: 0xff8a1e,
      phase: 0.7,
    },
    { // product / flare apron
      pts: [
        [56 * s, -14 * s], [72 * s, -14 * s], [72 * s, 6 * s], [56 * s, 6 * s],
      ],
      speed: 1.25,
      vest: 0x2ecc71,
      phase: 0.15,
      hardhat: 0xffe14a,
    },
  ];

  const agents = [];
  for (const loop of loops) {
    // Drop any waypoint that somehow lands on asphalt
    const pts = loop.pts.filter(([x, z]) => !roads.hitsRoad(x, z, 0.8));
    if (pts.length < 2) continue;
    const fig = makeInspector({
      vest: loop.vest,
      hardhat: loop.hardhat ?? 0xffe14a,
      scale: 1.05,
    });
    g.add(fig);
    agents.push({
      fig,
      pts,
      speed: loop.speed,
      // distance along polyline perimeter
      dist: loop.phase * perimeter(pts),
      stride: 0,
    });
  }

  function perimeter(pts) {
    let len = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      len += Math.hypot(b[0] - a[0], b[1] - a[1]);
    }
    return len;
  }

  function placeAlong(pts, dist) {
    const per = perimeter(pts);
    let d = ((dist % per) + per) % per;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (d <= seg) {
        const t = seg > 1e-6 ? d / seg : 0;
        return {
          x: a[0] + (b[0] - a[0]) * t,
          z: a[1] + (b[1] - a[1]) * t,
          yaw: Math.atan2(b[0] - a[0], b[1] - a[1]),
        };
      }
      d -= seg;
    }
    const a = pts[0];
    return { x: a[0], z: a[1], yaw: 0 };
  }

  g.userData.update = (dtMs) => {
    const dt = Math.min(0.05, (dtMs || 16) / 1000);
    for (const a of agents) {
      a.dist += a.speed * dt;
      const p = placeAlong(a.pts, a.dist);
      // Skip a frame jump if snapped onto road (safety)
      if (roads.hitsRoad(p.x, p.z, 0.5)) continue;
      a.fig.position.set(p.x, 0, p.z);
      a.fig.rotation.y = p.yaw;
      a.stride += dt * a.speed * 4.5;
      const legs = a.fig.userData.legs || [];
      if (legs[0]) legs[0].rotation.x = Math.sin(a.stride) * 0.45;
      if (legs[1]) legs[1].rotation.x = Math.sin(a.stride + Math.PI) * 0.45;
    }
  };
  g.userData.agents = agents;
  g.userData.roads = roads;
  return g;
}

/** 厂房地坪 — Haber 分层：外环暗地 + 混凝土主垫 + 沥青路 + 设备浅垫 */
export function makeGround(THREE, size = 220) {
  const g = new THREE.Group();
  g.name = 'ground';

  // 1) Outer dark field (fog apron) — look-dev bake
  const outer = new THREE.Mesh(
    new THREE.PlaneGeometry(size * 4.5, size * 4.5),
    new THREE.MeshStandardMaterial({ color: 0x342704, roughness: 0.47, metalness: 0 }),
  );
  outer.rotation.x = -Math.PI / 2;
  outer.position.y = -0.05;
  outer.receiveShadow = true;
  g.add(outer);

  // 2) Main concrete plant pad (mid-grey, not black asphalt void)
  const tCon = concreteTex();
  tCon.repeat.set(Math.max(10, size / 16), Math.max(8, size / 20));
  tCon.needsUpdate = true;
  const padMat = new THREE.MeshStandardMaterial({
    color: 0x3f3a36,
    map: tCon,
    roughness: 0.81,
    metalness: 0.04,
    emissive: 0x1a1e24,
    emissiveIntensity: 0.04,
  });
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.95, size * 0.78), padMat);
  pad.rotation.x = -Math.PI / 2;
  pad.position.set(0, 0, -size * 0.04);
  pad.receiveShadow = true;
  g.add(pad);

  // 3) Asphalt roads + grit + white dashes + thin concrete curbs
  const tAsphX = asphaltTex();
  tAsphX.repeat.set(Math.max(20, size / 6), 2);
  tAsphX.needsUpdate = true;
  const tAsphZ = asphaltTex();
  tAsphZ.repeat.set(2, Math.max(16, size / 8));
  tAsphZ.needsUpdate = true;
  const rdX = new THREE.MeshStandardMaterial({
    color: 0x3a3e45, map: tAsphX, roughness: 0.56, metalness: 0.1,
  });
  const rdZ = new THREE.MeshStandardMaterial({
    color: 0x3a3e45, map: tAsphZ, roughness: 0.56, metalness: 0.1,
  });
  const paint = new THREE.MeshBasicMaterial({ color: 0xe8e8e0 });
  const curbMat = new THREE.MeshStandardMaterial({
    color: 0x9aa0a8, roughness: 1, metalness: 0.04,
    emissive: 0x1c2026, emissiveIntensity: 0.95,
  });
  const dashGX = new THREE.PlaneGeometry(3, 0.15);
  dashGX.rotateX(-Math.PI / 2);
  const dashGZ = new THREE.PlaneGeometry(0.15, 3);
  dashGZ.rotateX(-Math.PI / 2);

  const roadW = 7.2;
  const zRoads = [-size * 0.12, size * 0.18];
  for (const z of zRoads) {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.9, roadW), rdX);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0.03, z);
    road.receiveShadow = true;
    g.add(road);
    for (let x = -size * 0.42; x < size * 0.42; x += 6) {
      const dash = new THREE.Mesh(dashGX, paint);
      dash.position.set(x, 0.05, z);
      g.add(dash);
    }
    for (const s of [-1, 1]) {
      const curb = new THREE.Mesh(new THREE.BoxGeometry(size * 0.9, 0.22, 0.28), curbMat);
      curb.position.set(0, 0.11, z + s * (roadW * 0.5 + 0.12));
      curb.receiveShadow = true;
      g.add(curb);
    }
  }

  const xRoad = size * 0.08;
  {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(roadW, size * 0.72), rdZ);
    road.rotation.x = -Math.PI / 2;
    road.position.set(xRoad, 0.032, -size * 0.02);
    road.receiveShadow = true;
    g.add(road);
    for (let z = -size * 0.32; z < size * 0.32; z += 6) {
      const dash = new THREE.Mesh(dashGZ, paint);
      dash.position.set(xRoad, 0.05, z);
      g.add(dash);
    }
    for (const s of [-1, 1]) {
      const curb = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, size * 0.72), curbMat);
      curb.position.set(xRoad + s * (roadW * 0.5 + 0.12), 0.11, -size * 0.02);
      curb.receiveShadow = true;
      g.add(curb);
    }
  }

  // Soft amber safety lines (subtle)
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xc9a227, transparent: true, opacity: 0.45 });
  for (const z of [-size * 0.22, size * 0.28]) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.55, 0.28), lineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(0, 0.055, z);
    g.add(line);
  }

  // 4) Unit pads as islands BETWEEN asphalt corridors (never cover roads)
  const roads = getRoadLayout(size);
  const tUnit = concreteTex();
  tUnit.repeat.set(6, 6);
  tUnit.needsUpdate = true;
  const unitMat = new THREE.MeshStandardMaterial({
    color: 0x9aa2aa, map: tUnit, roughness: 0.59, metalness: 0.03,
    emissive: 0x22262c, emissiveIntensity: 1.4,
  });
  // Sized for size=240 reference; scale with plant. Keep clear of xRoad / zRoads.
  const s = size / 240;
  const pads = [
    [-40 * s, -6 * s, 36 * s, 20 * s],  // feed W (south of north-road, west of x-road)
    [0 * s, -4 * s, 20 * s, 20 * s],    // reactor island west of x-road
    [42 * s, 0 * s, 28 * s, 24 * s],    // sep/comp east of x-road
    [66 * s, -4 * s, 24 * s, 24 * s],   // product / flare apron (north of south-road)
  ];
  for (const [x, z, w, d] of pads) {
    // Sanity: pad center must not sit on asphalt
    if (roads.hitsRoad(x, z, Math.min(w, d) * 0.15)) {
      console.warn('[ground] unit pad center hits road corridor', x, z);
    }
    const u = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, d), unitMat);
    u.position.set(x, 0.03, z);
    u.receiveShadow = true;
    g.add(u);
  }

  // M8 street lamps + looping transport trucks (shared p=7|8|9)
  const street = makeStreetLights(THREE, size);
  g.add(street);
  const traffic = makeRoadTraffic(THREE, size);
  g.add(traffic);
  const patrols = makeSafetyPatrols(THREE, size);
  g.add(patrols);

  g.userData.env = {
    outerMat: outer.material,
    padMat,
    asphaltMats: [rdX, rdZ],
    unitMat,
    curbMat,
    street: street.userData.env,
  };
  g.userData.traffic = traffic;
  g.userData.patrols = patrols;
  g.userData.roads = roads;

  return g;
}
