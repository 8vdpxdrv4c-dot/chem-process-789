/**
 * SoftGL-safe flare flame — adapted from three-js demos/effects/particles-fire.js
 * Fewer particles + shorter FBM loop for SwiftShader; additive Points + tip glow.
 */
import * as THREE from 'three';

const FireShader = {
  uniforms: {
    uTime: { value: 0 },
    uIntensity: { value: 1.0 },
    uTurbulence: { value: 0.7 },
  },
  vertexShader: /* glsl */`
    attribute float aSize;
    attribute float aAge;
    attribute float aSeed;
    varying float vAge;
    varying float vSeed;
    uniform float uTime;
    uniform float uTurbulence;

    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p);
      f = f*f*(3.0-2.0*f);
      float n = i.x + i.y*57.0;
      return mix(mix(hash(n), hash(n+1.0), f.x), mix(hash(n+57.0), hash(n+58.0), f.x), f.y);
    }

    void main() {
      vAge = aAge;
      vSeed = aSeed;
      vec3 pos = position;
      float t = uTime * 1.35 + aSeed * 10.0;
      float wob = (noise(vec2(pos.y * 2.0 + t, aSeed * 5.0)) - 0.5) * uTurbulence * 0.4;
      pos.x += wob;
      pos.z += (noise(vec2(aSeed * 3.0, pos.y * 2.0 + t * 0.8)) - 0.5) * uTurbulence * 0.4;
      vec4 mv = modelViewMatrix * vec4(pos, 1.0);
      float grow = mix(1.25, 0.35, aAge);
      gl_PointSize = aSize * grow * (180.0 / max(-mv.z, 0.5));
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */`
    uniform float uTime;
    uniform float uIntensity;
    varying float vAge;
    varying float vSeed;

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
        p = p * 2.15 + vec2(1.7, 9.2);
        a *= 0.5;
      }
      return v;
    }
    vec3 fireRamp(float t) {
      vec3 c0 = vec3(1.0, 0.98, 0.92);
      vec3 c1 = vec3(1.0, 0.85, 0.25);
      vec3 c2 = vec3(1.0, 0.40, 0.05);
      vec3 c3 = vec3(0.55, 0.08, 0.02);
      vec3 c4 = vec3(0.08, 0.02, 0.01);
      if (t < 0.2) return mix(c0, c1, t / 0.2);
      if (t < 0.45) return mix(c1, c2, (t - 0.2) / 0.25);
      if (t < 0.7) return mix(c2, c3, (t - 0.45) / 0.25);
      return mix(c3, c4, (t - 0.7) / 0.3);
    }
    void main() {
      vec2 uv = gl_PointCoord;
      vec2 c = uv - 0.5;
      float dist = length(c);
      if (dist > 0.5) discard;
      float t = uTime * 2.0 + vSeed * 12.0;
      vec2 q = uv * vec2(2.0, 3.0);
      q.y += t * 0.55;
      vec2 warp = vec2(fbm(q + vSeed), fbm(q.yx + 4.1 + t * 0.2));
      float n = fbm(q + warp * 1.0);
      n = pow(n, 1.1);
      float soft = 1.0 - smoothstep(0.12, 0.5, dist);
      float flame = soft * n * smoothstep(1.05, 0.25, vAge);
      if (flame < 0.02) discard;
      vec3 col = fireRamp(vAge * 0.85 + (1.0 - n) * 0.25);
      col *= (1.3 + uIntensity * 1.1) * flame;
      float alpha = clamp(flame * (0.85 + uIntensity * 0.3), 0.0, 1.0);
      gl_FragColor = vec4(col, alpha);
    }
  `,
};

/**
 * @param {typeof THREE} THREE
 * @param {{
 *   position?: THREE.Vector3|{x:number,y:number,z:number},
 *   intensity?: number,
 *   softGL?: boolean,
 *   sizeMode?: 'small'|'mid'|'large',
 *   name?: string,
 * }} opts
 */
export function createFlareFlame(THREE, opts = {}) {
  const {
    position = { x: 0, y: 0, z: 0 },
    intensity = 1.0,
    softGL = false,
    sizeMode = softGL ? 'small' : 'mid',
    name = 'flareFlame',
  } = opts;

  const MODE = {
    small: { count: softGL ? 110 : 160, radius: 0.85, height: 3.2, size: softGL ? 36 : 22 },
    mid: { count: softGL ? 170 : 280, radius: 1.15, height: 4.2, size: softGL ? 42 : 26 },
    large: { count: softGL ? 220 : 420, radius: 1.5, height: 5.2, size: softGL ? 48 : 30 },
  };
  const cfg = MODE[sizeMode] || MODE.mid;

  const root = new THREE.Group();
  root.name = name;
  root.position.set(position.x, position.y, position.z);

  const n = cfg.count;
  const pos = new Float32Array(n * 3);
  const sizes = new Float32Array(n);
  const ages = new Float32Array(n);
  const seeds = new Float32Array(n);
  const vel = new Float32Array(n * 3);
  const age = new Float32Array(n);
  const maxAge = new Float32Array(n);

  function reset(i, randomAge) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * cfg.radius * (0.25 + Math.random() * 0.75);
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = randomAge ? Math.random() * cfg.height : 0.05;
    pos[i * 3 + 2] = Math.sin(a) * r;
    vel[i * 3] = (Math.random() - 0.5) * 0.55;
    vel[i * 3 + 1] = 1.6 + Math.random() * 2.2;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.55;
    maxAge[i] = 0.5 + Math.random() * 0.7;
    age[i] = randomAge ? Math.random() * maxAge[i] : 0;
    ages[i] = age[i] / maxAge[i];
  }

  for (let i = 0; i < n; i++) {
    seeds[i] = Math.random();
    sizes[i] = cfg.size * (0.7 + Math.random() * 0.7);
    reset(i, true);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geo.setAttribute('aAge', new THREE.BufferAttribute(ages, 1));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

  const uniforms = THREE.UniformsUtils.clone(FireShader.uniforms);
  uniforms.uIntensity.value = intensity;

  const firePts = new THREE.Points(
    geo,
    new THREE.ShaderMaterial({
      uniforms,
      vertexShader: FireShader.vertexShader,
      fragmentShader: FireShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  firePts.frustumCulled = false;
  root.add(firePts);

  // Soft ember Points (no extra shader)
  const en = softGL ? 18 : 36;
  const ep = new Float32Array(en * 3);
  const evel = new Float32Array(en * 3);
  for (let i = 0; i < en; i++) {
    ep[i * 3] = (Math.random() - 0.5) * cfg.radius;
    ep[i * 3 + 1] = Math.random() * cfg.height;
    ep[i * 3 + 2] = (Math.random() - 0.5) * cfg.radius;
    evel[i * 3] = (Math.random() - 0.5) * 0.5;
    evel[i * 3 + 1] = 1.0 + Math.random() * 2.0;
    evel[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
  }
  const egeo = new THREE.BufferGeometry();
  egeo.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  const emberPts = new THREE.Points(
    egeo,
    new THREE.PointsMaterial({
      color: 0xffaa44,
      size: softGL ? 0.22 : 0.12,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    }),
  );
  emberPts.frustumCulled = false;
  root.add(emberPts);

  const glow = new THREE.PointLight(0xff5520, 2.2 * intensity, softGL ? 28 : 40);
  glow.position.set(0, 0.6, 0);
  glow.name = 'flareGlow';
  root.add(glow);

  let baseIntensity = intensity;
  let boost = 1;

  function setBoost(mul) {
    boost = Math.max(0.2, Number(mul) || 1);
  }

  function update(dt, elapsed) {
    if (!root.visible) return;
    const inten = baseIntensity * boost;
    uniforms.uTime.value = elapsed ?? 0;
    uniforms.uIntensity.value = inten;
    uniforms.uTurbulence.value = 0.55 + boost * 0.25;

    for (let i = 0; i < n; i++) {
      age[i] += dt;
      pos[i * 3] += vel[i * 3] * dt;
      pos[i * 3 + 1] += vel[i * 3 + 1] * dt * (0.85 + boost * 0.25);
      pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      vel[i * 3] += (Math.random() - 0.5) * dt * 1.2;
      vel[i * 3 + 2] += (Math.random() - 0.5) * dt * 1.2;
      ages[i] = age[i] / maxAge[i];
      if (age[i] >= maxAge[i] || pos[i * 3 + 1] > cfg.height * 1.2) reset(i, false);
    }
    firePts.geometry.attributes.position.needsUpdate = true;
    firePts.geometry.attributes.aAge.needsUpdate = true;

    for (let i = 0; i < en; i++) {
      ep[i * 3] += evel[i * 3] * dt;
      ep[i * 3 + 1] += evel[i * 3 + 1] * dt;
      ep[i * 3 + 2] += evel[i * 3 + 2] * dt;
      evel[i * 3 + 1] -= 0.7 * dt;
      if (ep[i * 3 + 1] > cfg.height * 1.5 || ep[i * 3 + 1] < 0) {
        ep[i * 3] = (Math.random() - 0.5) * cfg.radius;
        ep[i * 3 + 1] = 0.2;
        ep[i * 3 + 2] = (Math.random() - 0.5) * cfg.radius;
        evel[i * 3 + 1] = 1.0 + Math.random() * 2.0;
      }
    }
    emberPts.geometry.attributes.position.needsUpdate = true;

    const flick = Math.sin((elapsed ?? 0) * 11) * 0.22 + Math.sin((elapsed ?? 0) * 23.7) * 0.1;
    glow.intensity = (1.8 + flick) * inten;
  }

  function dispose() {
    root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  }

  return { root, update, setBoost, dispose };
}
