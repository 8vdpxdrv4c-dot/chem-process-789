/**
 * SoftGL-safe scrubber / steam mist — Points rising plume (lighter than
 * demos/effects/particles-steam-plume.js InstancedMesh billboards).
 */
import * as THREE from 'three';

/**
 * @param {typeof THREE} THREE
 * @param {{
 *   position?: {x:number,y:number,z:number},
 *   color?: string|number,
 *   count?: number,
 *   rise?: number,
 *   spread?: number,
 *   softGL?: boolean,
 *   name?: string,
 * }} opts
 */
export function createSteamMist(THREE, opts = {}) {
  const {
    position = { x: 0, y: 0, z: 0 },
    color = '#b0c4e0',
    count = 64,
    rise = 6,
    spread = 1.6,
    softGL = false,
    name = 'steamMist',
  } = opts;

  const n = softGL ? Math.min(48, count) : count;
  const root = new THREE.Group();
  root.name = name;
  root.position.set(position.x, position.y, position.z);

  const pos = new Float32Array(n * 3);
  const vel = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) reset(i, true);

  function reset(i, randomY) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * spread * 0.35;
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = randomY ? Math.random() * rise : 0.05;
    pos[i * 3 + 2] = Math.sin(a) * r;
    vel[i * 3] = (Math.random() - 0.5) * 0.25;
    vel[i * 3 + 1] = 0.55 + Math.random() * 0.85;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color,
    size: softGL ? 1.6 : 0.65,
    transparent: true,
    opacity: softGL ? 0.42 : 0.3,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.NormalBlending,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  root.add(pts);

  let boost = 1;
  function setBoost(mul) {
    boost = Math.max(0.15, Number(mul) || 1);
    mat.opacity = 0.18 + 0.16 * Math.min(1.4, boost);
  }

  function update(dt) {
    if (!root.visible) return;
    const spd = 0.7 + boost * 0.55;
    for (let i = 0; i < n; i++) {
      pos[i * 3] += vel[i * 3] * dt * spd;
      pos[i * 3 + 1] += vel[i * 3 + 1] * dt * spd;
      pos[i * 3 + 2] += vel[i * 3 + 2] * dt * spd;
      // mild outward drift
      pos[i * 3] *= 1 + 0.08 * dt;
      pos[i * 3 + 2] *= 1 + 0.08 * dt;
      if (pos[i * 3 + 1] > rise * (0.85 + boost * 0.2)) reset(i, false);
    }
    geo.attributes.position.needsUpdate = true;
  }

  function dispose() {
    geo.dispose();
    mat.dispose();
  }

  return { root, update, setBoost, dispose };
}

/**
 * Subtle cold-jacket emissive breathe (diaz teaching cue).
 */
export function createJacketPulse(mesh, THREE, { color = '#6ec8ff', softGL = false } = {}) {
  if (!mesh?.material) {
    return { update() {}, setBoost() {}, dispose() {} };
  }
  const mat = mesh.material;
  const base = mat.emissiveIntensity ?? 0.18;
  let boost = 1;
  function setBoost(mul) { boost = Math.max(0.3, Number(mul) || 1); }
  function update(elapsed) {
    const t = elapsed ?? 0;
    const wave = 0.5 + 0.5 * Math.sin(t * (softGL ? 1.4 : 2.0));
    mat.emissiveIntensity = base * (0.75 + 0.55 * wave * boost);
    if (mat.emissive) mat.emissive.set(color);
  }
  return { update, setBoost, dispose() {} };
}
