/** 1920×1080 设计基准，等比缩放（默认居中，对标设计稿 fit） */
export const BASE_W = 1920;
export const BASE_H = 1080;

export function createStageFit(stageEl, { onResize, centered = true } = {}) {
  let SW = BASE_W;
  let SH = BASE_H;
  let scale = 1;

  function fit() {
    scale = Math.min(innerWidth / BASE_W, innerHeight / BASE_H) || 1;
    if (centered) {
      SW = BASE_W;
      SH = BASE_H;
      stageEl.style.width = BASE_W + 'px';
      stageEl.style.height = BASE_H + 'px';
      stageEl.style.transform = `scale(${scale})`;
      stageEl.style.left = ((innerWidth - BASE_W * scale) / 2) + 'px';
      stageEl.style.top = ((innerHeight - BASE_H * scale) / 2) + 'px';
    } else {
      SW = innerWidth / scale;
      SH = innerHeight / scale;
      stageEl.style.width = SW + 'px';
      stageEl.style.height = SH + 'px';
      stageEl.style.transform = `scale(${scale})`;
      stageEl.style.left = '0';
      stageEl.style.top = '0';
    }
    const lead = document.getElementById('lead');
    if (lead) {
      lead.setAttribute('width', String(SW));
      lead.setAttribute('height', String(SH));
    }
    onResize?.(SW, SH, scale);
  }

  addEventListener('resize', fit);
  fit();
  return {
    get SW() { return SW; },
    get SH() { return SH; },
    get scale() { return scale; },
    fit,
  };
}
