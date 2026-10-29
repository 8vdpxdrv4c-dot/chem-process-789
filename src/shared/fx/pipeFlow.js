/**
 * SoftGL-safe pipe flow — silver metal shell + thin ID rings + beads.
 * Teaching 示意: fluid hue on bands & beads only (not full-tube neon paint).
 * Per 化学课件老师定稿 · M9 pipe-color realism.
 */
import * as THREE from 'three';

const SILVER = 0xc0c8d0;

/**
 * Silver shell with mild scrolling flow cue (tint ≤ ~22% fluid color).
 * Near-zero emissive — kill neon full-tube paint.
 */
const ShellFlowShader = {
  uniforms: {
    uTime: { value: 0 },
    uSpeed: { value: 1.2 },
    uColor: { value: new THREE.Color(0x2a9fff) },
    uEmissive: { value: new THREE.Color(0x000000) },
    uOpacity: { value: 1.0 },
    uEnergy: { value: 0.08 },
    uValve: { value: 1.0 },
    uSilver: { value: new THREE.Color(SILVER) },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vView;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vNormal = normalize(mat3(modelMatrix) * normal);
      vView = cameraPosition - wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,
  fragmentShader: /* glsl */`
    uniform float uTime;
    uniform float uSpeed;
    uniform vec3 uColor;
    uniform vec3 uEmissive;
    uniform float uOpacity;
    uniform float uEnergy;
    uniform float uValve;
    uniform vec3 uSilver;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vView;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x),
                 mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
    }
    float fbm(vec2 p) {
      float v = 0.0; float a = 0.5;
      for (int i = 0; i < 3; i++) {
        v += a * noise(p);
        p *= 2.11;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      float spd = uSpeed * max(0.04, uValve);
      vec2 uv = vUv * vec2(5.0, 1.3);
      uv.x -= uTime * spd * 1.05;
      float n = fbm(uv);
      float bands = smoothstep(0.42, 0.82, n);

      vec3 N = normalize(vNormal);
      vec3 V = normalize(vView);
      float fres = pow(1.0 - max(dot(N, V), 0.0), 2.4);

      // Body stays silver; flow cue = faint fluid tint on scrolling bands only
      float tintAmt = (0.06 + bands * 0.16) * mix(0.55, 1.0, uValve);
      vec3 col = mix(uSilver, uColor, tintAmt);
      // metal-ish shading without neon emissive
      col *= 0.78 + fres * 0.28;
      col += uEmissive * uEnergy * bands * 0.15;

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

function mediumLook(colorHex, medium = 'liquid') {
  const color = new THREE.Color(colorHex);
  // Near-zero emissive — kill neon pipe glow (定稿)
  const emissive = new THREE.Color(0x000000);
  if (medium === 'gas') {
    return { color, emissive, opacity: 1, energy: 0.1 };
  }
  if (medium === 'steam') {
    return { color, emissive, opacity: 1, energy: 0.08 };
  }
  return { color, emissive, opacity: 1, energy: 0.08 };
}

function fluidBandMat(THREE, colorHex) {
  return new THREE.MeshStandardMaterial({
    color: colorHex,
    metalness: 0.48,
    roughness: 0.4,
    envMapIntensity: 0.95,
    emissive: 0x000000,
    emissiveIntensity: 0,
  });
}

/**
 * Short ID rings along curve (GB-style colour bands on silver pipe).
 */
function addIdBands(THREE, root, curve, radius, colorHex, softGL) {
  const mat = fluidBandMat(THREE, colorHex);
  const bandH = softGL ? 0.62 : 0.48;
  const bandR = radius * 1.14;
  const ts = [0.18, 0.5, 0.82];
  const _p = new THREE.Vector3();
  const _t = new THREE.Vector3();
  const _q = new THREE.Quaternion();
  const _up = new THREE.Vector3(0, 1, 0);
  for (const t of ts) {
    curve.getPointAt(t, _p);
    curve.getTangentAt(t, _t).normalize();
    const geo = new THREE.CylinderGeometry(bandR, bandR, bandH, softGL ? 10 : 14);
    const mesh = new THREE.Mesh(geo, mat);
    _q.setFromUnitVectors(_up, _t);
    mesh.quaternion.copy(_q);
    mesh.position.copy(_p);
    mesh.castShadow = true;
    mesh.frustumCulled = false;
    root.add(mesh);
  }
}

/**
 * @param {typeof THREE} THREE
 * @param {{
 *   points: THREE.Vector3[],
 *   color: string|number,
 *   radius?: number,
 *   speed?: number,
 *   particleCount?: number,
 *   medium?: 'liquid'|'gas'|'steam',
 *   name?: string,
 *   softGL?: boolean,
 * }} opts
 */
export function createFlowLine(THREE, opts) {
  const {
    points,
    color,
    radius = 0.28,
    speed = 1.15,
    particleCount = 36,
    medium = 'liquid',
    name = 'flowLine',
    softGL = false,
  } = opts;

  const root = new THREE.Group();
  root.name = name;

  const curve = new THREE.CatmullRomCurve3(
    points.map((p) => (p.isVector3 ? p.clone() : new THREE.Vector3(...p))),
    false,
    'catmullrom',
    0.35,
  );
  const tubular = softGL ? 36 : 72;
  const radial = softGL ? 8 : 12;
  // SoftGL overview: slightly fatter tubes so silver + bands read at plant scale
  const rEff = softGL ? radius * 1.55 : radius;
  const look = mediumLook(color, medium);

  // Outer / main tube = silver metal (shader keeps body silver, faint flow cue)
  const shellGeo = new THREE.TubeGeometry(curve, tubular, rEff, radial, false);
  const uniforms = THREE.UniformsUtils.clone(ShellFlowShader.uniforms);
  uniforms.uColor.value = look.color.clone();
  uniforms.uEmissive.value = look.emissive.clone();
  uniforms.uOpacity.value = look.opacity;
  uniforms.uEnergy.value = look.energy;
  uniforms.uSpeed.value = speed;
  uniforms.uValve.value = 1;
  uniforms.uSilver.value = new THREE.Color(SILVER);

  const shellMat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: ShellFlowShader.vertexShader,
    fragmentShader: ShellFlowShader.fragmentShader,
    transparent: false,
    depthWrite: true,
    side: THREE.FrontSide,
    blending: THREE.NormalBlending,
  });
  const shell = new THREE.Mesh(shellGeo, shellMat);
  shell.frustumCulled = false;
  shell.castShadow = true;
  root.add(shell);

  // Thin ID rings on the silver shell (primary fluid identity)
  addIdBands(THREE, root, curve, rEff, color, softGL);

  // Beads along curve (motion cue, fluid colour)
  const n = Math.max(12, softGL ? Math.min(28, particleCount) : particleCount);
  const pos = new Float32Array(n * 3);
  const progresses = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    progresses[i] = i / n;
    pos[i * 3 + 1] = -20;
  }
  const pgeo = new THREE.BufferGeometry();
  pgeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const beads = new THREE.Points(
    pgeo,
    new THREE.PointsMaterial({
      color: look.color,
      size: softGL ? 0.95 : 0.42,
      transparent: false,
      opacity: 1,
      depthWrite: true,
      blending: THREE.NormalBlending,
      sizeAttenuation: true,
    }),
  );
  beads.frustumCulled = false;
  root.add(beads);

  let baseSpeed = speed;
  let boost = 1;
  let valve = 0.7;
  const _p = new THREE.Vector3();

  function setBoost(mul) {
    boost = Math.max(0.15, Number(mul) || 1);
  }
  function setValve(v) {
    valve = THREE.MathUtils.clamp(v, 0.05, 1);
  }
  function setVisible(v) {
    root.visible = !!v;
  }

  function update(dt, elapsed) {
    if (!root.visible) return;
    const t = elapsed ?? 0;
    const spd = baseSpeed * boost;
    uniforms.uTime.value = t;
    uniforms.uSpeed.value = spd;
    uniforms.uValve.value = valve;
    const effective = spd * Math.max(0.08, valve);
    const arr = beads.geometry.attributes.position.array;
    for (let i = 0; i < n; i++) {
      progresses[i] += dt * effective * 0.08;
      progresses[i] -= Math.floor(progresses[i]);
      if (progresses[i] < 0) progresses[i] += 1;
      const u = Math.min(0.999999, Math.max(0, progresses[i]));
      curve.getPointAt(u, _p);
      arr[i * 3] = _p.x;
      arr[i * 3 + 1] = _p.y;
      arr[i * 3 + 2] = _p.z;
    }
    beads.geometry.attributes.position.needsUpdate = true;
  }

  function dispose() {
    root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  }

  return {
    root, curve, update, setBoost, setValve, setVisible, dispose,
    get boost() { return boost; },
    get valve() { return valve; },
  };
}

/**
 * Build several flow lines; returns a group + update/setBoostByTag helpers.
 * @param {Array<{tag:string}&Parameters<typeof createFlowLine>[1]>} specs
 */
export function createFlowNetwork(THREE, specs, softGL = false) {
  const root = new THREE.Group();
  root.name = 'flowNetwork';
  const lines = [];
  for (const s of specs) {
    const line = createFlowLine(THREE, { ...s, softGL });
    line.tag = s.tag || s.name || 'flow';
    root.add(line.root);
    lines.push(line);
  }

  function update(dt, elapsed) {
    for (const l of lines) l.update(dt, elapsed);
  }

  function applyStepBoost(activeTags = [], { idle = 0.7, active = 1.0, playing = false } = {}) {
    const set = new Set(activeTags);
    const idleV = playing ? Math.max(idle, 0.7) : idle;
    for (const l of lines) {
      const on = set.size === 0 || set.has(l.tag);
      l.setValve(on ? (set.size === 0 ? idleV : active) : idleV * 0.55);
      l.setBoost(on && set.size ? (playing ? 1.35 : 1.1) : playing ? 0.9 : 0.7);
    }
  }

  function dispose() {
    lines.forEach((l) => l.dispose());
  }

  return { root, lines, update, applyStepBoost, dispose };
}
