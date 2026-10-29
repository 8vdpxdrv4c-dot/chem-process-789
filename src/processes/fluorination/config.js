/**
 * 工艺 7 · 氟化 — 运行时以 /public/data/fluorination.json 为准。
 * HF 主；F₂ 仅对比默认关；衬里「搪玻璃/PTFE/哈氏合金示意」。
 */
export const fluorination = {
  id: 7,
  key: 'fluorination',
  short: '氟化',
  title: '氟化工艺（教学示意）',
  stub: false,
  reaction: 'R–X + HF → R–F + HX',
  dh: '液相/催化氟化示意',
  reactionNote: '教学示意 · 通式；F₂ 直接氟化默认关闭',
};
