import { buildFluorinationPlant } from './fluorination/plant.js';
import { buildHydrogenationPlant } from './hydrogenation/plant.js';
import { buildDiazotizationPlant } from './diazotization/plant.js';

/** Resolve data JSON under the app directory even when URL has no trailing slash. */
function dataUrl(name) {
  const dir = location.href.replace(/[?#].*$/, '').replace(/\/?$/, '/');
  return new URL(`data/${name}.json`, dir).href;
}

const META = [
  { id: 7, key: 'fluorination', short: '氟化', file: () => dataUrl('fluorination') },
  { id: 8, key: 'hydrogenation', short: '加氢', file: () => dataUrl('hydrogenation') },
  { id: 9, key: 'diazotization', short: '重氮化', file: () => dataUrl('diazotization') },
];

const BUILDERS = {
  7: buildFluorinationPlant,
  8: buildHydrogenationPlant,
  9: buildDiazotizationPlant,
};

export function resolveProcessId() {
  const q = new URLSearchParams(location.search);
  const raw = q.get('p') || q.get('process') || location.hash.replace(/^#/, '') || '8';
  const map = {
    '7': 7, fluorination: 7, f: 7, 氟化: 7,
    '8': 8, hydrogenation: 8, h: 8, 加氢: 8,
    '9': 9, diazotization: 9, d: 9, 重氮化: 9,
  };
  return map[String(raw).toLowerCase()] || map[raw] || 8;
}

export async function loadProcess(id = resolveProcessId()) {
  const meta = META.find((m) => m.id === id) || META[1];
  const url = typeof meta.file === 'function' ? meta.file() : meta.file;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to load ' + url);
  const data = await res.json();
  return { ...data, short: meta.short };
}

export function processList() {
  return META.map(({ id, key, short }) => ({ id, key, short }));
}

export function buildPlant(THREE, scene, process) {
  const fn = BUILDERS[process.id] || BUILDERS[8];
  return fn(THREE, scene);
}
