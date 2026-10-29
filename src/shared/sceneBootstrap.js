import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { PRESET } from './quality.js';
import { applySkyAndFog, addMountains } from './environment.js';

/**
 * 公共 Three 场景：Zipper 夜雾 IBL + 暖主光 / 冷补光（p=7|8|9 共用）。
 */
export function createScene(canvas, { Q = 'high' } = {}) {
  const preset = PRESET[Q] || PRESET.high;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: Q !== 'low',
      powerPreference: 'high-performance',
    });
  } catch (err) {
    console.error(err);
    const boot = document.getElementById('boot');
    if (boot) boot.textContent = 'WebGL 不可用 · 请使用支持的浏览器';
    throw err;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, Q === 'low' ? 1 : 1.75));
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // Look-dev bake: ACESFilmic + exposure 1 (envTweak CODE_DEFAULTS)
  renderer.toneMappingExposure = preset.exposure ?? 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  // PMREM IBL + FogExp2; solid look-dev bg (mountains kept)
  const envMaps = applySkyAndFog(scene, renderer, {
    fogDensity: preset.fog ?? 0.0002,
    fogColor: preset.fogColor ?? 0x0029cc,
    background: preset.background ?? 0x3254a4,
    envIntensity: preset.envIntensity ?? 2.5,
  });
  addMountains(scene, { count: 36, rMin: 350, rMax: 700 });

  // Far plane must reach mountain ring (~700)
  const camera = new THREE.PerspectiveCamera(42, innerWidth / Math.max(1, innerHeight), 0.5, 1800);
  camera.position.set(60, 42, 90);

  const controls = new OrbitControls(camera, canvas);
  Object.assign(controls, {
    enableDamping: true,
    dampingFactor: 0.08,
    minDistance: 12,
    maxDistance: 320,
    minPolarAngle: 0.18,
    maxPolarAngle: 1.35,
    rotateSpeed: 0.55,
    zoomSpeed: 0.85,
  });
  controls.target.set(0, 8, 0);

  // Look-dev light rig (absolute CODE_DEFAULTS; quality muls default 1)
  const sunMul = preset.sunMul ?? 1;
  const fillMul = preset.fillMul ?? 1;
  const rimMul = preset.rimMul ?? 1;

  const hemi = new THREE.HemisphereLight(0xfea62a, 0x0060fa, 4.34 * fillMul);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0x896b2a, 0.86 * sunMul);
  key.position.set(0.5, 16.2, -7.5);
  key.target.position.set(0, 2, 0);
  key.castShadow = true;
  key.shadow.mapSize.set(preset.shadow, preset.shadow);
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 280;
  key.shadow.camera.left = -90;
  key.shadow.camera.right = 90;
  key.shadow.camera.top = 90;
  key.shadow.camera.bottom = -90;
  key.shadow.bias = -0.0003;
  key.shadow.normalBias = 0.08;
  key.shadow.radius = 3;
  scene.add(key);
  scene.add(key.target);

  // Fill
  const fill = new THREE.DirectionalLight(0x9b9469, 0.75 * fillMul);
  fill.position.set(6.8, 10, 12.9);
  scene.add(fill);

  // Rim
  const rim = new THREE.DirectionalLight(0xfef6f6, 0.91 * rimMul);
  rim.position.set(-10.6, 23.7, 10);
  scene.add(rim);

  // Plant area lights (cyan look-dev)
  const plantA = new THREE.PointLight(0x00fbff, 1.44, 110, 2);
  plantA.position.set(8, 18, 6);
  scene.add(plantA);
  const plantB = new THREE.PointLight(0x00fbff, 0.61, 100, 2);
  plantB.position.set(-18, 14, -10);
  scene.add(plantB);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(innerWidth, innerHeight),
    preset.bloom,
    preset.bloomRadius ?? 1.5,
    preset.bloomThreshold ?? 1.58,
  );
  bloom.enabled = preset.bloom > 0;
  composer.addPass(bloom);

  // BokehPass under SwiftShader/llvmpipe massively darkens the frame —
  // keep the pass API, but clamp blur so plant metal stays readable in CI/screenshots.
  let gpuRenderer = '';
  try {
    const gl = renderer.getContext();
    const dbg = gl?.getExtension?.('WEBGL_debug_renderer_info');
    if (dbg) gpuRenderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || '';
  } catch (_) { /* ignore */ }
  const softGL = /SwiftShader|llvmpipe|Software/i.test(gpuRenderer);

  let bokeh = null;
  if (preset.dof) {
    bokeh = new BokehPass(scene, camera, {
      focus: preset.focus ?? 37,
      aperture: preset.aperture,
      maxblur: preset.maxblur,
    });
    // Soft GL: BokehPass darkens the whole frame even at tiny maxblur — keep
    // the pass object for setFocus, but disable compositing so metal stays lit.
    if (softGL) bokeh.enabled = false;
    composer.addPass(bokeh);
  }

  // Tone mapping + sRGB must run AFTER bloom/bokeh (HDR). Without OutputPass,
  // renderer.toneMapping / toneMappingExposure have no effect on the composer path
  // (RT renders force NoToneMapping; final blit never re-applies AgX/ACES/etc.).
  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  // DOF apertures 0 = effectively off blur; keep flag/pass for teaching toggle
  const DOF_MODES = {
    overview: {
      aperture: preset.aperture ?? 0,
      maxblur: preset.maxblur ?? 0,
    },
    close: {
      aperture: preset.apertureClose ?? 0,
      maxblur: preset.maxblurClose ?? 0,
    },
  };
  let dofMode = 'overview';

  const _focusWorld = new THREE.Vector3();
  /**
   * Update focus distance; optional aperture/maxblur override.
   * @param {THREE.Vector3} worldPoint
   * @param {{ aperture?: number, maxblur?: number }} [opts]
   */
  function setFocus(worldPoint, opts = {}) {
    if (!bokeh) return;
    _focusWorld.copy(worldPoint || controls.target);
    camera.updateMatrixWorld();
    const viewZ = -_focusWorld.clone().applyMatrix4(camera.matrixWorldInverse).z;
    bokeh.uniforms.focus.value = Math.max(1, viewZ);
    if (opts.aperture != null) bokeh.uniforms.aperture.value = opts.aperture;
    if (opts.maxblur != null) bokeh.uniforms.maxblur.value = opts.maxblur;
  }

  /** @param {'overview'|'close'} mode */
  function setDofMode(mode) {
    const key = mode === 'close' ? 'close' : 'overview';
    dofMode = key;
    if (!bokeh) return;
    const m = DOF_MODES[key];
    bokeh.uniforms.aperture.value = m.aperture;
    bokeh.uniforms.maxblur.value = m.maxblur;
  }

  function getDofMode() {
    return dofMode;
  }

  function setSize(w, h) {
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.setSize(w, h);
  }

  function render() {
    setFocus(controls.target);
    composer.render();
  }

  return {
    THREE,
    scene,
    camera,
    controls,
    renderer,
    composer,
    bloom,
    bokeh,
    outputPass,
    hemi,
    key,
    fill,
    rim,
    plantA,
    plantB,
    softGL,
    envMaps,
    preset,
    setSize,
    setFocus,
    setDofMode,
    getDofMode,
    DOF_MODES,
    render,
    Q,
  };
}
