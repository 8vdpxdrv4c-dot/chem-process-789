/**
 * Live environment tweak panel — teaching / look-dev utility.
 * Exposes Zipper lighting, fog, IBL, bloom, DOF, ground, street lamps.
 * Persist: localStorage `chem789-env-tweak`
 */
import * as THREE from 'three';
import { refreshDeviceEnvMaps } from './devices.js';

export const LS_KEY = 'chem789-env-tweak';

const TONE_MAP = {
  None: THREE.NoToneMapping,
  Linear: THREE.LinearToneMapping,
  Reinhard: THREE.ReinhardToneMapping,
  Cineon: THREE.CineonToneMapping,
  ACESFilmic: THREE.ACESFilmicToneMapping,
  AgX: THREE.AgXToneMapping,
  Neutral: THREE.NeutralToneMapping,
};
const TONE_MAP_INV = new Map(Object.entries(TONE_MAP).map(([k, v]) => [v, k]));

function hexFromColor(c) {
  if (!c) return '#000000';
  return `#${c.getHexString()}`;
}

function setColor(obj, hex) {
  if (!obj || hex == null) return;
  try {
    obj.set(hex);
  } catch (_) { /* ignore bad hex */ }
}

/** Absolute boot defaults (fresh load + Reset). SoftGL still forces bokeh off at panel boot. */
export const CODE_DEFAULTS = Object.freeze({
  exposure: 0.47,
  toneMapping: 'ACESFilmic',
  background: '#6a8dd2',
  fogColor: '#20245b',
  fogDensity: 0.002,
  envIntensity: 2.5,
  envMapEnabled: true,

  hemiSky: '#fea62a',
  hemiGround: '#0060fa',
  hemiIntensity: 3,

  keyColor: '#fece67',
  keyIntensity: 3.16,
  keyPosX: -7.3,
  keyPosY: 32.1,
  keyPosZ: -6.4,

  fillColor: '#8fc0ff',
  fillIntensity: 3.08,
  fillPosX: 6.8,
  fillPosY: 10,
  fillPosZ: 12.9,

  rimColor: '#fef6f6',
  rimIntensity: 0.55,
  rimPosX: 0,
  rimPosY: 23.7,
  rimPosZ: 10,

  plantColor: '#fe7606',
  plantAIntensity: 4,
  plantBIntensity: 1.87,

  bloomEnabled: true,
  bloomStrength: 0.36,
  bloomRadius: 1.5,
  bloomThreshold: 1.58,

  dofEnabled: true,
  dofApertureOverview: 0,
  dofMaxblurOverview: 0,
  dofApertureClose: 0,
  dofMaxblurClose: 0,
  dofFocus: 233,

  groundOuter: '#342704',
  groundOuterRough: 1,
  groundPad: '#8f8f8f',
  groundPadRough: 1,
  groundPadEmissive: '#1a1e24',
  groundPadEmissiveIntensity: 0.43,
  groundAsphalt: '#3a3e45',
  groundAsphaltRough: 0.36,
  groundUnit: '#9aa2aa',
  groundUnitRough: 0.8,
  groundUnitEmissive: '#22262c',
  groundUnitEmissiveIntensity: 1.4,
  curbColor: '#9aa0a8',
  curbRough: 1,
  curbEmissive: '#1c2026',
  curbEmissiveIntensity: 0.88,

  streetLampIntensity: 6,
  streetLampColor: '#ffd8b0',
  streetHeadEmissive: '#ffd2a0',
  streetHeadEmissiveIntensity: 5,
  streetPoolOpacity: 1,
});

export function collectEnvHandles(S) {
  const ground = S.scene?.getObjectByName?.('ground');
  const street = S.scene?.getObjectByName?.('streetLights');
  return {
    renderer: S.renderer,
    scene: S.scene,
    hemi: S.hemi,
    key: S.key,
    fill: S.fill,
    rim: S.rim,
    plantA: S.plantA,
    plantB: S.plantB,
    bloom: S.bloom,
    bokeh: S.bokeh,
    softGL: S.softGL,
    setDofMode: S.setDofMode,
    getDofMode: S.getDofMode,
    DOF_MODES: S.DOF_MODES,
    envMaps: S.envMaps,
    ground: ground?.userData?.env || null,
    street: street?.userData?.env || ground?.userData?.env?.street || null,
  };
}

