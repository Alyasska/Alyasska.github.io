/* ============================================================
   overlay.js — ambient ASCII effects ON TOP of everything:
   drifting clouds, flapping birds, falling leaves. Subtle, pointer-events: none.
   Throttled ~30fps; respects reduced-motion.
   ============================================================ */
(() => {
  const cv = document.getElementById("fx-overlay");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rnd = (a, b) => a + Math.random() * (b - a);
  let W, H, dpr, clouds, birds, leaves;

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
    const area = innerWidth * innerHeight;
    clouds = Array.from({ length: 6 }, () => ({ x: rnd(0, W), y: rnd(H * .04, H * .42), s: rnd(15, 25) * dpr, v: rnd(2, 5) * dpr / 100, a: rnd(.13, .22) }));
    birds = Array.from({ length: Math.min(13, Math.round(area / 130000) + 7) }, () => ({ x: rnd(0, W), y: rnd(H * .05, H * .58), s: rnd(15, 22) * dpr, v: rnd(10, 22) * dpr / 100, ph: rnd(0, 6.3), bob: rnd(2, 5) * dpr }));
    leaves = Array.from({ length: 8 }, () => ({ x: rnd(0, W), y: rnd(0, H), s: rnd(10, 15) * dpr, vy: rnd(4, 9) * dpr / 100, vx: rnd(-3, 3) * dpr / 100, ph: rnd(0, 6.3), g: ["✦", "·", "❧", "⚘"][(Math.random() * 4) | 0], a: rnd(.16, .26) }));
  }
  addEventListener("resize", resize, { passive: true });
  resize();

  function cloud(x, y, s, a) {
    ctx.fillStyle = `rgba(95,108,120,${a})`;
    ctx.font = `${s}px ui-monospace, Menlo, Consolas, monospace`;
    ctx.fillText(".-~-.", x, y);
    ctx.fillText("(     )", x - s * .35, y + s * .95);
    ctx.fillText("`-~-'", x, y + s * 1.9);
  }

  let last = 0;
  function frame(now) {
    if (!reduce) requestAnimationFrame(frame);
    if (now - last < 33) return;
    last = now;
    ctx.clearRect(0, 0, W, H);
    ctx.textBaseline = "middle"; ctx.textAlign = "left";

    for (const c of clouds) { if (!reduce) { c.x += c.v; if (c.x > W + 90) c.x = -90; } cloud(c.x, c.y, c.s, c.a); }

    for (const l of leaves) {
      if (!reduce) { l.y += l.vy; l.ph += .02; l.x += l.vx + Math.sin(l.ph) * .25 * dpr; if (l.y > H + 12) { l.y = -12; l.x = rnd(0, W); } }
      ctx.font = `${l.s}px ui-monospace, monospace`; ctx.fillStyle = `rgba(70,95,70,${l.a})`;
      ctx.fillText(l.g, l.x, l.y);
    }

    for (const b of birds) {
      if (!reduce) { b.x += b.v; b.ph += .25; if (b.x > W + 30) { b.x = -30; b.y = rnd(H * .08, H * .55); } }
      const yy = b.y + Math.sin(b.ph * .3) * b.bob;
      ctx.font = `${b.s}px ui-monospace, monospace`; ctx.fillStyle = "rgba(38,50,56,.8)";
      ctx.fillText(Math.sin(b.ph) > 0 ? "˄" : "⌃", b.x, yy);
    }
  }
  if (reduce) frame(0); else requestAnimationFrame(frame);
})();
