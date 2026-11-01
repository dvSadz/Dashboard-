/* ═══════════════════════════════════════════════════
   ETERNAL · script.js  (JS puro — abre direto no navegador)
   ═══════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════
// 🔴 EDITE AQUI — Seu perfil, redes e links
// ═══════════════════════════════════════════════════
const PERFIL = {
  nome: "BEST BEAMER!",
  arroba: "@EternalBMZ",
  sobre: "Bem-vindo ao dashboard da Eternal. Aqui você encontra os melhores websites, além dos métodos e geradores exclusivos.",
  status: "EternalOnTop",   // pequena etiqueta ao lado do nome (deixe "" para esconder)
  avatar: "https://cdn.discordapp.com/attachments/1553113412051935232/1566337183432974478/f16e66207983ddb1d41d967a0a20a29b.gif?ex=6ae82cad&is=6ae6db2d&hm=7cd693f628c0e02b036702a35aaba29dabb885fe884c5d52ad75a49ea0aee59f&",             // opcional: link/caminho de uma foto, ex: "foto.jpg"
  banner: "https://cdn.discordapp.com/attachments/1553113412051935232/1565921900356444361/3e2076cae7ad7a02c05cfa82178bb57a.gif?ex=6ae7fb6a&is=6ae6a9ea&hm=3c15493741b338a322fb5bf76f9263278b03f11956c73722800e0a4d7c75b38d&"              // opcional: imagem da capa do perfil, ex: "capa.jpg"
};

// Redes do perfil. Tipos: email, instagram, tiktok, twitter, facebook, youtube, github, linkedin, telegram, link
// Para e-mail pode usar só o endereço: { tipo: "email", url: "voce@email.com" }
const REDES = [
  { tipo: "Discord",     url: "https://discord.gg/3eRXqhxpt" }
];

// Formato dos links (copie uma linha, cole embaixo e troque os valores):
// { nome: "Nome do Site", url: "https://site.com", desc: "texto opcional embaixo do nome" },
// Se não colocar "desc", aparece o endereço do site. ⚠️ Cada linha termina com vírgula.
const SITES = [
  { nome: "Shockify",    url: "https://shockify.st/?code=NzA5NDM4NzEyMzQwMjE4NzIwMF8zMjM0NDQ4MTU0ODA4ODY1MDY1" },
  { nome: "Immortal",    url: "https://immortal.st/?code=ODIyODQ1Nzg3ODEyNDY3MzAzXzMyMzQ0NDgxNTQ4MDg4NjUwNjU=" },
  { nome: "UltimaX",  url: "https://app.beamse.pro/gen/EternalBeam" },
  { nome: "Splunk",     url: "https://app.beamers.si/u/Eternal" },
  { nome: "AutoHar",  url: "https://bloxtool.top/auth?ref=516013" },
  { nome: "Eternal Gen",    url: "https://eternal-generator.lovable.app/" },
  { nome: "Hyperlink",    url: "https://devakz.github.io/ETNXLINK-/" }
];

// Card de destaque no topo da lista (coloque  const DESTAQUE = null;  para esconder)
const DESTAQUE = { tag: "Destaque", titulo: "Meus projetos", texto: "Tudo que estou construindo, num só lugar.", url: "https://github.com", botao: "Abrir", imagem: "" };
// ═══════════════════════════════════════════════════
// FIM DA ÁREA EDITÁVEL — não precisa mexer daqui pra baixo
// ═══════════════════════════════════════════════════

(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };
  const safeUrl = (u) => { try { const x = new URL(u); return /^https?:$/.test(x.protocol) ? x.href : '#'; } catch { return '#'; } };
  const safeSocial = (r) => {
    let u = String(r.url || '').trim();
    if (r.tipo === 'email' && u && !/^mailto:/i.test(u)) u = 'mailto:' + u;
    return /^(https?:|mailto:)/i.test(u) ? u : '#';
  };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EXT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
  const ICON = {
    email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    tiktok: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',
    twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    telegram: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
  };

  /* ── Perfil ── */
  document.title = PERFIL.nome;
  $('nome').textContent = PERFIL.nome;
  $('arroba').textContent = PERFIL.arroba;
  $('bio').textContent = PERFIL.sobre;
  $('foot').textContent = '© ' + new Date().getFullYear() + ' ' + PERFIL.nome;
  $('nLinks').textContent = SITES.length; $('nRedes').textContent = REDES.length;
  if (PERFIL.status) { $('statusTxt').textContent = PERFIL.status; $('status').hidden = false; }
  const av = $('avatar');
  if (PERFIL.avatar) av.innerHTML = `<img src="${esc(PERFIL.avatar)}" alt="${esc(PERFIL.nome)}">`;
  else av.textContent = PERFIL.nome.charAt(0).toUpperCase();
  if (PERFIL.banner) { $('cover').style.backgroundImage = `url("${PERFIL.banner.replace(/"/g, '%22')}")`; $('cover').classList.add('img'); }

  $('socials').innerHTML = REDES.map((r) => {
    const t = ICON[r.tipo] ? r.tipo : 'link';
    return `<a href="${esc(safeSocial(r))}" target="_blank" rel="noopener noreferrer" aria-label="${esc(t)}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[t]}</svg></a>`;
  }).join('');

  /* ── Destaque ── */
  const feat = $('featured');
  if (DESTAQUE) {
    feat.href = safeUrl(DESTAQUE.url);
    feat.innerHTML = `<span class="f-txt"><span class="tag">${esc(DESTAQUE.tag || 'Destaque')}</span><b>${esc(DESTAQUE.titulo)}</b><small>${esc(DESTAQUE.texto || '')}</small><span class="btn">${esc(DESTAQUE.botao || 'Abrir')}${EXT}</span></span>
      <span class="f-art${DESTAQUE.imagem ? ' has' : ''}">${DESTAQUE.imagem ? `<img src="${esc(DESTAQUE.imagem)}" alt="">` : ''}</span>`;
  } else feat.remove();

  /* ── Links ── */
  const links = $('links');
  links.innerHTML = SITES.map((s, i) => {
    const d = host(s.url);
    return `<a class="link" data-k="${esc((s.nome + ' ' + d + ' ' + (s.desc || '')).toLowerCase())}" style="--i:${i + 4}" href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.nome)}, ${esc(d)}">
      <span class="favicon"><img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(d)}&sz=128" alt="" loading="lazy" width="24" height="24" data-l="${esc(s.nome.charAt(0).toUpperCase())}"></span>
      <span class="txt"><span class="t">${esc(s.nome)}</span><span class="s">${esc(s.desc || d)}</span></span>
      <span class="ext" aria-hidden="true">${EXT}</span>
    </a>`;
  }).join('') + '<p class="empty" hidden>Nenhum link encontrado.</p>';
  links.querySelectorAll('img[data-l]').forEach((img) => img.addEventListener('error', () => {
    const b = document.createElement('b'); b.className = 'fb'; b.textContent = img.dataset.l; img.replaceWith(b);
  }, { once: true }));

  /* ── Busca ── */
  const q = $('q'), shown = $('shown'), empty = links.querySelector('.empty');
  const cards = [...links.querySelectorAll('.link')];
  function filter() {
    const n = q.value.trim().toLowerCase(); let c = 0;
    cards.forEach((el) => { const ok = !n || el.dataset.k.includes(n); el.hidden = !ok; if (ok) c++; });
    empty.hidden = c > 0;
    shown.textContent = n ? `${c} de ${cards.length}` : String(cards.length);
  }
  filter();
  q.addEventListener('input', filter);
  q.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { const a = cards.find((el) => !el.hidden); if (a) window.open(a.href, '_blank', 'noopener'); }
    if (e.key === 'Escape') { q.value = ''; filter(); q.blur(); }
  });
  addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== q && !e.metaKey && !e.ctrlKey) { e.preventDefault(); q.focus(); }
  });

  /* ── Grade / lista ── */
  const segs = [...document.querySelectorAll('.seg button')];
  function setView(v) {
    links.classList.toggle('grid', v === 'grid'); links.classList.toggle('list', v === 'list');
    segs.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === v)));
    try { localStorage.setItem('eternal-view', v); } catch {}
  }
  let saved = 'grid'; try { saved = localStorage.getItem('eternal-view') || 'grid'; } catch {}
  setView(saved === 'list' ? 'list' : 'grid');
  segs.forEach((b) => b.addEventListener('click', () => setView(b.dataset.v)));

  /* ── Luz suave que segue o mouse nas bordas ── */
  let raf = 0, last = null;
  const lit = [...cards, feat].filter(Boolean);
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    last = e; if (raf) return;
    raf = requestAnimationFrame(() => { raf = 0; lit.forEach((c) => { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (last.clientX - r.left) + 'px'); c.style.setProperty('--my', (last.clientY - r.top) + 'px'); }); });
  }, { passive: true });

  /* ── Fundo: constelação discreta ── */
  const cv = $('net'), cx = cv.getContext('2d');
  const m = { x: 0, y: 0, on: false };
  let W = 0, H = 0, D = 1, P = [];
  const small = () => innerWidth < 641;
  function init() {
    D = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * D; H = cv.height = innerHeight * D;
    const n = Math.min(small() ? 55 : 110, Math.round(innerWidth * innerHeight / 12000));
    P = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: (Math.random() * .8 + .5) * D,
      vx: (Math.random() - .5) * .3 * D, vy: (Math.random() - .5) * .3 * D, red: Math.random() < .2
    }));
  }
  function frame() {
    cx.clearRect(0, 0, W, H);
    const L = (small() ? 110 : 150) * D, M = (small() ? 150 : 200) * D;
    cx.lineWidth = D * .7;
    if (!reduced) for (const p of P) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    for (let i = 0; i < P.length; i++) {
      const a = P[i];
      for (let j = i + 1; j < P.length; j++) {
        const b = P[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < L) { cx.strokeStyle = a.red ? `rgba(255,40,40,${(1 - d / L) * .32})` : `rgba(255,255,255,${(1 - d / L) * .2})`; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke(); }
      }
      if (m.on) {
        const d = Math.hypot(a.x - m.x, a.y - m.y);
        if (d < M) { cx.strokeStyle = `rgba(255,255,255,${(1 - d / M) * .45})`; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(m.x, m.y); cx.stroke(); }
      }
    }
    for (const p of P) { cx.fillStyle = p.red ? 'rgba(255,60,60,.85)' : 'rgba(255,255,255,.65)'; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fill(); }
    if (m.on) { cx.fillStyle = '#fff'; cx.beginPath(); cx.arc(m.x, m.y, 2 * D, 0, 6.283); cx.fill(); }
  }
  const loop = () => { frame(); requestAnimationFrame(loop); };
  const move = (x, y) => { m.x = x * D; m.y = y * D; m.on = true; };
  addEventListener('pointermove', (e) => { if (!reduced) move(e.clientX, e.clientY); }, { passive: true });
  addEventListener('touchstart', (e) => { const t = e.touches[0]; if (t && !reduced) move(t.clientX, t.clientY); }, { passive: true });
  addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t && !reduced) move(t.clientX, t.clientY); }, { passive: true });
  ['touchend', 'touchcancel'].forEach((ev) => addEventListener(ev, () => { m.on = false; }, { passive: true }));
  document.documentElement.addEventListener('mouseleave', () => { m.on = false; });
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { init(); if (reduced) frame(); }, 200); });
  init(); reduced ? frame() : requestAnimationFrame(loop);
})();