/** Snapshot live Three.js state → plain params object. */
export function snapshotParams(H) {
  const p = { ...CODE_DEFAULTS };
  const r = H.renderer;
  const sc = H.scene;
  if (r) {
    p.exposure = r.toneMappingExposure;
    p.toneMapping = TONE_MAP_INV.get(r.toneMapping) || 'ACESFilmic';
  }
  if (sc?.background?.isColor) p.background = hexFromColor(sc.background);
  if (sc?.fog) {
    p.fogColor = hexFromColor(sc.fog.color);
    p.fogDensity = sc.fog.density ?? p.fogDensity;
  }
  if ('environmentIntensity' in (sc || {})) p.envIntensity = sc.environmentIntensity;
  p.envMapEnabled = !!sc?.environment;

  if (H.hemi) {
    p.hemiSky = hexFromColor(H.hemi.color);
    p.hemiGround = hexFromColor(H.hemi.groundColor);
    p.hemiIntensity = H.hemi.intensity;
  }
  if (H.key) {
    p.keyColor = hexFromColor(H.key.color);
    p.keyIntensity = H.key.intensity;
    p.keyPosX = +H.key.position.x.toFixed(2);
    p.keyPosY = +H.key.position.y.toFixed(2);
    p.keyPosZ = +H.key.position.z.toFixed(2);
  }
  if (H.fill) {
    p.fillColor = hexFromColor(H.fill.color);
    p.fillIntensity = H.fill.intensity;
    p.fillPosX = +H.fill.position.x.toFixed(2);
    p.fillPosY = +H.fill.position.y.toFixed(2);
    p.fillPosZ = +H.fill.position.z.toFixed(2);
  }
  if (H.rim) {
    p.rimColor = hexFromColor(H.rim.color);
    p.rimIntensity = H.rim.intensity;
    p.rimPosX = +H.rim.position.x.toFixed(2);
    p.rimPosY = +H.rim.position.y.toFixed(2);
    p.rimPosZ = +H.rim.position.z.toFixed(2);
  }
  if (H.plantA) {
    p.plantColor = hexFromColor(H.plantA.color);
    p.plantAIntensity = H.plantA.intensity;
  }
  if (H.plantB) p.plantBIntensity = H.plantB.intensity;

  if (H.bloom) {
    p.bloomEnabled = !!H.bloom.enabled;
    p.bloomStrength = H.bloom.strength;
    p.bloomRadius = H.bloom.radius;
    p.bloomThreshold = H.bloom.threshold;
  }
  if (H.bokeh) {
    p.dofEnabled = !!H.bokeh.enabled;
    p.dofFocus = H.bokeh.uniforms?.focus?.value ?? p.dofFocus;
  }
  if (H.DOF_MODES) {
    p.dofApertureOverview = H.DOF_MODES.overview?.aperture ?? p.dofApertureOverview;
    p.dofMaxblurOverview = H.DOF_MODES.overview?.maxblur ?? p.dofMaxblurOverview;
    p.dofApertureClose = H.DOF_MODES.close?.aperture ?? p.dofApertureClose;
    p.dofMaxblurClose = H.DOF_MODES.close?.maxblur ?? p.dofMaxblurClose;
  }

  const g = H.ground;
  if (g?.outerMat) {
    p.groundOuter = hexFromColor(g.outerMat.color);
    p.groundOuterRough = g.outerMat.roughness;
  }
  if (g?.padMat) {
    p.groundPad = hexFromColor(g.padMat.color);
    p.groundPadRough = g.padMat.roughness;
    p.groundPadEmissive = hexFromColor(g.padMat.emissive);
    p.groundPadEmissiveIntensity = g.padMat.emissiveIntensity;
  }
  if (g?.asphaltMats?.[0]) {
    p.groundAsphalt = hexFromColor(g.asphaltMats[0].color);
    p.groundAsphaltRough = g.asphaltMats[0].roughness;
  }
  if (g?.unitMat) {
    p.groundUnit = hexFromColor(g.unitMat.color);
    p.groundUnitRough = g.unitMat.roughness;
    p.groundUnitEmissive = hexFromColor(g.unitMat.emissive);
    p.groundUnitEmissiveIntensity = g.unitMat.emissiveIntensity;
  }
  if (g?.curbMat) {
    p.curbColor = hexFromColor(g.curbMat.color);
    p.curbRough = g.curbMat.roughness;
    p.curbEmissive = hexFromColor(g.curbMat.emissive);
    p.curbEmissiveIntensity = g.curbMat.emissiveIntensity;
  }

  const st = H.street || g?.street;
  if (st?.lights?.[0]) {
    p.streetLampIntensity = st.lights[0].intensity;
    p.streetLampColor = hexFromColor(st.lights[0].color);
  }
  if (st?.headMat) {
    p.streetHeadEmissive = hexFromColor(st.headMat.emissive);
    p.streetHeadEmissiveIntensity = st.headMat.emissiveIntensity;
  }
  if (st?.poolMat && 'opacity' in st.poolMat) {
    p.streetPoolOpacity = st.poolMat.opacity;
  }
  return p;
}

