# 重点监管危险化工工艺 · 7 / 8 / 9 · 3D 大屏

> 教学示意 · Vite + Three.js 同仓多入口。HUD 对齐设计师 `design-v1-工艺789/common-shell`。  
> **设备保真外形等待分析师加氢参考图包**（见 `refs/hydrogenation/README.md`）；当前为标注占位盒/柱。

## 运行

```bash
cd /workspace/chem-process-789
npm i
npm run dev          # http://127.0.0.1:5178/
npm run build        # dist/
```

| 入口 | URL |
|---|---|
| **8 加氢（默认·可演示）** | `?p=8` |
| 7 氟化 stub | `?p=7` |
| 9 重氮化 stub | `?p=9` |

调试：`?perf=1` · `?q=low|mid|high`

## 关键路径

| 路径 | 说明 |
|---|---|
| `src/styles/shell.css` | common-shell token + 组件（含安全面板 / %LEL） |
| `src/shared/hud.js` | 顶栏/rail/#card/flow/dock/sfbtn/sfp |
| `src/main.js` | WebGL 替换 `.plant` · flyTo · 点选 · 报警 |
| `public/data/hydrogenation.json` | 加氢文案/步骤/设备卡/报警（设计稿+需求） |
| `public/data/fluorination.json` | 氟化 stub 文案 |
| `public/data/diazotization.json` | 重氮化 stub 文案 |
| `src/processes/hydrogenation/plant.js` | **占位**厂区（等分析师 refs） |
| `refs/hydrogenation/` | 指向分析师包 + `designer-h-id-map.md`（H10=标牌探头） |
| `/workspace/out/equipment-refs-789/hydrogenation/` | 权威设备参考 A→G |
| `shots/accept-h8-*.png` | 验收截图 |
| `/workspace/out/design-v1-工艺789/` | 设计师 M1 视觉稿 |

## 已就绪 vs 等待

| 就绪 | 等待 |
|---|---|
| common-shell HUD 结构/token/占位符约定 | 分析师设备参考图包 → 按图建模 |
| 加氢 JSON 灌装 · 时间轴 · flyTo · 知识卡 · 底栏 | 管内箭头流 / 分子层 / 闪爆粒子完整态 |
| 报警演示面板对齐 08-safety（%LEL / ESD 入口） | 氟化/重氮化厂区深化 |
| 三工艺路由 stub | deed.page 发布（未做） |

## 交互

播放/暂停 · ←→ 切步 · 剖视 · ⚠ 报警演示 · 复位 · 点击设备/标牌 → `#card` · 事故步镜头可不 flyTo

---
*3D开发 · UI 对设计师 design-v1 · 设备等分析师 ref pack · 2026-10-28*

## 状态（2026-10-28 Asia/Shanghai）
- **加氢 `?p=8`**：M2 终验通过；全景 H07/H09/H11 标牌可读；H₂ 白 / N₂ 蓝。
- **氟化 `?p=7`**：M3 按 `equipment-refs-789/fluorination` 建完 F01–F10；HF `#c8e86c`≠安全绿；F₂ 对比默认关；F04 知识卡含「搪玻璃/PTFE/哈氏合金示意」。
- **重氮化 `?p=9`**：入口 stub。
- 验收截图：`shots/accept-h8-*.png`、`shots/accept-f7-*.png`。

- **重氮化 `?p=9`**：M4 按 refs 建完 D01–D09（D08 偶合默认关）；0～5 ℃ 徽章；冰蓝夹套 / 重氮盐色；事故「受热分解示意」无燃爆/%LEL。
- 验收截图：`shots/accept-d9-*.png`。

## SoftGL 截图 vs 真机 GPU

本机无 GPU 时 Chrome SoftGL/SwiftShader 截图往往比真机更亮、更平（IBL/阴影/Bokeh 路径不同；SoftGL 强制关 Bokeh）。
- 真机/日常预览：boot 默认不变（AgX exposure 2.2 等）。
- 截图管线：URL 加 `softShot=1`（或 `window.__app.applySoftGLShotGrade()`）仅在 SoftGL 下调暗：exposure×0.48、env×0.75、bloom×0.4，并显示角标「SoftGL 示意 · 真机偏暗」。
- 标定对照：`shots/softgl-vs-gpu-BEFORE-bright.png` / `shots/softgl-vs-gpu-AFTER-graded.png`。
