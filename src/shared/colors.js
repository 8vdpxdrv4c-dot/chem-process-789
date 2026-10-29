/**
 * 物料 / 安全 / UI 色常量（附录 · 物料色一览）
 * 教学示意；勿把 HF 浅绿黄当「安全绿」误用。
 *
 * 定稿（化学课件老师）：
 * - 锁色相：H₂ / N₂ / HF / coolant / diazonium（可略降饱和，禁换色相）
 * - 次级介质（硝基苯橙、苯胺紫、有机青、HCl/亚硝酸盐等）：图例+色环降一档饱和
 * - 管体银灰金属；识别色只在薄色环 / 流纹 / 珠粒
 */
export const COLORS = Object.freeze({
  // 公共 · 锁色相
  H2: '#f4f7fb',
  N2: '#2f7df0',
  safe_green: '#3dd68c',
  warn_orange: '#ff9f43',
  danger_red: '#ff4757',
  ui_blue: '#3f8cff',

  // 氟化 · organic/产物/F₂ 降一档；HF 锁
  organic_in: '#8cc1d5',
  HF: '#c8e86c',
  F2: '#b1e457',
  fluor_product: '#70cfa0',

  // 加氢 · 硝基苯橙 / 苯胺紫 降一档
  substrate: '#d2a261',
  h2_product: '#a79cef',

  // 重氮化 · 苯胺/酸/亚硝酸盐降一档；coolant / diazonium 锁
  aniline: '#c1915d',
  acid: '#98c8a3',
  nitrite: '#dfce89',
  coolant: '#6ec8ff',
  diazonium: '#ff6b4a',
  azo_dye: '#d0568e',

  // 场景底色（对标合成氨深蓝电影感）
  sky_top: '#06102a',
  sky_bot: '#133066',
  ground: '#0a0e13',
  metal: '#c0c8d0',
  metal_dark: '#7a8490',
  concrete: '#7a828c',
});

export function hexToThree(THREE, hex) {
  return new THREE.Color(hex);
}