/** Apply plain params to live Three.js handles. */
export function applyEnvParams(H, params, { skipPersist } = {}) {
  const p = { ...CODE_DEFAULTS, ...params };
  const r = H.renderer;
  const sc = H.scene;

  if (r) {
    r.toneMappingExposure = +p.exposure;
    if (TONE_MAP[p.toneMapping] != null) r.toneMapping = TONE_MAP[p.toneMapping];
  }
  if (sc) {
    if (sc.background?.isColor) setColor(sc.background, p.background);
    else sc.background = new THREE.Color(p.background);
    if (sc.fog) {
      setColor(sc.fog.color, p.fogColor);
      sc.fog.density = +p.fogDensity;
    }
    if ('environmentIntensity' in sc) sc.environmentIntensity = +p.envIntensity;
    if (p.envMapEnabled) {
      if (H.envMaps?.show) sc.environment = H.envMaps.show;
      else if (!sc.environment && H.envMaps?.studio) sc.environment = H.envMaps.studio;
    } else {
      sc.environment = null;
    }
    // Explicit material.envMap bypasses scene.environmentIntensity — bake intensity
    // into envMapIntensity so IBL still reads at envIntensity (stainless reflections).
    try {
      refreshDeviceEnvMaps(sc, sc, {
        intensityScale: p.envMapEnabled ? +p.envIntensity : 0,
        enabled: !!p.envMapEnabled,
      });
    } catch (_) { /* materials may not be ready */ }
  }

  if (H.hemi) {
    setColor(H.hemi.color, p.hemiSky);
    setColor(H.hemi.groundColor, p.hemiGround);
    H.hemi.intensity = +p.hemiIntensity;
  }
  if (H.key) {
    setColor(H.key.color, p.keyColor);
    H.key.intensity = +p.keyIntensity;
    H.key.position.set(+p.keyPosX, +p.keyPosY, +p.keyPosZ);
  }
  if (H.fill) {
    setColor(H.fill.color, p.fillColor);
    H.fill.intensity = +p.fillIntensity;
    H.fill.position.set(+p.fillPosX, +p.fillPosY, +p.fillPosZ);
  }
  if (H.rim) {
    setColor(H.rim.color, p.rimColor);
    H.rim.intensity = +p.rimIntensity;
    H.rim.position.set(+p.rimPosX, +p.rimPosY, +p.rimPosZ);
  }
  if (H.plantA) {
    setColor(H.plantA.color, p.plantColor);
    H.plantA.intensity = +p.plantAIntensity;
  }
  if (H.plantB) {
    setColor(H.plantB.color, p.plantColor);
    H.plantB.intensity = +p.plantBIntensity;
  }

  if (H.bloom) {
    H.bloom.enabled = !!p.bloomEnabled && +p.bloomStrength > 0;
    H.bloom.strength = +p.bloomStrength;
    H.bloom.radius = +p.bloomRadius;
    H.bloom.threshold = +p.bloomThreshold;
  }
  if (H.DOF_MODES) {
    H.DOF_MODES.overview.aperture = +p.dofApertureOverview;
    H.DOF_MODES.overview.maxblur = +p.dofMaxblurOverview;
    H.DOF_MODES.close.aperture = +p.dofApertureClose;
    H.DOF_MODES.close.maxblur = +p.dofMaxblurClose;
  }
  if (H.bokeh) {
    // SoftGL: BokehPass darkens the whole frame even at aperture/maxblur 0 —
    // keep pass for API/setFocus, but never enable compositing under SoftGL.
    H.bokeh.enabled = !!p.dofEnabled && !H.softGL;
    const mode = H.getDofMode?.() || 'overview';
    const m = H.DOF_MODES?.[mode];
    if (m) {
      H.bokeh.uniforms.aperture.value = m.aperture;
      H.bokeh.uniforms.maxblur.value = m.maxblur;
    }
    if (H.bokeh.uniforms?.focus) H.bokeh.uniforms.focus.value = +p.dofFocus;
  }

  const g = H.ground;
  if (g?.outerMat) {
    setColor(g.outerMat.color, p.groundOuter);
    g.outerMat.roughness = +p.groundOuterRough;
  }
  if (g?.padMat) {
    setColor(g.padMat.color, p.groundPad);
    g.padMat.roughness = +p.groundPadRough;
    setColor(g.padMat.emissive, p.groundPadEmissive);
    g.padMat.emissiveIntensity = +p.groundPadEmissiveIntensity;
  }
  if (g?.asphaltMats) {
    for (const m of g.asphaltMats) {
      setColor(m.color, p.groundAsphalt);
      m.roughness = +p.groundAsphaltRough;
    }
  }
  if (g?.unitMat) {
    setColor(g.unitMat.color, p.groundUnit);
    g.unitMat.roughness = +p.groundUnitRough;
    setColor(g.unitMat.emissive, p.groundUnitEmissive);
    g.unitMat.emissiveIntensity = +p.groundUnitEmissiveIntensity;
  }
  if (g?.curbMat) {
    setColor(g.curbMat.color, p.curbColor);
    g.curbMat.roughness = +p.curbRough;
    setColor(g.curbMat.emissive, p.curbEmissive);
    g.curbMat.emissiveIntensity = +p.curbEmissiveIntensity;
  }

  const st = H.street || g?.street;
  if (st?.lights) {
    for (const L of st.lights) {
      setColor(L.color, p.streetLampColor);
      L.intensity = +p.streetLampIntensity;
    }
  }
  if (st?.headMat) {
    setColor(st.headMat.emissive, p.streetHeadEmissive);
    st.headMat.emissiveIntensity = +p.streetHeadEmissiveIntensity;
  }
  if (st?.poolMat && 'opacity' in st.poolMat) {
    st.poolMat.opacity = +p.streetPoolOpacity;
    st.poolMat.transparent = +p.streetPoolOpacity < 1;
  }

  if (!skipPersist) {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(p));
    } catch (_) { /* quota / private */ }
  }
  return p;
}

