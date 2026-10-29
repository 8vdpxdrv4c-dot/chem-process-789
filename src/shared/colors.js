/**
 * 物料 / 安全 / UI 色常量（附录 · 物料色一览）
 * 教学示意；勿把 HF 浅绿黄当「安全绿」误用。
 */
export const COLORS = Object.freeze({
  // 公共
  H2: '#f4f7fb',
  N2: '#2f7df0',
  safe_green: '#3dd68c',
  warn_orange: '#ff9f43',
  danger_red: '#ff4757',
  ui_blue: '#3f8cff',

  // 氟化
  organic_in: '#7ec8e3',
  HF: '#c8e86c',
  F2: '#b8ff3c',
  fluor_product: '#5ee1a0',

  // 加氢
  substrate: '#e8a54b',
  h2_product: '#9b8cff',

  // 重氮化
  aniline: '#d4924a',
  acid: '#8fd19e',
  nitrite: '#f0d878',
  coolant: '#6ec8ff',
  diazonium: '#ff6b4a',
  azo_dye: '#e83e8c',

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
