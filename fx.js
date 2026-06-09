/* ============================================================
   fx.js — interaction polish: scroll reveal, custom cursor, parallax.
   GPU-friendly: positions via transform/translate3d, ONE rAF loop.
   Degrades on touch / reduced-motion.
   ============================================================ */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ---- scroll reveal (staggered) ---- */
  if (!reduce && typeof IntersectionObserver !== "undefined") {
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -36px 0px" });
    document.querySelectorAll(".panel, .card, .pet").forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }

  if (touch || reduce) return;   // desktop-only polish below

  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const bg = document.getElementById("bg");
  const av = document.querySelector(".avatar-frame");
  if (dot) document.body.classList.add("fx-cursor");

  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  let tx = 0, ty = 0, px = 0, py = 0;

  addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    tx = mx / innerWidth - 0.5; ty = my / innerHeight - 0.5;
    if (dot) dot.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;   // cheap (compositor)
  }, { passive: true });

  const HOT = "a,button,.tab,.evidence img,.pet,.avatar-frame";
  document.addEventListener("mouseover", (e) => { if (ring && e.target.closest(HOT)) ring.classList.add("hot"); });
  document.addEventListener("mouseout", (e) => { if (ring && e.target.closest(HOT)) ring.classList.remove("hot"); });

  (function loop() {
    rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
    if (ring) ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
    px += (tx - px) * 0.06; py += (ty - py) * 0.06;
    if (bg) bg.style.transform = `translate3d(${px * -16}px,${py * -11}px,0) scale(1.06)`;
    if (av) av.style.transform = `translate3d(${px * 6}px,${py * 5}px,0)`;
    requestAnimationFrame(loop);
  })();
})();
