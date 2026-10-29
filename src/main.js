/**
 * 工艺 7/8/9 · common-shell HUD + WebGL 主视区
 * 默认 p=8 加氢；设备外形占位，等分析师参考图包后再按图建模。
 */
import * as THREE from 'three';
import { createStageFit } from './shared/stage.js';
import { createFlyController } from './shared/flyTo.js';
import { detectQuality } from './shared/quality.js';
import { createScene } from './shared/sceneBootstrap.js';
import { refreshDeviceEnvMaps } from './shared/devices.js';
import { createHUD } from './shared/hud.js';
import {
  CODE_DEFAULTS,
  applyEnvParams,
  collectEnvHandles,
  createEnvPanel,
} from './shared/envTweak.js';
import {
  applySoftGLShotGrade,
  clearSoftGLShotGrade,
  wantsSoftShotGrade,
  SOFTGL_SHOT_GRADE,
} from './shared/softGLShotGrade.js';
import { loadProcess, buildPlant, processList, resolveProcessId } from './processes/index.js';

async function boot() {
  const stageEl = document.getElementById('stage');
  const canvas = document.getElementById('c');
  const hudRoot = document.getElementById('hud');
  const labelsEl = document.getElementById('labels');
  const lead = document.getElementById('lead');
  const perfEl = document.getElementById('perf');
  const bootEl = document.getElementById('boot');

  const q = new URLSearchParams(location.search);
  if (q.get('perf')) perfEl.style.display = 'block';

  const { Q, gpu } = detectQuality();
  const S = createScene(canvas, { Q });
  const { camera, controls, scene } = S;

  let dirty = true;

  // Centered fit like design mockups
  const stage = createStageFit(stageEl, {
    centered: true,
    onResize() {
      S.setSize(innerWidth, innerHeight);
      dirty = true;
    },
  });
  let clearAlarm = null;
  let playTimer = null;
  const PLAY_MS = 10000;

  const processId = resolveProcessId();
  // Preserve debug/shot query flags across process-id normalize
  {
    const keep = new URLSearchParams(location.search);
    const next = new URLSearchParams();
    next.set('p', String(processId));
    for (const k of ['q', 'perf', 'softShot', 'env']) {
      if (keep.has(k)) next.set(k, keep.get(k));
    }
    history.replaceState(null, '', `?${next.toString()}`);
  }
  const process = await loadProcess(processId);
  const plant = buildPlant(THREE, scene, process, { softGL: !!S.softGL });
  // Ensure Standard/Physical device mats pick up Zipper PMREM.
  // Explicit envMap bypasses scene.environmentIntensity — bake CODE_DEFAULTS.envIntensity.
  try {
    const n = refreshDeviceEnvMaps(scene, scene, {
      intensityScale: CODE_DEFAULTS.envIntensity,
      enabled: CODE_DEFAULTS.envMapEnabled,
    });
    console.info('[materials] refreshDeviceEnvMaps', n, 'envIntensity', CODE_DEFAULTS.envIntensity);
  } catch (err) {
    console.warn('[materials] refreshDeviceEnvMaps failed', err);
  }
  const fly = createFlyController({ camera, controls, THREE });

  /* labels — fixed screen offset from world anchor; hide when out of view.
   * No per-frame collision nudge / card shove (that made tags jump). */
  const tmp = new THREE.Vector3();
  const LABEL_BIAS = {
    H07: [48, -72], H09: [56, -88], H11: [52, -64],
    H05: [36, -64], H08: [40, -56], H06: [36, -48],
    H01: [-36, -56], H02: [-28, -44], H03: [-32, -56], H04: [24, -48], H10: [-20, -40],
    F01: [-36, -56], F02: [-28, -56], F04: [36, -64], F05: [40, -52],
    F07: [48, -64], F08: [40, -48], F03: [20, -44], F06: [32, -48],
    D01: [36, -64], D02: [-40, -56], D03: [48, -48], D04: [-44, -52],
    D05: [-36, -60], D06: [52, -44], D07: [28, -72], D09: [-20, -52],
  };
  /** NDC margin: hide once anchor leaves frustum (+ small edge pad). */
  const LABEL_NDC_MARGIN = 1.02;

  const labelNodes = (plant.labels || []).map(([id, name, sub, pos]) => {
    const el = document.createElement('div');
    el.className = 'lb off';
    el.innerHTML = `<b>${id}</b><div><span class="nm">${name}</span><span class="st">${sub}</span></div>`;
    el.dataset.id = id;
    labelsEl.appendChild(el);
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openDevice(id);
    });
    const bias = LABEL_BIAS[id] || [28, -48];
    return { id, pos, el, w: 170, h: 44, dx: bias[0], dy: bias[1] };
  });

  // measure after paint (lead-line attach only; never used to shove position)
  requestAnimationFrame(() => {
    labelNodes.forEach((l) => {
      const r = l.el.getBoundingClientRect();
      const sc = stageEl.getBoundingClientRect().width / 1920 || 1;
      if (r.width > 0) { l.w = r.width / sc; l.h = r.height / sc; }
    });
  });

  function proj(p) {
    // Camera looks down -Z: in front ⇒ camera-space z < 0
    tmp.copy(p).applyMatrix4(camera.matrixWorldInverse);
    if (tmp.z >= 0) return { x: 0, y: 0, ok: false };
    tmp.copy(p).project(camera);
    const inView = Math.abs(tmp.x) <= LABEL_NDC_MARGIN && Math.abs(tmp.y) <= LABEL_NDC_MARGIN;
    return {
      x: (tmp.x * 0.5 + 0.5) * 1920,
      y: (-tmp.y * 0.5 + 0.5) * 1080,
      ok: inView,
    };
  }

  function updateLabels() {
    let svg = '';
    for (const l of labelNodes) {
      const s = proj(l.pos);
      if (!s.ok) {
        l.el.classList.add('off');
        continue;
      }
      l.el.classList.remove('off');
      // Stable screen offset from projected anchor — no clamp/collision/card push
      const x = s.x + l.dx;
      const y = s.y + l.dy;
      l.el.style.left = '0';
      l.el.style.top = '0';
      l.el.style.transform = `translate(${x}px, ${y}px)`;
      const c = l.el.classList.contains('hero') ? '#ffb06a' : (l.el.classList.contains('alarm') ? '#ff4757' : '#2ff3ff');
      const ex = x + Math.min(l.w * 0.35, 40);
      const ey = y + l.h;
      svg += `<polyline points="${s.x.toFixed(1)},${s.y.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}" fill="none" stroke="${c}" stroke-opacity=".85" stroke-width="1.4"/><circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="4" fill="${c}"/><circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="8" fill="none" stroke="${c}" stroke-opacity=".45"/>`;
    }
    lead.innerHTML = svg;
  }

  function setLabelHero(id, alarm) {
    labelNodes.forEach((l) => {
      l.el.classList.toggle('hero', !alarm && l.id === id);
      l.el.classList.toggle('alarm', !!alarm && (l.id === id || id === 'leak'));
    });
    plant.setHero?.(id);
  }

  function openDevice(id, { flyCam = true } = {}) {
    hud.showKnow(id);
    setLabelHero(id, false);
    const a = plant.anchors[id];
    if (flyCam && a) {
      S.setDofMode?.('close');
      fly.flyTo({
        pos: [a.x + 18, a.y + 8, a.z + 22],
        tgt: [a.x, Math.max(4, a.y * 0.45), a.z],
        fov: 38,
      }, 1100);
    }
    dirty = true;
  }

  /* pick */
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let ptr = null;
  const pickables = [];
  scene.traverse((o) => {
    if (o.isMesh && (o.userData?.pickable || o.parent?.userData?.pickable)) pickables.push(o);
  });

  canvas.addEventListener('pointerdown', (e) => { ptr = [e.clientX, e.clientY]; });
  canvas.addEventListener('pointerup', (e) => {
    if (!ptr || Math.hypot(e.clientX - ptr[0], e.clientY - ptr[1]) > 6) { ptr = null; return; }
    ptr = null;
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(pickables, true)
      .find((h) => h.object.userData?.id || h.object.parent?.userData?.id);
    if (!hit) return;
    const id = hit.object.userData?.id || hit.object.parent?.userData?.id;
    if (id) openDevice(id);
  });

  let currentStepIdx = 0;
  let hudPlaying = false;
  const hud = createHUD(hudRoot, {
    process,
    processes: processList(),
    onProcessChange(id) { location.search = `?p=${id}`; },
    onStep(i, step, opts = {}) {
      const cam = step.camera || process.steps[0].camera;
      const instant = !window.__booted;
      currentStepIdx = i;
      // Step 0 / wide overview → mild DOF; focus/device steps → 大光圈
      const closeDof = i > 0 && (!!step.focus || !!step.camera);
      S.setDofMode?.(closeDof ? 'close' : 'overview');
      if (!opts.lockCamera && !step.lockCamera) {
        if (instant) {
          camera.position.set(...cam.pos);
          controls.target.set(...cam.tgt);
          camera.fov = cam.fov || 42;
          camera.updateProjectionMatrix();
        } else {
          fly.flyTo(cam, 1300);
        }
      }
      if (step.cutaway) {
        plant.setCutaway?.(true);
        hud.setCutawayUi(true);
      }
      if (step.focus) setLabelHero(step.focus, !!step.safetyMode);
      if (step.safetyMode && step.alarm) {
        clearAlarm?.();
        clearAlarm = plant.triggerAlarm?.(step.alarm) || null;
        setLabelHero(step.focus || 'H01', true);
      }
      plant.setFxStep?.(i, step, { playing: hudPlaying });
      dirty = true;
    },
    onPlay(playing) {
      clearInterval(playTimer);
      playTimer = null;
      hudPlaying = !!playing;
      const step = process.steps?.[currentStepIdx];
      plant.setFxStep?.(currentStepIdx, step, { playing: hudPlaying });
      dirty = true;
      if (playing) {
        playTimer = setInterval(() => {
          hud.go(hud.stepIndex + 1);
          if (hud.stepIndex === 0) {
            hud.setPlaying(false);
            hudPlaying = false;
            clearInterval(playTimer);
          }
        }, PLAY_MS);
      }
    },
    onCutaway(on) {
      plant.setCutaway?.(on);
      dirty = true;
    },
    onAlarm(id) {
      clearAlarm?.();
      clearAlarm = plant.triggerAlarm?.(id) || null;
      const showLel = process.showLel === true || (process.showLel == null && process.id === 8);
      hud.setLel(id === 'h2_leak' || id === 'lel' ? 78 : 40, showLel && process.id === 8);
      hud.setBadge?.('danger', '安全等级 · 危险');
      let hero = 'H09';
      if (id === 'h2_leak' || id === 'lel') hero = 'H01';
      else if (id === 'hotspot' || id === 'poison') hero = 'H05';
      else if (id === 'hf_leak' || id === 'valve_open') hero = 'F09';
      else if (id === 'washdown') hero = 'F08';
      else if (id === 'esd' && process.id === 7) hero = 'F10';
      else if (id === 'overtemp' && process.id === 7) hero = 'F04';
      else if (id === 'chill_fail' || id === 'overtemp' || id === 'fast_drip') hero = process.id === 9 ? 'D01' : (process.id === 7 ? 'F04' : 'H05');
      else if (id === 'dilute' || id === 'cool_boost') hero = 'D06';
      else if (id === 'esd') hero = 'H09';
      setLabelHero(hero, true);
      dirty = true;
    },
    onDemo(code, step) {
      if (step?.cutaway || code === 'H05') {
        plant.setCutaway?.(true);
        hud.setCutawayUi(true);
      }
      if (code) openDevice(code);
    },
    onCardBack() {
      labelNodes.forEach((l) => l.el.classList.remove('hero'));
      // Returning from device card: mild DOF if still on overview step
      if (currentStepIdx === 0) S.setDofMode?.('overview');
    },
    onReset() {
      clearInterval(playTimer);
      playTimer = null;
      hudPlaying = false;
      clearAlarm?.();
      clearAlarm = null;
      plant.reset?.();
      labelNodes.forEach((l) => { l.el.classList.remove('hero', 'alarm'); });
      S.setDofMode?.('overview');
      dirty = true;
    },
  });

  controls.addEventListener('change', () => { dirty = true; });

  let last = performance.now();
  let frames = 0, tAcc = 0;
  const roadTraffic = scene.getObjectByName('roadTraffic');
  const safetyPatrols = scene.getObjectByName('safetyPatrols');

  let fxElapsed = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(40, now - last);
    last = now;
    const dtSec = dt / 1000;
    fxElapsed += dtSec;
    if (roadTraffic?.userData?.update) {
      roadTraffic.userData.update(dt);
      dirty = true;
    }
    if (safetyPatrols?.userData?.update) {
      safetyPatrols.userData.update(dt);
      dirty = true;
    }
    if (plant.update) {
      plant.update(dtSec, {
        elapsed: fxElapsed,
        stepIndex: currentStepIdx,
        playing: hudPlaying || !!hud.playing,
      });
      dirty = true;
    }
    if (fly.update(dt) || controls.update()) dirty = true;
    if (!dirty) return;
    dirty = false;
    camera.lookAt(controls.target);
    S.render();
    updateLabels();
    frames++;
    tAcc += dt;
    if (frames % 30 === 0) {
      const fps = 30000 / Math.max(1, tAcc);
      tAcc = 0;
      if (perfEl.style.display === 'block') {
        perfEl.textContent = `${Q} · ${fps.toFixed(1)} fps · ${process.short}`;
      }
    }
  }

  {
    const cam0 = process.steps[0].camera;
    camera.position.set(...cam0.pos);
    controls.target.set(...cam0.tgt);
    camera.fov = cam0.fov || 42;
    camera.updateProjectionMatrix();
  }
  S.setSize(innerWidth, innerHeight);
  S.render();
  updateLabels();

  bootEl.style.opacity = '0';
  setTimeout(() => bootEl.remove(), 650);
  window.__booted = true;
  window.__ready = true;
  const envHandles = collectEnvHandles(S);
  // Bake CODE_DEFAULTS into live scene (boot + Reset source of truth)
  applyEnvParams(envHandles, CODE_DEFAULTS, { skipPersist: true });
  const envPanel = createEnvPanel(envHandles, {
    markDirty: () => { dirty = true; },
    defaults: { ...CODE_DEFAULTS },
  });

  window.__app = {
    process, plant, hud, fly, S, Q, gpu,
    fx: plant.fx || null,
    envHandles, envPanel,
    go: (i) => hud.go(i),
    setDofMode: (m) => S.setDofMode?.(m),
    openDevice,
    applySoftGLShotGrade: (opts) => {
      const r = applySoftGLShotGrade(S, opts);
      dirty = true;
      return r;
    },
    clearSoftGLShotGrade: () => {
      const r = clearSoftGLShotGrade(S);
      dirty = true;
      return r;
    },
    SOFTGL_SHOT_GRADE,
  };
  S.setDofMode?.('overview');
  // SoftGL shot-only darker grade (live SoftGL debug unchanged unless ?softShot=1)
  if (wantsSoftShotGrade() && S.softGL) {
    applySoftGLShotGrade(S);
    dirty = true;
  }
  requestAnimationFrame(frame);

  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && /[IJC]/i.test(e.key)) || (e.ctrlKey && /u/i.test(e.key))) {
      e.preventDefault();
    }
  });

}
boot().catch((e) => {
  console.error(e);
  const b = document.getElementById('boot');
  if (b) b.textContent = '启动失败：' + (e && e.message || e);
});