export function loadStoredParams() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

export function clearStoredParams() {
  try {
    localStorage.removeItem(LS_KEY);
  } catch (_) { /* ignore */ }
}

/* ========== Panel UI ========== */

/** Expand <input type="range"> max so value is not HTML-clamped. */
function ensureRangeFits(el, v) {
  if (!el || el.type !== 'range') return;
  const n = Number(v);
  if (!Number.isFinite(n)) return;
  if (n > Number(el.max)) el.max = String(n);
}

/**
 * @param {object} [opts]
 * @param {boolean} [opts.uncappedNum] - omit max on the number input (type any positive)
 * @param {number|null} [opts.numMax] - optional hard max for number when uncappedNum
 */
function rowRange(id, label, hint, min, max, step, value, opts = {}) {
  const { uncappedNum = false, numMax } = opts;
  const vNum = Number(value);
  const rangeMax = Number.isFinite(vNum) ? Math.max(max, vNum) : max;
  const numMaxAttr = uncappedNum
    ? (numMax != null ? ` max="${numMax}"` : '')
    : ` max="${max}"`;
  return `<label class="env-row" title="${hint}"><span class="env-lab">${label}</span>
    <input type="range" id="${id}" min="${min}" max="${rangeMax}" step="${step}" value="${value}" />
    <input type="number" class="env-num" data-for="${id}" min="${min}"${numMaxAttr} step="${step}" value="${value}" />
    <small class="env-desc">${hint}</small>
  </label>`;
}
function rowColor(id, label, hint, value) {
  return `<label class="env-row" title="${hint}"><span class="env-lab">${label}</span>
    <input type="color" id="${id}" value="${value}" />
    <input type="text" class="env-hex" data-for="${id}" value="${value}" maxlength="7" />
    <small class="env-desc">${hint}</small>
  </label>`;
}
function rowCheck(id, label, hint, checked) {
  return `<label class="env-row env-check" title="${hint}"><span class="env-lab">${label}</span>
    <input type="checkbox" id="${id}" ${checked ? 'checked' : ''} />
    <small class="env-desc">${hint}</small>
  </label>`;
}
function rowSelect(id, label, hint, options, value) {
  const opts = options.map((o) => `<option value="${o}" ${o === value ? 'selected' : ''}>${o}</option>`).join('');
  return `<label class="env-row" title="${hint}"><span class="env-lab">${label}</span>
    <select id="${id}">${opts}</select>
    <small class="env-desc">${hint}</small>
  </label>`;
}
function section(title, body) {
  return `<details class="env-sec" open><summary>${title}</summary><div class="env-sec-body">${body}</div></details>`;
}

