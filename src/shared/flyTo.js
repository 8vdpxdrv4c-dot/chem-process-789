/** 章节 / 步骤镜头飞行（对标合成氨 flyTo） */
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * @returns {{ flyTo, update, isFlying }}
 */
export function createFlyController({ camera, controls, THREE }) {
  let fly = null;
  let vnow = 0;

  function flyTo(to, dur = 1300, onDone) {
    const target = {
      p: to.p?.clone?.() ?? new THREE.Vector3(...(to.pos || [0, 40, 80])),
      t: to.t?.clone?.() ?? new THREE.Vector3(...(to.tgt || [0, 8, 0])),
      f: to.fov ?? camera.fov,
    };
    fly = {
      t0: vnow,
      dur,
      from: {
        p: camera.position.clone(),
        t: controls.target.clone(),
        f: camera.fov,
      },
      to: target,
      onDone,
    };
  }

  function update(dtMs) {
    vnow += dtMs;
    if (!fly) return false;
    const k = Math.min(1, (vnow - fly.t0) / fly.dur);
    const e = ease(k);
    const f = fly.from;
    const t = fly.to;
    camera.position.lerpVectors(f.p, t.p, e);
    controls.target.lerpVectors(f.t, t.t, e);
    camera.fov = f.f + (t.f - f.f) * e;
    camera.updateProjectionMatrix();
    if (k >= 1) {
      const cb = fly.onDone;
      fly = null;
      cb?.();
    }
    return true;
  }

  return {
    flyTo,
    update,
    isFlying: () => !!fly,
    cancel: () => { fly = null; },
  };
}
