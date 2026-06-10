/* ============================================================
   app.js — renders the sheet from CHARACTER + animations + ASCII bg
   ============================================================ */
(function () {
  const C = CHARACTER;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[m]));
  const stars = (n, max = 5) => "★".repeat(n) + `<span class="soft">${"☆".repeat(Math.max(0, max - n))}</span>`;
  const maxStat = Math.max(...C.stats.map(s => s.val));
  // XP bar literally tracks my age — fills from my last birthday (May 1) to the next
  const _now = new Date(), _y = _now.getFullYear();
  let _bday = new Date(_y, 4, 1);
  if (_now < _bday) _bday = new Date(_y - 1, 4, 1);
  const _next = new Date(_bday.getFullYear() + 1, 4, 1), _DAY = 86400000;
  const ageDay = Math.floor((_now - _bday) / _DAY);
  const ageDays = Math.round((_next - _bday) / _DAY);
  const xpPct = Math.min(100, Math.max(0, Math.round((_now - _bday) / (_next - _bday) * 100)));

  /* ---------- header ---------- */
  $("hdr").innerHTML = `
    <div class="tag-class">${esc(C.class)}</div>
    <h1>${esc(C.name)} <span class="lvl">· Lv ${C.level}</span></h1>
    <div class="bars">
      <div class="xp" title="HP — restored by: plov, sleep, a free weekend">
        <span class="xp-cap hp">HP</span>
        <div class="xp-bar hp"><i style="width:90%"></i></div>
        <span class="xp-num">9 / 10</span>
      </div>
      <div class="xp" title="MP — spent on: deep work, worldbuilding, late-night ideas">
        <span class="xp-cap mp">MP</span>
        <div class="xp-bar mp"><i style="width:75%"></i></div>
        <span class="xp-num">15 / 20</span>
      </div>
      <div class="xp" title="age ${C.level} → ${C.level + 1} on May 1 · ${xpPct}% of the year done">
        <span class="xp-cap">XP</span>
        <div class="xp-bar"><i style="width:${xpPct}%"></i></div>
        <span class="xp-num">day ${ageDay}/${ageDays} · ${xpPct}% to Lv ${C.level + 1}</span>
      </div>
    </div>
    <p class="tagline">${esc(C.title)} — “${esc(C.tagline)}”</p>
    <div class="meta">
      <span>📍 ${esc(C.origin)}</span>
      <a href="mailto:${esc(C.contact.email)}">✉ ${esc(C.contact.email)}</a>
      <a href="${esc(C.contact.github)}" target="_blank" rel="noopener">⌥ github.com/Alyasska</a>
    </div>`;

  /* ---------- avatar (fallback chain: cut → original → ascii) ---------- */
  function mountAvatar(frame) {
    const cut = C.avatar.replace(/avatar\.png$/, "avatar-cut.png");
    const srcs = [cut, C.avatar];
    let i = 0;
    const img = new Image();
    img.alt = C.name;
    img.className = "avatar cut";
    img.onerror = () => {
      i++;
      if (i < srcs.length) { img.classList.toggle("cut", i === 0); img.src = srcs[i]; }
      else frame.innerHTML = `<pre class="soft" style="text-align:left;font-size:11px;margin:0;padding:14px">  [ no avatar yet ]\n  drop pfp.png →\n  assets/avatar.png</pre>`;
    };
    frame.appendChild(img);
    img.src = srcs[0];
  }

  /* ---------- stat hexagon (radar chart) ---------- */
  const statHexagon = () => {
    const S = C.stats, n = S.length, cx = 130, cy = 122, R = 90;
    const pt = (val, i) => { const a = (-90 + i * 360 / n) * Math.PI / 180, r = R * (val / 10); return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
    const ptS = (val, i) => pt(val, i).map(v => v.toFixed(1)).join(",");
    const ring = (lvl) => S.map((s, i) => ptS(10 * lvl, i)).join(" ");
    const grid = [0.25, 0.5, 0.75, 1].map(l => `<polygon points="${ring(l)}" class="hx-grid"/>`).join("");
    const axes = S.map((s, i) => { const [x, y] = pt(10, i); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="hx-axis"/>`; }).join("");
    const poly = S.map((s, i) => ptS(s.val, i)).join(" ");
    const dots = S.map((s, i) => { const [x, y] = pt(s.val, i); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" class="hx-dot"/>`; }).join("");
    const labels = S.map((s, i) => { const [x, y] = pt(11.8, i); return `<text x="${x.toFixed(1)}" y="${(y - 1).toFixed(1)}" class="hx-label">${esc(s.key)}</text><text x="${x.toFixed(1)}" y="${(y + 11).toFixed(1)}" class="hx-num">${s.val}</text>`; }).join("");
    return `
      <div class="panel">
        <div class="h2">Stats</div>
        <div class="hx-wrap">
          <svg viewBox="0 0 260 250" class="hexradar" role="img" aria-label="stats hexagon">
            ${grid}${axes}<polygon points="${poly}" class="hx-fill"/>${dots}${labels}
          </svg>
        </div>
        <ul class="hx-legend">${S.map(s => `<li><b>${esc(s.key)}</b><span>${esc(s.label)}</span><i>${esc(s.note)}</i></li>`).join("")}</ul>
      </div>`;
  };
  function animateStats() {}   /* (stats are an SVG hexagon now; CSS handles the reveal) */

  /* ---------- 3D skill wheel (spin by moving the cursor) ---------- */
  const rankStars = (r) => `${"★".repeat(r)}<span class="dim">${"★".repeat(5 - r)}</span>`;
  const skillWheel = () => {
    const P = C.perks || [], n = P.length || 1;
    const cards = P.map((p, i) => `
        <div class="sw-card ${esc(p.tier)}" style="transform:translate(-50%,-50%) rotateY(${(i * 360 / n).toFixed(2)}deg) translateZ(var(--sw-r))">
          <span class="pk-name">${esc(p.icon)} ${esc(p.name)}</span>
          <div class="pk-rank">${rankStars(p.rank)}</div>
          <div class="pk-tools">⚒ ${esc(p.tools)}</div>
        </div>`).join("");
    return `
      <div class="panel">
        <div class="h2">Skills</div>
        <div class="skillwheel" id="skillWheel" style="--sw-n:${n}">
          <div class="sw-stage" id="swStage">${cards}</div>
        </div>
        <div class="sw-hint">↔ move your cursor over the wheel to spin</div>
      </div>`;
  };
  function initWheel() {
    const wheel = $("skillWheel"), stage = $("swStage");
    if (!wheel || !stage || wheel._init) return;
    wheel._init = true;
    const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { wheel.classList.add("flat"); return; }
    let angle = 0, vel = 0.18, target = 0.18;
    wheel.addEventListener("mousemove", (e) => {
      const r = wheel.getBoundingClientRect();
      target = ((e.clientX - r.left) / r.width - 0.5) * 7;   // cursor X → spin speed/direction
    }, { passive: true });
    wheel.addEventListener("mouseleave", () => { target = 0.18; });   // gentle auto-drift
    (function loop() {
      vel += (target - vel) * 0.08; angle += vel;
      stage.style.transform = `rotateY(${angle.toFixed(2)}deg)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- panels ---------- */
  const sidebar = () => `
    <div>
      <div class="panel avatar-wrap">
        <div class="avatar-frame" id="avatarFrame"></div>
        <ul class="id-list">
          <li><span class="k">class</span><span>${esc(C.class)}</span></li>
          <li><span class="k">title</span><span>${esc(C.title)}</span></li>
          <li><span class="k">level</span><span>${C.level}</span></li>
          <li><span class="k">origin</span><span>${esc(C.origin)}</span></li>
        </ul>
      </div>
      <div class="panel">
        <div class="h2">Languages</div>
        <ul class="id-list">${C.languages.map(l => { const [a, b] = l.split(" — "); return `<li><span>${esc(a)}</span><span class="k">${esc(b || "")}</span></li>`; }).join("")}</ul>
      </div>
    </div>`;

  const character = () => `
    <div class="grid">
      ${sidebar()}
      <div>
        <div class="panel"><div class="h2">about me</div><div class="codex" id="aboutCodex">${esc(C.codex)}</div></div>
        ${statHexagon()}
        ${skillWheel()}
      </div>
    </div>`;

  const questCard = (q) => `
    <div class="card">
      <div class="row">
        <div><h3>${esc(q.title)}</h3><div class="giver">${esc([q.giver, q.dates].filter(Boolean).join(" · "))}</div></div>
        <div style="text-align:right">
          ${q.status ? `<span class="badge ${q.status === "ACTIVE" ? "active" : "complete"}">${esc(q.status)}</span>` : ""}
          <div class="diff" title="difficulty">${stars(q.diff)}</div>
          ${q.exp ? `<div class="exp-chip">+${q.exp.toLocaleString()} XP</div>` : ""}
        </div>
      </div>
      <ul class="log">${q.log.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      ${q.reward ? `<div class="reward">reward — <b>${esc(q.reward)}</b></div>` : ""}
      ${q.photos && q.photos.length ? `<div class="evidence">${q.photos.map(s => `<img src="${esc(s)}" alt="evidence" loading="lazy">`).join("")}</div>` : ""}
    </div>`;

  const quests = () => `
    <div class="h2">Quest Log — contracts</div>
    <div class="q-grid">${C.quests.map(questCard).join("")}</div>
    <div class="h2" style="margin-top:16px">Trials — tournaments &amp; hackathons</div>
    <div class="q-grid">${C.trials.map(questCard).join("")}</div>`;

  const pets = () => `
    <div class="h2">Pets — pet projects 🐾</div>
    <div class="pets">${C.pets.map(p => `
      <div class="pet">
        <span class="lvl-chip">Lv ${p.lvl}</span>
        <div class="sigil">${esc(p.sigil || "✦")}</div>
        <h3>${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name)}</h3>
        <div class="species">${esc(p.species)}</div>
        <div class="desc">${esc(p.desc)}</div>
        <div class="tags">${p.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      </div>`).join("")}</div>`;

  const guilds = () => `
    <div class="h2">Allegiances — guilds &amp; factions</div>
    ${C.guilds.map(g => `
      <div class="card">
        <div class="row">
          <div class="g-head">${g.logo ? `<img class="g-logo" src="${esc(g.logo)}" alt="" loading="lazy">` : ""}<div><h3>${esc(g.name)}</h3><div class="giver">${esc(g.org)} · ${esc(g.years)}</div></div></div>
          <span class="badge active">${esc(g.rank)}</span>
        </div>
        <p style="margin:10px 0 0">${esc(g.blurb)}</p>
        ${g.ig ? `<a class="ig" href="${esc(g.ig)}" target="_blank" rel="noopener">📷 Instagram →</a>` : ""}
        ${g.photos && g.photos.length ? `<div class="evidence">${g.photos.map(s => `<img src="${esc(s)}" alt="event" loading="lazy">`).join("")}</div>` : ""}
        ${g.games && g.games.length ? `<details class="games-wrap"><summary>🎲 ${g.games.length} board games I can teach</summary><div class="games">${g.games.map(x => `<span class="game">${esc(x)}</span>`).join("")}</div></details>` : ""}
      </div>`).join("")}`;

  const codex = () => `
    <div class="grid">
      <div class="panel"><div class="h2">Achievements</div>
        <ul class="ach">${C.achievements.map(a => `<li>${esc(a)}</li>`).join("")}</ul>
      </div>
      <div class="panel"><div class="h2">Contact</div>
        <ul class="id-list">
          <li><span class="k">email</span><a href="mailto:${esc(C.contact.email)}">${esc(C.contact.email)}</a></li>
          <li><span class="k">github</span><a href="${esc(C.contact.github)}" target="_blank" rel="noopener">/Alyasska</a></li>
          <li><span class="k">where</span><span>${esc(C.contact.location)}</span></li>
        </ul>
      </div>
    </div>`;

  /* ---------- tabs ---------- */
  const TABS = [
    { id: "character", label: "character", render: character },
    { id: "quests",    label: "quests",    render: quests },
    { id: "pets",      label: "pets",      render: pets },
    { id: "guilds",    label: "guilds",    render: guilds },
    { id: "codex",     label: "more",      render: codex },
  ];
  $("nav").innerHTML = TABS.map((t, i) =>
    `<button class="tab" role="tab" id="tab-${t.id}" aria-controls="panel-${t.id}" aria-selected="${i === 0}">${t.label}</button>`).join("");
  $("main").innerHTML = TABS.map((t, i) =>
    `<section role="tabpanel" id="panel-${t.id}" aria-labelledby="tab-${t.id}" ${i === 0 ? "" : "hidden"}>${t.render()}</section>`).join("");

  function select(id) {
    TABS.forEach(t => {
      $("tab-" + t.id).setAttribute("aria-selected", String(t.id === id));
      $("panel-" + t.id).toggleAttribute("hidden", t.id !== id);
    });
    $("main").scrollTop = 0;
    if (id === "character") { animateStats(); typeAbout(); initWheel(); }
    history.replaceState(null, "", "#" + id);
  }
  $("nav").addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) select(b.id.replace("tab-", "")); });
  $("nav").addEventListener("keydown", e => {            // arrow-key tab nav (also correct a11y)
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const cur = TABS.findIndex(t => $("tab-" + t.id).getAttribute("aria-selected") === "true");
    const ni = (cur + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    select(TABS[ni].id); $("tab-" + TABS[ni].id).focus();
  });

  /* ---------- typewriter "about me" (NPC dialogue) ---------- */
  let aboutTyped = false;
  function typeAbout() {
    const el = $("aboutCodex");
    if (!el || aboutTyped) return;
    const full = el.dataset.full || el.textContent || "";
    el.dataset.full = full; aboutTyped = true;
    const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !full) { el.textContent = full; return; }
    let i = 0; el.textContent = ""; el.classList.add("typing");
    el.addEventListener("click", () => { i = full.length; el.textContent = full; el.classList.remove("typing"); });
    (function tick() {
      if (i < full.length) { i++; el.textContent = full.slice(0, i); setTimeout(tick, full[i - 1] === "\n" ? 55 : 16); }
      else el.classList.remove("typing");
    })();
  }

  /* ---------- status bar ---------- */
  $("status").innerHTML =
    `<span>● <b>LVL ${C.level}</b> · ${esc(C.class)} · REGION: ${esc(C.origin.split(",")[0].toUpperCase())}</span>
     <span>SAVE ✓ autosaved · <a href="mailto:${esc(C.contact.email)}">${esc(C.contact.email)}</a> · <a href="${esc(C.contact.github)}" target="_blank" rel="noopener">/Alyasska</a></span>`;

  /* ---------- init ---------- */
  mountAvatar($("avatarFrame"));
  const fromHash = location.hash.replace("#", "");
  if (TABS.some(t => t.id === fromHash) && fromHash !== "character") select(fromHash);
  else { requestAnimationFrame(animateStats); typeAbout(); initWheel(); }

  /* animated ASCII island background lives in mapbg.js */
})();