function buildHTML(p) {
  return `
    <div class="env-panel-hd">
      <b>环境调节</b>
      <span class="env-hint">按 E 开关 · Esc 关闭</span>
      <button type="button" class="env-x" id="envClose" title="关闭面板">×</button>
    </div>
    <div class="env-panel-body">
      ${section('渲染 / 色调映射', `
        ${rowRange('exposure', '曝光', '整体画面明暗（toneMappingExposure）；滑条 0–20，数字框可输入任意正数', 0, 20, 0.01, p.exposure, { uncappedNum: true })}
        ${rowSelect('toneMapping', '色调映射', '高光压缩与色彩风格（Three ToneMapping）', Object.keys(TONE_MAP), p.toneMapping)}
        ${rowColor('background', '背景色', '天空/远景清屏底色', p.background)}
      `)}
      ${section('雾效 FogExp2', `
        ${rowColor('fogColor', '雾颜色', '大气雾染色，影响远景色调', p.fogColor)}
        ${rowRange('fogDensity', '雾密度', '越大远景越快淡出、越朦胧', 0, 0.02, 0.0001, p.fogDensity)}
      `)}
      ${section('环境贴图 IBL', `
        ${rowCheck('envMapEnabled', '启用环境贴图', '金属/光滑面是否反射 IBL', p.envMapEnabled)}
        ${rowRange('envIntensity', '环境光强度', 'IBL 反射明暗（environmentIntensity）', 0, 2.5, 0.01, p.envIntensity)}
      `)}
      ${section('半球光 Hemi', `
        ${rowColor('hemiSky', '天空色', '半球光上半球颜色（天光）', p.hemiSky)}
        ${rowColor('hemiGround', '地面色', '半球光下半球颜色（地面反光）', p.hemiGround)}
        ${rowRange('hemiIntensity', '强度', '柔和天光整体亮度', 0, 6, 0.01, p.hemiIntensity)}
      `)}
      ${section('主光 Key（暖）', `
        ${rowColor('keyColor', '颜色', '主光色温（暖色塑形）', p.keyColor)}
        ${rowRange('keyIntensity', '强度', '主光亮度，决定受光面层次', 0, 6, 0.01, p.keyIntensity)}
        ${rowRange('keyPosX', '位置 X', '主光世界坐标 X', -40, 40, 0.1, p.keyPosX)}
        ${rowRange('keyPosY', '位置 Y', '主光世界坐标 Y（高度）', 0, 60, 0.1, p.keyPosY)}
        ${rowRange('keyPosZ', '位置 Z', '主光世界坐标 Z', -40, 40, 0.1, p.keyPosZ)}
      `)}
      ${section('辅光 Fill（冷）', `
        ${rowColor('fillColor', '颜色', '辅光色温（冷色补暗部）', p.fillColor)}
        ${rowRange('fillIntensity', '强度', '辅光亮度，减轻死黑阴影', 0, 8, 0.01, p.fillIntensity)}
        ${rowRange('fillPosX', '位置 X', '辅光世界坐标 X', -40, 40, 0.1, p.fillPosX)}
        ${rowRange('fillPosY', '位置 Y', '辅光世界坐标 Y（高度）', 0, 40, 0.1, p.fillPosY)}
        ${rowRange('fillPosZ', '位置 Z', '辅光世界坐标 Z', -40, 40, 0.1, p.fillPosZ)}
      `)}
      ${section('轮廓光 Rim（暖）', `
        ${rowColor('rimColor', '颜色', '边缘勾边光颜色', p.rimColor)}
        ${rowRange('rimIntensity', '强度', '轮廓光亮度，分离设备与背景', 0, 3, 0.01, p.rimIntensity)}
        ${rowRange('rimPosX', '位置 X', '轮廓光世界坐标 X', -40, 40, 0.1, p.rimPosX)}
        ${rowRange('rimPosY', '位置 Y', '轮廓光世界坐标 Y（高度）', 0, 40, 0.1, p.rimPosY)}
        ${rowRange('rimPosZ', '位置 Z', '轮廓光世界坐标 Z', -40, 40, 0.1, p.rimPosZ)}
      `)}
      ${section('厂区区域光', `
        ${rowColor('plantColor', '颜色', '厂区点/区域光源颜色', p.plantColor)}
        ${rowRange('plantAIntensity', 'A 强度', '区域光 A 亮度', 0, 4, 0.01, p.plantAIntensity)}
        ${rowRange('plantBIntensity', 'B 强度', '区域光 B 亮度', 0, 4, 0.01, p.plantBIntensity)}
      `)}
      ${section('辉光 Bloom', `
        ${rowCheck('bloomEnabled', '启用', '开关辉光后期（灯/高光光晕）', p.bloomEnabled)}
        ${rowRange('bloomStrength', '强度 S', '辉光溢出强弱', 0, 2.5, 0.01, p.bloomStrength)}
        ${rowRange('bloomRadius', '半径 R', '辉光扩散范围', 0, 1.5, 0.01, p.bloomRadius)}
        ${rowRange('bloomThreshold', '阈值 T', '超过此亮度才产生光晕', 0, 3, 0.01, p.bloomThreshold)}
      `)}
      ${section('景深 DOF', `
        ${rowCheck('dofEnabled', '启用', '开关景深虚化（Bokeh）', p.dofEnabled)}
        ${rowRange('dofFocus', '对焦距离', '清晰平面到相机的距离', 1, 300, 1, p.dofFocus)}
        ${rowRange('dofApertureOverview', '光圈·全景', '全景模式虚化量（越大越虚）', 0, 0.001, 0.000001, p.dofApertureOverview)}
        ${rowRange('dofMaxblurOverview', '模糊·全景', '全景模式最大模糊上限', 0, 0.05, 0.0001, p.dofMaxblurOverview)}
        ${rowRange('dofApertureClose', '光圈·近景', '近景/特写模式虚化量', 0, 0.002, 0.000001, p.dofApertureClose)}
        ${rowRange('dofMaxblurClose', '模糊·近景', '近景模式最大模糊上限', 0, 0.08, 0.0001, p.dofMaxblurClose)}
      `)}
      ${section('地面材质', `
        ${rowColor('groundOuter', '外围地面', '厂区外圈深色地面颜色', p.groundOuter)}
        ${rowRange('groundOuterRough', '外围粗糙度', '外圈漫反射程度（1=无高光）', 0, 1, 0.01, p.groundOuterRough)}
        ${rowColor('groundPad', '混凝土垫', '设备基础混凝土垫颜色', p.groundPad)}
        ${rowRange('groundPadRough', '垫粗糙度', '混凝土垫表面粗糙度', 0, 1, 0.01, p.groundPadRough)}
        ${rowColor('groundPadEmissive', '垫自发光色', '垫面微亮/边缘感颜色', p.groundPadEmissive)}
        ${rowRange('groundPadEmissiveIntensity', '垫自发光强度', '混凝土垫自发光强弱', 0, 1.5, 0.01, p.groundPadEmissiveIntensity)}
        ${rowColor('groundAsphalt', '沥青', '道路/沥青地面颜色', p.groundAsphalt)}
        ${rowRange('groundAsphaltRough', '沥青粗糙度', '沥青表面粗糙度', 0, 1, 0.01, p.groundAsphaltRough)}
        ${rowColor('groundUnit', '单元垫', '单体设备底座垫颜色', p.groundUnit)}
        ${rowRange('groundUnitRough', '单元粗糙度', '单元垫表面粗糙度', 0, 1, 0.01, p.groundUnitRough)}
        ${rowColor('groundUnitEmissive', '单元自发光色', '单元垫微亮颜色', p.groundUnitEmissive)}
        ${rowRange('groundUnitEmissiveIntensity', '单元自发光强度', '单元垫自发光强弱', 0, 3, 0.01, p.groundUnitEmissiveIntensity)}
        ${rowColor('curbColor', '路缘', '路缘石颜色', p.curbColor)}
        ${rowRange('curbRough', '路缘粗糙度', '路缘石表面粗糙度', 0, 1, 0.01, p.curbRough)}
        ${rowColor('curbEmissive', '路缘自发光色', '路缘微亮颜色', p.curbEmissive)}
        ${rowRange('curbEmissiveIntensity', '路缘自发光强度', '路缘自发光强弱', 0, 1.5, 0.01, p.curbEmissiveIntensity)}
      `)}
      ${section('路灯', `
        ${rowColor('streetLampColor', '灯光颜色', '路灯照射色温', p.streetLampColor)}
        ${rowRange('streetLampIntensity', '灯光强度', '路灯点光源照度', 0, 6, 0.01, p.streetLampIntensity)}
        ${rowColor('streetHeadEmissive', '灯头自发光', '灯罩/灯头发光颜色', p.streetHeadEmissive)}
        ${rowRange('streetHeadEmissiveIntensity', '灯头自发光强度', '灯头材质自发光强弱', 0, 5, 0.01, p.streetHeadEmissiveIntensity)}
        ${rowRange('streetPoolOpacity', '光斑不透明度', '地面光池/光斑可见度', 0, 1, 0.01, p.streetPoolOpacity)}
      `)}
    </div>
    <div class="env-panel-ft">
      <button type="button" id="envReset" title="恢复代码默认值并清除本地缓存">重置</button>
      <button type="button" id="envCopy" title="复制当前参数为 JSON">复制JSON</button>
      <button type="button" id="envApply" title="从下方文本框应用 JSON">应用JSON</button>
      <textarea id="envJson" rows="3" spellcheck="false" placeholder='粘贴 JSON，例如 {"exposure":1.2}'></textarea>
      <div class="env-status" id="envStatus"></div>
    </div>
  `;
}

