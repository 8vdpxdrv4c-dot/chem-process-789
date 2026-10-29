/**
 * SoftGL (SwiftShader/llvmpipe) vs real-GPU brightness gap.
 *
 * SoftGL historically renders flatter/brighter with the same AgX params:
 * different PMREM/IBL filtering, weaker shadows, no real DOF path (bokeh
 * compositing is forced off because it massively darkens under SoftGL),
 * and Chrome screenshot capture can differ from on-device GPU.
 *
 * Live SoftGL preview stays on look-dev defaults for local debug.
 * Shot scripts pass ?softShot=1 (or call applySoftGLShotGrade) so SoftGL
 * captures are graded darker to approximate a typical real-GPU reading.
 */
import { refreshDeviceEnvMaps } from './devices.js';

/** SoftGL vs real-GPU: milder muls for ACESFilmic + exposure 1 bake. */
export const SOFTGL_SHOT_GRADE = Object.freeze({
  exposureMul: 0.88,
  envIntensityMul: 0.9,
  bloomMul: 0.75,
  badgeText: 'SoftGL 示意 · 真机偏暗',
});

const BADGE_ID = 'softgl-shot-badge';

function ensureBadge(text) {
  let el = document.getElementById(BADGE_ID);
  if (!el) {
    el = document.createElement('div');
    el.id = BADGE_ID;
    el.className = 'softgl-shot-badge';
    document.getElementById('stage')?.appendChild(el) || document.body.appendChild(el);
  }
  el.textContent = text;
  el.hidden = false;
  return el;
}

function hideBadge() {
  const el = document.getElementById(BADGE_ID);
  if (el) el.hidden = true;
}

/**
 * @param {object} S createScene() return
 * @param {{ exposureMul?: number, envIntensityMul?: number, bloomMul?: number, badge?: boolean, badgeText?: string }} [opts]
 * @returns {{ applied: boolean, reason?: string, before?: object, after?: object }}
 */
export function applySoftGLShotGrade(S, opts = {}) {
  if (!S?.renderer) return { applied: false, reason: 'no-renderer' };
  if (!S.softGL) return { applied: false, reason: 'not-softGL' };
  if (S.__softShotGradeApplied) {
    return { applied: true, reason: 'already', before: S.__softShotGradeBefore, after: snapshotGrade(S) };
  }

  const exposureMul = opts.exposureMul ?? SOFTGL_SHOT_GRADE.exposureMul;
  const envIntensityMul = opts.envIntensityMul ?? SOFTGL_SHOT_GRADE.envIntensityMul;
  const bloomMul = opts.bloomMul ?? SOFTGL_SHOT_GRADE.bloomMul;
  const showBadge = opts.badge !== false;

  const before = snapshotGrade(S);
  S.renderer.toneMappingExposure = Math.max(0.01, before.exposure * exposureMul);
  const nextEnv = (before.envIntensity != null)
    ? Math.max(0, before.envIntensity * envIntensityMul)
    : null;
  if ('environmentIntensity' in S.scene && nextEnv != null) {
    S.scene.environmentIntensity = nextEnv;
  }
  // Explicit material.envMap ignores scene.environmentIntensity — re-bake scale
  try {
    refreshDeviceEnvMaps(S.scene, S.scene, {
      intensityScale: nextEnv != null ? nextEnv : 1,
      enabled: !!S.scene?.environment,
    });
  } catch (_) { /* ignore */ }
  if (S.bloom && before.bloomStrength != null) {
    S.bloom.strength = Math.max(0, before.bloomStrength * bloomMul);
    S.bloom.enabled = S.bloom.strength > 0;
  }

  S.__softShotGradeApplied = true;
  S.__softShotGradeBefore = before;
  S.__softShotGradeMuls = { exposureMul, envIntensityMul, bloomMul };

  if (showBadge) {
    ensureBadge(opts.badgeText ?? SOFTGL_SHOT_GRADE.badgeText);
  }

  try { S.render?.(); } catch (_) { /* ignore */ }

  return { applied: true, before, after: snapshotGrade(S), muls: S.__softShotGradeMuls };
}

/** Restore pre-grade values (optional; shots usually exit after capture). */
export function clearSoftGLShotGrade(S) {
  if (!S?.__softShotGradeApplied || !S.__softShotGradeBefore) {
    hideBadge();
    return { cleared: false };
  }
  const b = S.__softShotGradeBefore;
  S.renderer.toneMappingExposure = b.exposure;
  if ('environmentIntensity' in S.scene && b.envIntensity != null) {
    S.scene.environmentIntensity = b.envIntensity;
  }
  try {
    refreshDeviceEnvMaps(S.scene, S.scene, {
      intensityScale: b.envIntensity != null ? b.envIntensity : 1,
      enabled: !!S.scene?.environment,
    });
  } catch (_) { /* ignore */ }
  if (S.bloom && b.bloomStrength != null) {
    S.bloom.strength = b.bloomStrength;
    S.bloom.enabled = b.bloomEnabled;
  }
  S.__softShotGradeApplied = false;
  hideBadge();
  try { S.render?.(); } catch (_) { /* ignore */ }
  return { cleared: true };
}

function snapshotGrade(S) {
  return {
    exposure: S.renderer?.toneMappingExposure,
    envIntensity: S.scene && 'environmentIntensity' in S.scene ? S.scene.environmentIntensity : null,
    bloomStrength: S.bloom?.strength ?? null,
    bloomEnabled: S.bloom?.enabled ?? null,
  };
}

/** True when URL asks SoftGL shots to use the darker grade. */
export function wantsSoftShotGrade(search = typeof location !== 'undefined' ? location.search : '') {
  const q = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  const v = q.get('softShot');
  return v === '1' || v === 'true' || v === 'yes';
}
