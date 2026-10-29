/**
 * 自动 high/mid/low 分档；无画质设置面板（对标合成氨）。
 * ?q=low|mid|high 可强制；?perf=1 显示帧率。
 *
 * Boot defaults match envTweak CODE_DEFAULTS (ACESFilmic look-dev bake).
 * mid/low keep reduced post / shadows; lighting colors stay unified.
 */
export function detectQuality() {
  const q = new URLSearchParams(location.search);
  const forced = q.get('q');
  if (forced && ['low', 'mid', 'high'].includes(forced)) {
    return { Q: forced, forced: true };
  }
  let gpu = '';
  try {
    const g = document.createElement('canvas').getContext('webgl2');
    const e = g?.getExtension('WEBGL_debug_renderer_info');
    gpu = e ? g.getParameter(e.UNMASKED_RENDERER_WEBGL) : '';
  } catch (_) { /* ignore */ }
  const weak =
    /SwiftShader|llvmpipe|Software|Intel|UHD|HD Graphics|Iris|Mali|Adreno|PowerVR/i.test(gpu) ||
    (navigator.hardwareConcurrency || 8) <= 4;
  return { Q: weak ? 'low' : 'high', forced: false, gpu };
}

export const PRESET = {
  high: {
    bloom: 0.36,
    bloomRadius: 1.5,
    bloomThreshold: 1.58,
    shadow: 2048,
    particles: 1,
    dof: true,
    aperture: 0,
    maxblur: 0,
    apertureClose: 0,
    maxblurClose: 0,
    focus: 233,
    fog: 0.002,
    fogColor: 0x20245b,
    background: 0x6a8dd2,
    exposure: 0.47,
    envIntensity: 2.5,
    sunMul: 1,
    fillMul: 1,
    rimMul: 1,
  },
  mid: {
    bloom: 0.28,
    bloomRadius: 1.2,
    bloomThreshold: 1.58,
    shadow: 1024,
    particles: 0.7,
    dof: true,
    aperture: 0,
    maxblur: 0,
    apertureClose: 0,
    maxblurClose: 0,
    focus: 233,
    fog: 0.002,
    fogColor: 0x20245b,
    background: 0x6a8dd2,
    exposure: 0.47,
    envIntensity: 2.2,
    sunMul: 1,
    fillMul: 1,
    rimMul: 1,
  },
  low: {
    bloom: 0,
    bloomRadius: 1.5,
    bloomThreshold: 1.58,
    shadow: 512,
    particles: 0.4,
    dof: false,
    aperture: 0,
    maxblur: 0,
    apertureClose: 0,
    maxblurClose: 0,
    focus: 233,
    fog: 0.0024,
    fogColor: 0x20245b,
    background: 0x6a8dd2,
    exposure: 0.47,
    envIntensity: 2.0,
    sunMul: 1,
    fillMul: 1,
    rimMul: 1,
  },
};