function readForm(root) {
  const out = {};
  root.querySelectorAll('input[type="range"], input[type="number"].env-num').forEach((el) => {
    if (el.classList.contains('env-num')) return;
    out[el.id] = parseFloat(el.value);
  });
  root.querySelectorAll('input[type="color"]').forEach((el) => {
    out[el.id] = el.value;
  });
  root.querySelectorAll('input[type="checkbox"]').forEach((el) => {
    out[el.id] = el.checked;
  });
  root.querySelectorAll('select').forEach((el) => {
    out[el.id] = el.value;
  });
  return out;
}

function writeForm(root, p) {
  for (const [k, v] of Object.entries(p)) {
    const el = root.querySelector(`#${CSS.escape(k)}`);
    if (!el) continue;
    if (el.type === 'checkbox') el.checked = !!v;
    else {
      ensureRangeFits(el, v);
      el.value = v;
    }
    const linked = root.querySelector(`[data-for="${CSS.escape(k)}"]`);
    if (linked) linked.value = v;
  }
}

/**
 * Mount floating env panel.
 * @returns {{ open, close, toggle, apply, reset, getParams, destroy }}
 */
export function createEnvPanel(H, { markDirty, defaults } = {}) {
  const bootDefaults = defaults ? { ...defaults } : snapshotParams(H);
  // SoftGL starts with bokeh compositing off — reflect that in boot snapshot
  if (H.softGL && H.bokeh) bootDefaults.dofEnabled = false;

  let params = { ...bootDefaults };
  const stored = loadStoredParams();
  if (stored) {
    params = { ...bootDefaults, ...stored };
    applyEnvParams(H, params);
    markDirty?.();
  }

  const host = document.createElement('div');
  host.id = 'envTweak';
  host.className = 'env-tweak';
  host.innerHTML = `
    <button type="button" class="env-fab glass" id="envFab" title="环境调节（按 E 开关）">环境</button>
    <div class="env-panel glass" id="envPanel" hidden>${buildHTML(params)}</div>
  `;
  // Attach to body so stage scale doesn't squash the panel
  document.body.appendChild(host);

  const panel = host.querySelector('#envPanel');
  const fab = host.querySelector('#envFab');
  const status = () => host.querySelector('#envStatus');

  function setStatus(msg, ok = true) {
    const el = status();
    if (!el) return;
    el.textContent = msg || '';
    el.classList.toggle('ok', !!ok);
    el.classList.toggle('err', !ok && !!msg);
  }

  function push() {
    params = { ...params, ...readForm(panel) };
    applyEnvParams(H, params);
    markDirty?.();
    setStatus('已应用 · 已写入 localStorage');
  }

  function open() {
    panel.hidden = false;
    fab.classList.add('on');
    writeForm(panel, params);
  }
  function close() {
    panel.hidden = true;
    fab.classList.remove('on');
  }
  function toggle() {
    if (panel.hidden) open();
    else close();
  }

  function reset() {
    params = { ...bootDefaults };
    clearStoredParams();
    applyEnvParams(H, params, { skipPersist: true });
    writeForm(panel, params);
    markDirty?.();
    setStatus('已恢复代码默认值');
  }

  fab.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle();
  });
  panel.addEventListener('click', (e) => e.stopPropagation());
  panel.addEventListener('pointerdown', (e) => e.stopPropagation());

  panel.addEventListener('input', (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (t.dataset.for) {
      const main = panel.querySelector(`#${CSS.escape(t.dataset.for)}`);
      if (main) {
        ensureRangeFits(main, t.value);
        main.value = t.value;
      }
    } else if (t.id) {
      const linked = panel.querySelector(`[data-for="${CSS.escape(t.id)}"]`);
      if (linked) linked.value = t.value;
    }
    push();
  });
  panel.addEventListener('change', () => push());

  host.querySelector('#envClose')?.addEventListener('click', close);
  host.querySelector('#envReset')?.addEventListener('click', reset);
  host.querySelector('#envCopy')?.addEventListener('click', async () => {
    const json = JSON.stringify(params, null, 2);
    const ta = host.querySelector('#envJson');
    if (ta) ta.value = json;
    try {
      await navigator.clipboard.writeText(json);
      setStatus('JSON 已复制到剪贴板');
    } catch (_) {
      setStatus('已填入下方文本框（剪贴板不可用）', false);
    }
  });
  host.querySelector('#envApply')?.addEventListener('click', () => {
    const ta = host.querySelector('#envJson');
    try {
      const o = JSON.parse(ta.value || '{}');
      params = { ...bootDefaults, ...o };
      applyEnvParams(H, params);
      writeForm(panel, params);
      markDirty?.();
      setStatus('JSON 已应用');
    } catch (err) {
      setStatus('JSON 解析失败：' + (err?.message || err), false);
    }
  });

  const onKey = (e) => {
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) && e.key !== 'Escape') {
      if (e.key === 'e' || e.key === 'E') return; // allow typing e in inputs
    }
    if (e.key === 'Escape') {
      if (!panel.hidden) {
        e.preventDefault();
        close();
      }
      return;
    }
    if ((e.key === 'e' || e.key === 'E') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const tag = (e.target && e.target.tagName) || '';
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      e.preventDefault();
      toggle();
    }
  };
  document.addEventListener('keydown', onKey);

  // Sync form after initial stored apply
  writeForm(panel, params);

  const api = {
    open,
    close,
    toggle,
    reset,
    apply: (p) => {
      params = { ...bootDefaults, ...p };
      applyEnvParams(H, params);
      writeForm(panel, params);
      markDirty?.();
    },
    getParams: () => ({ ...params }),
    getDefaults: () => ({ ...bootDefaults }),
    destroy() {
      document.removeEventListener('keydown', onKey);
      host.remove();
    },
  };
  window.__envTweak = api;
  return api;
}
