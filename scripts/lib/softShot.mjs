/**
 * SoftGL shot helpers for Playwright capture scripts.
 * Prefer URL ?softShot=1 (auto grade at boot). Fallback: call applySoftGLShotGrade().
 */
export function withSoftShot(url) {
  const u = new URL(url);
  u.searchParams.set('softShot', '1');
  return u.toString();
}

/** Ensure SoftGL grade is applied even if page loaded without softShot. */
export async function ensureSoftShotGrade(page, opts = {}) {
  return page.evaluate((o) => {
    const app = window.__app;
    if (!app?.S) return { applied: false, reason: 'no-app' };
    if (typeof app.applySoftGLShotGrade === 'function') {
      return app.applySoftGLShotGrade(o || {});
    }
    return { applied: false, reason: 'no-api' };
  }, opts);
}

export async function softShotMeta(page) {
  return page.evaluate(() => {
    const S = window.__app?.S;
    return {
      softGL: !!S?.softGL,
      graded: !!S?.__softShotGradeApplied,
      exposure: S?.renderer?.toneMappingExposure,
      envIntensity: S?.scene?.environmentIntensity,
      bloom: S?.bloom ? { s: S.bloom.strength, on: S.bloom.enabled } : null,
      bokehEnabled: S?.bokeh?.enabled,
      muls: S?.__softShotGradeMuls || null,
      before: S?.__softShotGradeBefore || null,
    };
  });
}
