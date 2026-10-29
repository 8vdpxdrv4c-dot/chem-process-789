/**
 * Shared cinematic environment helpers.
 * Zipper-style PMREM IBL + cooler night fog (ref: How a Zipper Works).
 */
import * as THREE from 'three';

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

/** Equirect dusk sky (optional background / legacy). Kept for refs. */
export function skyTex() {
  return canvasTex(2048, 1024, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#06102a');
    gr.addColorStop(0.22, '#0f2250');
    gr.addColorStop(0.34, '#1c3a72');
    gr.addColorStop(0.43, '#2e5288');
    gr.addColorStop(0.47, '#3f6294');
    gr.addColorStop(0.488, '#5e7aa2');
    gr.addColorStop(0.496, '#8c94aa');
    gr.addColorStop(0.5, '#e0a27c');
    gr.addColorStop(0.506, '#2a3856');
    gr.addColorStop(1, '#0c1220');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    const wg = g.createRadialGradient(w * 0.18, h * 0.5, 0, w * 0.18, h * 0.5, w * 0.22);
    wg.addColorStop(0, 'rgba(255,150,90,.42)');
    wg.addColorStop(1, 'rgba(255,150,90,0)');
    g.fillStyle = wg;
    g.fillRect(0, h * 0.482, w, h * 0.03);
    for (let i = 0; i < 1400; i++) {
      const y = Math.pow(Math.random(), 1.6) * h * 0.44;
      const a = Math.random() * 0.7 * (1 - y / (h * 0.46));
      g.fillStyle = `rgba(220,230,255,${a})`;
      const s = Math.random() < 0.05 ? 2 : 1;
      g.fillRect(Math.random() * w, y, s, s);
    }
  });
}

export function concreteTex() {
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#8e9298';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) {
      const v = (100 + Math.random() * 60) | 0;
      g.fillStyle = `rgba(${v},${v},${v + 4},.25)`;
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
    for (let i = 0; i < 30; i++) {
      g.fillStyle = `rgba(30,30,35,${Math.random() * 0.12})`;
      g.beginPath();
      g.arc(Math.random() * w, Math.random() * h, 20 + Math.random() * 60, 0, 7);
      g.fill();
    }
    g.strokeStyle = 'rgba(30,30,30,.35)';
    g.lineWidth = 2;
    for (let x = 0; x <= w; x += 128) {
      g.beginPath();
      g.moveTo(x, 0);
      g.lineTo(x, h);
      g.stroke();
      g.beginPath();
      g.moveTo(0, x);
      g.lineTo(w, x);
      g.stroke();
    }
  });
}

export function asphaltTex() {
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#343840';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 14000; i++) {
      const v = (25 + Math.random() * 40) | 0;
      g.fillStyle = `rgba(${v},${v},${v + 3},.5)`;
      g.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    }
    for (let i = 0; i < 20; i++) {
      g.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
      g.beginPath();
      g.ellipse(
        Math.random() * w,
        Math.random() * h,
        40 + Math.random() * 80,
        20 + Math.random() * 40,
        Math.random() * 3,
        0,
        7,
      );
      g.fill();
    }
  });
}

/**
 * Distant cone-geometry mountain silhouettes.
 * Chem plant scale: radius ~350–700 (Haber uses 1400–2100).
 */
export function addMountains(scene, { count = 36, rMin = 350, rMax = 700 } = {}) {
  let seed = 11;
  const rnd = (a = 0, b = 1) => {
    seed = (seed * 16807) % 2147483647;
    return a + (seed / 2147483647) * (b - a);
  };
  const mat = new THREE.MeshStandardMaterial({ color: 0x0b1424, roughness: 1, metalness: 0 });
  const group = new THREE.Group();
  group.name = 'mountains';
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + rnd(-0.05, 0.05);
    const d = rnd(rMin, rMax);
    const hh = rnd(18, 55);
    const r = rnd(80, 180);
    const m = new THREE.Mesh(new THREE.ConeGeometry(r, hh, 7), mat);
    m.position.set(Math.cos(a) * d, hh / 2 - 4, Math.sin(a) * d);
    m.castShadow = false;
    m.receiveShadow = false;
    group.add(m);
  }
  // Distant city lights at mountain base
  const cg = new THREE.SphereGeometry(1, 6, 4);
  const cw = new THREE.MeshBasicMaterial({
    color: new THREE.Color(1, 0.62, 0.3).multiplyScalar(2.5),
    fog: false,
  });
  const cc = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.5, 0.75, 1).multiplyScalar(2.0),
    fog: false,
  });
  for (let i = 0; i < 280; i++) {
    const a = rnd(0, Math.PI * 2);
    const d = rnd(rMin * 0.85, rMax * 0.95);
    const m = new THREE.Mesh(cg, rnd() < 0.7 ? cw : cc);
    const s = rnd(0.4, 1.2);
    m.position.set(Math.cos(a) * d, rnd(0.4, 2.5), Math.sin(a) * d);
    m.scale.set(s, s, s);
    group.add(m);
  }
  scene.add(group);
  return group;
}

