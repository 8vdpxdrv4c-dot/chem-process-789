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

  /* labels */
  const tmp = new THREE.Vector3();
  // 全景易丢的右侧设备：优先外偏，避免挤到知识卡下消失
  const LABEL_BIAS = {
    H07: [85, -110], H09: [110, -150], H11: [95, -85],
    H05: [40, -100], H08: [55, -80], H06: [50, -60],
    H01: [-40, -70], H02: [-30, -50], H03: [-35, -80], H04: [20, -55], H10: [-20, -40],
    F01: [-40, -70], F02: [-30, -80], F04: [40, -100], F05: [50, -70],
    F07: [70, -90], F08: [60, -60], F03: [20, -50], F06: [40, -55],
    D01: [40, -100], D02: [-50, -80], D03: [70, -60], D04: [-60, -70],
    D05: [-45, -90], D06: [80, -50], D07: [30, -120], D09: [-20, -70],
  };

  const labelNodes = (plant.labels || []).map(([id, name, sub, pos]) => {
    const el = document.createElement('div');
    el.className = 'lb';
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

  // measure after paint
  requestAnimationFrame(() => {
    labelNodes.forEach((l) => {
      const r = l.el.getBoundingClientRect();
      const sc = stageEl.getBoundingClientRect().width / 1920 || 1;
      if (r.width > 0) { l.w = r.width / sc; l.h = r.height / sc; }
    });
  });

  function proj(p) {
    tmp.copy(p).project(camera);
    return {
      x: (tmp.x * 0.5 + 0.5) * 1920,
      y: (-tmp.y * 0.5 + 0.5) * 1080,
      ok: tmp.z < 1 && Math.abs(tmp.x) < 1.25 && Math.abs(tmp.y) < 1.25,
    };
  }

  function updateLabels() {
    let svg = '';
    const placed = [];
    // 右侧远设备优先布局，减少被挤掉
    const order = [...labelNodes].sort((a, b) => {
      const pri = (id) => (/H0[791]|H11|F0[178]/.test(id) ? 0 : 1);
      return pri(a.id) - pri(b.id);
    });
    for (const l of order) {
      const s = proj(l.pos);
      if (!s.ok) { l.el.classList.add('off'); continue; }
      l.el.classList.remove('off');
      const cardOpen = !!document.querySelector('#card.show');
      // 知识卡 right:44 width:480 → 可用右缘约 1396；卡打开时强制避让
      const rightMax = (cardOpen ? 1920 - 540 : 1920 - 48) - l.w;
      const leftMin = 240;
      let x = THREE.MathUtils.clamp(s.x + l.dx, leftMin, Math.max(leftMin + 20, rightMax));
      let y = THREE.MathUtils.clamp(s.y + l.dy, 100, 1080 - 140 - l.h);
      // 右侧关键设备：卡打开时抬到卡顶之上或卡左缘
      if (cardOpen && /^(H07|H09|H11|F07|F08|F10)$/.test(l.id)) {
        const slot = { H09: 0, H07: 1, H11: 2, F07: 0, F08: 1, F10: 2 }[l.id] || 0;
        y = Math.min(y, 108 + slot * 52);
        x = Math.min(x, rightMax);
      }
      let box = { left: x, right: x + l.w, top: y, bottom: y + l.h };
      for (let it = 0; it < 14; it++) {
        let hit = false;
        for (const o of placed) {
          if (box.left < o.right + 10 && box.right > o.left - 10 && box.top < o.bottom + 8 && box.bottom > o.top - 8) {
            const push = (o.bottom - box.top) + 10;
            y += push;
            box.top += push; box.bottom += push;
            hit = true;
          }
        }
        if (!hit) break;
      }
      y = THREE.MathUtils.clamp(y, 100, 1080 - 140 - l.h);
      box = { left: x, right: x + l.w, top: y, bottom: y + l.h };
      placed.push(box);
      l.el.style.left = '0';
      l.el.style.top = '0';
      l.el.style.transform = `translate(${x}px, ${y}px)`;
      const c = l.el.classList.contains('hero') ? '#ffb06a' : (l.el.classList.contains('alarm') ? '#ff4757' : '#2ff3ff');
      const ex = Math.max(box.left + 16, Math.min(box.right - 16, s.x));
      const ey = box.bottom < s.y ? box.bottom : box.top;
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
