/**
 * 工艺 8 · 加氢工艺 — 首发可播主线（M0 闭合）
 * 默认：硝基苯催化加氢制苯胺；可选烯烃加氢开关（后续接 UI）。
 * 温度/压力为示意量级；事故演示教室克制档。
 */
export const hydrogenation = {
  id: 8,
  key: 'hydrogenation',
  short: '加氢',
  title: '加氢工艺（教学示意）',
  stub: false,
  reaction: 'C₆H₅NO₂ + 3H₂ → C₆H₅NH₂ + 2H₂O',
  dh: '催化加氢 · 放热（示意）',
  reactionNote: '教学示意 · 硝基苯→苯胺（默认）；烯烃加氢可切换',
  route: 'nitrobenzene', // 'olefin' 可选
  alarms: [
    { id: 'h2_leak', label: 'H₂ 泄漏 → %LEL → 闪爆（克制）' },
    { id: 'hotspot', label: '床层超温 / 飞温示意' },
    { id: 'esd', label: 'ESD 紧急切断 + 火炬放空' },
  ],
  devices: [
    {
      id: 'H01',
      title: '氢气缓冲罐',
      tag: 'H01 · 供应',
      body: '厚壁缓冲罐，接收管网/瓶组氢气，经调压后送往混合段。色环示意 H₂。',
      tip: '易错点：开车前须惰性气体置换，禁止直接通氢。',
    },
    {
      id: 'H02',
      title: '氮气置换阀组',
      tag: 'H02 · 置换',
      body: '多阀撬块，用 N₂ 清扫管线与设备内空气，避免形成爆炸性混合物。',
      tip: '置换合格后再切换到氢气。',
    },
    {
      id: 'H03',
      title: '进料泵 / 计量',
      tag: 'H03 · 进料',
      body: '将有机底物（默认硝基苯）计量送入预热器。',
      tip: '示意设备，非某厂专有泵型。',
    },
    {
      id: 'H04',
      title: '进料换热器',
      tag: 'H04 · 换热',
      body: '预热底物并与循环氢混合，达到催化剂活性温度窗口。',
      tip: '冷热环带为教学识别色。',
    },
    {
      id: 'H05',
      title: '加氢反应器',
      tag: 'H05 · 核心',
      body: '立式固定床（主示意）。多层触媒，气相/滴流示意；注意床层热点。',
      tip: '剖视可见床层占位；几何保真后续迭代。',
    },
    {
      id: 'H07',
      title: '高压气液分离器',
      tag: 'H07 · 分离',
      body: '冷却后气液分离：循环氢返回，粗产物下行。',
      tip: '副产水在分离示意中出现。',
    },
    {
      id: 'H08',
      title: '循环氢压缩机',
      tag: 'H08 · 循环',
      body: '补偿压降，将未反应氢送回反应器，提高原料利用率。',
      tip: '关闭循环后利用率示意下降。',
    },
    {
      id: 'H09',
      title: '火炬',
      tag: 'H09 · 安全',
      body: '事故/开停车时安全烧掉无法回收的可燃气体；正常仅长明灯。',
      tip: '教室演示火焰克制，勿写实爆炸冲击。',
    },
    {
      id: 'H11',
      title: '产物储罐',
      tag: 'H11 · 产物',
      body: '粗苯胺（或烷烃）暂存，标注「下游精制略」。',
      tip: '淡紫蓝色带为产物识别色。',
    },
  ],
  steps: [
    {
      name: '全景总览',
      sub: '氢气管廊 + 反应器 + 分离 + 火炬',
      risk: 'safe',
      riskLabel: '正常',
      params: [
        { k: '路线', v: '硝基→苯胺', hint: '默认 · 示意' },
        { k: 'H₂ 管廊', v: '白色标识', hint: '醒目' },
      ],
      safety: [
        'H₂ 爆炸极限宽（空气中约 4%～75% vol，示意）',
        '全厂沿主工艺线左→右布置',
      ],
      camera: { pos: [72, 48, 110], tgt: [8, 8, 0], fov: 42 },
    },
    {
      name: '氢气供应与置换',
      sub: 'N₂ 清管 → 再通 H₂',
      risk: 'warn',
      riskLabel: '警示',
      params: [
        { k: '置换介质', v: 'N₂', u: '', hint: '示意' },
        { k: 'H₂ 缓冲', v: '就绪', hint: '示意' },
      ],
      safety: [
        { text: '禁止「直接通氢」跳过置换', hot: true },
        '阀组状态灯：置换中 → 合格 → 通氢',
      ],
      reaction: '（本步无反应 · 物理置换）',
      reactionNote: '教学示意',
      camera: { pos: [-48, 22, 36], tgt: [-36, 8, -4], fov: 40 },
    },
    {
      name: '底物进料与换热',
      sub: '橙底物 + 白氢汇合',
      risk: 'safe',
      riskLabel: '运行中',
      params: [
        { k: '底物', v: '硝基苯', hint: '琥珀橙 · 示意' },
        { k: '预热', v: '开', hint: '示意' },
      ],
      safety: ['混合段密闭', '流量计量可读'],
      camera: { pos: [-8, 20, 42], tgt: [-6, 6, -2], fov: 40 },
    },
    {
      name: '催化加氢（核心）',
      sub: '固定床剖视 · 热点云图占位',
      risk: 'warn',
      riskLabel: '放热区',
      params: [
        { k: '温度', v: '50～200', u: '℃', hint: '依催化剂 · 示意' },
        { k: '压力', v: '0.5～5', u: 'MPa', hint: '示意量级' },
        { k: '催化剂', v: 'Ni/Pd/Pt', hint: '示意可选' },
        { k: '热点', v: '监测', hint: '云图后续' },
      ],
      safety: [
        { text: '加氢多为放热，防床层飞温', hot: true },
        '剖视开关可查看床层占位',
      ],
      dh: '放热 · 示意',
      camera: { pos: [28, 24, 34], tgt: [10, 12, -2], fov: 36 },
      cutaway: true,
    },
    {
      name: '换热与分离',
      sub: '冷却 · 气液分离 · 循环氢',
      risk: 'safe',
      riskLabel: '运行中',
      params: [
        { k: '循环氢', v: '开', hint: '利用率↑' },
        { k: '分离', v: '气/液', hint: '示意' },
      ],
      safety: ['循环提高原料利用率（非单程转化率口径）', '副产水随液相示意'],
      camera: { pos: [48, 26, 40], tgt: [28, 8, 2], fov: 40 },
    },
    {
      name: '产物后处理（简）',
      sub: '粗产物去储罐 · 精制略',
      risk: 'safe',
      riskLabel: '正常',
      params: [
        { k: '产物', v: '苯胺', hint: '淡紫蓝 · 示意' },
        { k: '下游', v: '精制略', hint: '不展开' },
      ],
      safety: ['短镜头，不展开精馏细节'],
      camera: { pos: [78, 22, 36], tgt: [58, 6, 6], fov: 40 },
    },
    {
      name: '安全与事故演示',
      sub: '泄漏 · %LEL · 闪爆 · ESD',
      risk: 'danger',
      riskLabel: '危险演示',
      params: [
        { k: '%LEL', v: '逼近', hint: '约 4% · 示意' },
        { k: 'ESD', v: '可触发', hint: '教室克制' },
      ],
      safety: [
        { text: 'H₂ 泄漏羽流 + 探头闪红', hot: true },
        '闪爆纯粒子、镜头锁定不强制 flyTo',
        '一键回正恢复初始',
      ],
      alarm: 'h2_leak',
      camera: { pos: [18, 18, 28], tgt: [8, 6, 0], fov: 38 },
    },
  ],
};