const SHOW_FRAG = /* glsl */ `
varying vec3 d;
void main(){
  vec3 c = mix(vec3(.10,.085,.07), vec3(.16,.19,.26), smoothstep(-.4,.1,d.y));
  c = mix(c, vec3(.06,.08,.13), smoothstep(.2,.9,d.y));
  c += vec3(1.4,.8,.42) * smoothstep(.55,.95,d.x) * smoothstep(-.1,.25,d.y) * (1. - smoothstep(.3,.7,d.y));
  gl_FragColor = vec4(c, 1.);
}`;

const STUDIO_FRAG = /* glsl */ `
varying vec3 d;
void main(){
  vec3 c = mix(vec3(.62,.56,.49), vec3(1.02,.97,.9), smoothstep(-.35,.15,d.y));
  c = mix(c, vec3(1.1,1.08,1.04), smoothstep(.4,.95,d.y));
  gl_FragColor = vec4(c, 1.);
}`;

const ENV_VERT = /* glsl */ `
varying vec3 d;
void main(){
  d = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

function envSphere(frag) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(50, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      vertexShader: ENV_VERT,
      fragmentShader: frag,
    }),
  );
}

function addAreaPanel(scene, w, h, rgb, x, y, z) {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, 0.4),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(...rgb) }),
  );
  m.position.set(x, y, z);
  m.lookAt(0, 0, 0);
  scene.add(m);
}

/**
 * Zipper-style procedural PMREM IBL (warm horizon glow + area light panels).
 * Returns { show, studio } CubeUV textures for scene.environment.
 */
export function buildZipperEnvMap(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const out = {};

  {
    const sc = new THREE.Scene();
    sc.add(envSphere(SHOW_FRAG));
    const cols = [
      [5.5, 4.2, 3],
      [1.8, 3.6, 5.2],
      [4.6, 3, 1.5],
      [2.6, 2.9, 3.4],
      [1.5, 4.2, 5.5],
      [3.4, 3.4, 3.4],
    ];
    for (let r = 0; r < 6; r++) {
      const a = (r / 6) * Math.PI * 2 + 0.4;
      addAreaPanel(sc, 12, 2.4, cols[r], Math.sin(a) * 28, 12 + (r % 2) * 9, Math.cos(a) * 28);
    }
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(40, 1.2, 1.2),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 3.4, 1.2) }),
    );
    bar.position.set(0, -6, -30);
    sc.add(bar);
    out.show = pmrem.fromScene(sc, 0.03).texture;
  }

  {
    const sc = new THREE.Scene();
    sc.add(envSphere(STUDIO_FRAG));
    addAreaPanel(sc, 26, 12, [7, 6.8, 6.4], -14, 22, 12);
    addAreaPanel(sc, 18, 9, [4.2, 4.4, 4.8], 24, 12, 6);
    addAreaPanel(sc, 30, 6, [3.2, 3.1, 3], 0, 30, -10);
    addAreaPanel(sc, 8, 20, [5, 4.8, 4.6], -26, 8, -6);
    out.studio = pmrem.fromScene(sc, 0.03).texture;
  }

  pmrem.dispose();
  return out;
}

/**
 * Cinematic look: solid bg + FogExp2 + PMREM IBL on metals.
 * Defaults match envTweak CODE_DEFAULTS (ACESFilmic look-dev bake).
 */
export function applySkyAndFog(
  scene,
  renderer,
  {
    fogDensity = 0.0002,
    fogColor = 0x0029cc,
    background = 0x3254a4,
    envIntensity = 2.5,
    useDuskBackground = false,
  } = {},
) {
  if (useDuskBackground) {
    const sky = skyTex();
    sky.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = sky;
    if ('backgroundIntensity' in scene) scene.backgroundIntensity = 1.0;
  } else {
    scene.background = new THREE.Color(background);
    if ('backgroundIntensity' in scene) scene.backgroundIntensity = 1.0;
  }

  scene.fog = new THREE.FogExp2(fogColor, fogDensity);

  let env = null;
  if (renderer) {
    env = buildZipperEnvMap(renderer);
    scene.environment = env.show;
  }
  if ('environmentIntensity' in scene) scene.environmentIntensity = envIntensity;

  return env;
}
