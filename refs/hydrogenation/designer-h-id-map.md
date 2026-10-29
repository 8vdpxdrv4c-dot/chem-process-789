# UI 设备 ID → 加氢参考图（canonical）

> 源目录：`/workspace/out/equipment-refs-789/hydrogenation/`  
> UI 标签来自 `design-v1-工艺789/08-hydrogenation-main.html` 与需求 §4.4。  
> **不新增图片**；仅映射已有文件。3D 直接按此路径打开参考。

| UI ID | 中文名 | 优先参考图（1～2） | 建模要点（摘自 README） |
|---|---|---|---|
| **H01** | 氢气缓冲罐 | `E-storage-tanks/chemical-works-hydrogen-tank.jpg`<br>`E-storage-tanks/druckbehaelter-pressure-vessel.jpg` | 厚壁压力罐剪影；白色 H₂ 色环；安全阀简化 |
| **H02** | N₂ 置换阀组 | `H-nitrogen-blanketing/industrial-gas-cylinder-rack.jpg`<br>`F-pipe-rack-valves/three-gate-valves.jpg` + `rotork-pneumatic-ball-valve.jpg` | 瓶组/汇流排 + 多阀撬；气动切断可闪烁 |
| **H03** | 底物进料（硝基苯） | `E-storage-tanks/constable-hook-tanks.jpg`<br>`E-storage-tanks/druckbehaelter-pressure-vessel.jpg` | 常压/低压储罐 + 泵撬暗示；琥珀物料色带 |
| **H04** | 进料换热器 | `D-heat-exchanger/shell-tube-hx-piping.jpg`<br>`D-heat-exchanger/rohrbuendel-waermetauscher.jpg` | 卧式管壳；管箱法兰；剖视见管束 |
| **H05** | 加氢反应器（固定床） | `A-fixed-bed-reactor/naphta-hydrotreating-plant.jpg`<br>`A-fixed-bed-reactor/druckbehaelter02-tall-vessel.jpg`<br>剖视：`catalyst-bed-cutaway/ammonia-reactor-cutaway.svg` | 立式高细比 + 裙座；多层触媒；测温套管 |
| **H06** | 出料换热器 | 同 H04：`D-heat-exchanger/exchanger-industrial.JPG`<br>`cologne-hx-shell-inspection.jpg` | 与 H04 同模改位；冷却环带 |
| **H07** | 高压气液分离器 | `C-gas-liquid-separator/vapor-liquid-separator-schematic.png`<br>`C-gas-liquid-separator/air-receiver-knockout-style-vessel.jpg`<br>（补充）`h07-pressure-vessel-druck.jpg` | 立式矮胖 KO drum；顶气底液；demister 剖视 |
| **H08** | 循环氢压缩机 | `B-hydrogen-compressor/prottes-process-gas-compressor.jpg`<br>`B-hydrogen-compressor/hydrogen-compressor-pump.jpg` | 撬块矮胖；气缸/护罩；相对反应器体积小 |
| **H09** | 火炬 | `G-flare-tip/gas-flare-chemical-plant.jpg`<br>`G-flare-tip/enclosed-gas-flare.jpg` | 高细比筒 + tip；火焰用粒子 |
| **H10** | 可燃气体探头 | `I-gas-detector/fixed-gas-detector.jpg`<br>`I-gas-detector/oldham-ex2000-lel.jpg`<br>`I-gas-detector/portable-lel-detector.jpg`（手持 LEL，仅造型参考） | 管廊挂壁小盒/探头头 + 标牌；报警可闪红；远景勿做成人手持仪 |
| **H11** | 产物储罐（苯胺） | `E-storage-tanks/constable-hook-tanks.jpg`<br>`E-storage-tanks/druckbehaelter-pressure-vessel.jpg` | 与 H03 同族改色环（紫蓝产物） |

## 共用

| 用途 | 路径 |
|---|---|
| 管廊 / 泄漏法兰 | `F-pipe-rack-valves/*` |
| 床层温峰云图语言 | `catalyst-bed-cutaway/fixed-bed-temperature-profile.png` |
| 厂区电影感天际线 | `A-fixed-bed-reactor/yara-ammonia-plant-detail.JPG` |

## 缺口（勿阻塞建模）

- ~~H10 探头单体近景~~（已补 `I-gas-detector/`）  
- 加氢反应器裙座人孔近景（README TODO 已列）  
- API 618 氢压机撬块厂家图（版权）  

许可与字节见同目录 `manifest.json`。
