(() => {
  const WA_NUMBER = '27792686620';
  const EMAIL = 'info@buildsbybuchanan.com';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const rand = (n) => Math.floor(Math.random() * n);
  const fmt = (n) => 'R ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  /* ---------------- DATA ---------------- */
  const PRODUCTS = [
    { id: 'hoodie-blackout', cat: 'hoodies', name: 'BLACKOUT TACTICAL HOODIE', price: 1450, badge: 'CORE', stock: 'LOW STOCK',
      desc: '480 GSM organic cotton fleece. Black-on-black, oversized double-layered hood, zero visible branding.',
      imgs: ['hood4', 'hood6', 'hood7', 'mob8'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'hoodie-emblem', cat: 'hoodies', name: 'GRAPHIC EMBLEM HOODIE', price: 1550, badge: 'DROP 007',
      desc: '480 GSM heavy fleece. High-contrast screenprinted Syndicate emblem on back and chest.',
      imgs: ['hood11', 'hood12', 'hood13', 'night1'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'hoodie-nfc', cat: 'hoodies', name: 'NFC SYSTEM KEY HOODIE', price: 1650, badge: 'TECH', hot: true,
      desc: 'Waterproof NFC chip sewn into the wrist cuff — tap a phone and it routes straight to your portfolio or landing page.',
      imgs: ['hood1', 'hood3', 'hood5', 'mob6'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'hoodie-operator', cat: 'hoodies', name: 'OPERATOR HOODIE', price: 1500, badge: 'NEW',
      desc: 'Relaxed fit, dropped shoulders, hidden phone pocket and thumb-hole cuffs. Built for the night shift.',
      imgs: ['crew3', 'mob9', 'hood10', 'hood9'], sizes: ['S', 'M', 'L', 'XL'] },
    { id: 'tee-core', cat: 'tees', name: 'SYNDICATE CORE TEE', price: 550, badge: 'CORE',
      desc: '240 GSM boxy heavyweight tee. Tonal chest hit. The everyday uniform.',
      imgs: ['merch11', 'merch13', 'merch15', 'merch2'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'tee-manifesto', cat: 'tees', name: 'MANIFESTO TEE', price: 600, badge: 'LIMITED',
      desc: 'The Code printed down the back. Six rules. Limited to 100 pieces per run.',
      imgs: ['merch12', 'merch4', 'merch7', 'merch1'], sizes: ['S', 'M', 'L', 'XL'] },
    { id: 'balaclava', cat: 'headwear', name: 'BLACKOUT BALACLAVA', price: 350, badge: 'DROP GEAR', hot: true,
      desc: 'Fine-knit merino balaclava. The official Code Drop uniform. Breathable, warm, low-profile.',
      imgs: ['mob1', 'mob2', 'mob4', 'mob3'], sizes: ['ONE SIZE'] },
    { id: 'cap-ops', cat: 'headwear', name: 'OPS CAP', price: 420, badge: 'CORE',
      desc: 'Washed black six-panel. Tonal embroidery. Adjustable strap.',
      imgs: ['merch5', 'merch10', 'mob6', 'hood10'], sizes: ['ONE SIZE'] },
    { id: 'access-cards', cat: 'kit', name: 'NFC ACCESS CARDS ×25', price: 1250, badge: 'FOR BUSINESS',
      desc: 'Matte black NFC + QR business cards, programmed to your site. What we hand out at every drop — now for your brand.',
      imgs: ['code6', 'code3', 'night7', 'code1'], sizes: ['PROGRAMMED'] },
    { id: 'drop-kit', cat: 'kit', name: 'CODE DROP KIT', price: 2950, badge: 'BUNDLE', stock: '20 KITS',
      desc: 'Blackout hoodie + balaclava + core tee + 5 NFC access cards. Everything you need for the next drop.',
      imgs: ['mob5', 'hood4', 'mob1', 'merch11'], sizes: ['S', 'M', 'L', 'XL'] }
  ];

  const COURSES = [
    { id: 'course-fullstack', name: 'FULL-STACK WEB ARCHITECTURE & AUTOMATION', price: 5499, img: 'code5', featured: true },
    { id: 'course-api', name: 'API & AUTOMATION OPS', price: 3499, img: 'code2', tag: '8 WEEKS',
      desc: 'REST, webhooks, bots, payment and messaging integrations. Automate the boring half of any business.',
      meta: ['8 WEEKS', 'LIVE', 'PROJECT-BASED'] },
    { id: 'course-3d', name: '3D WEB & WEBGL EXPERIENCES', price: 2999, img: 'code4', tag: '6 WEEKS',
      desc: 'Three.js, shaders and scroll-driven 3D. The kind of sites people stop on the street to film.',
      meta: ['6 WEEKS', 'ON-DEMAND', 'PORTFOLIO'] },
    { id: 'course-freelance', name: 'FREELANCE OPERATOR BLUEPRINT', price: 1499, img: 'code3', tag: '4 WEEKS',
      desc: 'Pricing, quoting, contracts, client acquisition and delivery systems for South African developers.',
      meta: ['4 WEEKS', 'ON-DEMAND', 'TEMPLATES'] },
    { id: 'course-night', name: 'NIGHT SESSION: ZERO TO DEPLOYED', price: 0, img: 'code1', tag: 'FREE',
      desc: 'One evening. Build and deploy your first live website in Cape Town, laptop in hand. Limited seats.',
      meta: ['1 NIGHT', 'IN PERSON', 'CAPE TOWN'] },
    { id: 'course-mentor', name: '1:1 SYNDICATE MENTORSHIP', price: 2200, img: 'code6', tag: 'MONTHLY',
      desc: 'Weekly calls with a BuildsByBuchanan engineer, code reviews on your real projects, priority support.',
      meta: ['PER MONTH', '4 CALLS', 'CODE REVIEW'] }
  ];

  const PROGRAMS = [
    { id: 'fit-iron', name: 'IRON PROTOCOL', price: 899, img: 'gym1', tag: '12-WEEK STRENGTH',
      desc: 'Progressive strength program built for people who sit all day. App-tracked, coach-checked.',
      stats: ['3× / WEEK', '60 MIN', 'ALL LEVELS'] },
    { id: 'fit-run', name: 'NIGHT RUN CLUB', price: 0, img: 'run3', tag: 'THURSDAYS // FREE',
      desc: 'Sea Point promenade after dark. 5K and 10K groups. All-black kit encouraged.',
      stats: ['WEEKLY', '5K / 10K', 'FREE'] },
    { id: 'fit-strike', name: 'STRIKE', price: 1199, img: 'gym9', tag: 'BOXING CONDITIONING',
      desc: 'Bag work, pad work and conditioning. Sharpen reflexes, burn stress, build discipline.',
      stats: ['2× / WEEK', '75 MIN', 'GLOVES INCL.'] },
    { id: 'fit-devbody', name: 'DEV BODY RESET', price: 499, img: 'gym8', tag: 'MOBILITY // ONLINE',
      desc: 'Fix the desk posture. Daily 15-minute mobility and back-health routines you can do between deploys.',
      stats: ['DAILY', '15 MIN', 'AT HOME'] }
  ];

  const MOB = [
    ['mob2', 'tall', 'GHOST'], ['night11', 'wide', 'FORMATION'], ['mob7', 'sq', 'SIGNAL'], ['hood5', 'tall', 'OPERATOR'],
    ['mob4', 'sq', 'THE CREW'], ['night4', 'tall', 'CONVERGE'], ['mob1', 'tall', 'BLACKOUT'], ['hood13', 'sq', 'NIGHT SHIFT'],
    ['night6', 'tall', 'EXTRACTION'], ['mob8', 'wide', 'WATCH'], ['mob5', 'sq', 'NO FACE'], ['run4', 'tall', 'HORIZON'],
    ['night3', 'wide', 'CORRIDOR'], ['mob9', 'sq', 'SMOKE'], ['hood6', 'tall', 'SILENT'], ['night9', 'wide', 'CITY GRID'],
    ['mob3', 'sq', 'MASKED'], ['crew3', 'tall', 'HOODED'], ['night8', 'wide', 'AFTER DARK'], ['hood7', 'sq', 'HEADS DOWN']
  ];

  /* ---------------- RENDER ---------------- */
  const img = (name) => `img/${name}.jpg`;

  function renderMob() {
    const wall = $('#mobWall');
    wall.innerHTML = MOB.map(([src, shape, label], i) => {
      const n = String(i + 1).padStart(2, '0');
      const t = `${String(19 + (i % 5)).padStart(2, '0')}:${String((i * 17) % 60).padStart(2, '0')}`;
      return `<figure class="mob-item ${shape} reveal" data-i="${i}">
        <img src="${img(src)}" alt="API Syndicate operator — ${label.toLowerCase()}" loading="lazy">
        <span class="rec">REC ${t}</span>
        <figcaption class="meta"><b>${label}</b><small>FRAME ${n} / ${String(MOB.length).padStart(2, '0')}</small></figcaption>
      </figure>`;
    }).join('');
  }

  function renderProducts() {
    $('#productGrid').innerHTML = PRODUCTS.map((p) => `
      <article class="product-card reveal" data-cat="${p.cat}" data-id="${p.id}">
        <div class="product-thumb">
          <span class="badge ${p.hot ? 'hot' : ''}">${p.badge}</span>
          ${p.stock ? `<span class="stock">${p.stock}</span>` : ''}
          <img class="main-img" src="${img(p.imgs[0])}" alt="${esc(p.name)}" loading="lazy">
        </div>
        <div class="gallery-strip">
          ${p.imgs.map((s, i) => `<img class="gallery-thumb ${i === 0 ? 'active' : ''}" src="${img(s)}" alt="${esc(p.name)} view ${i + 1}" loading="lazy">`).join('')}
        </div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="sizes">${p.sizes.map((s, i) => `<button class="size ${p.sizes.length === 1 || s === 'L' ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}</div>
          <div class="product-footer">
            <span class="price">${fmt(p.price)}</span>
            <button class="btn-primary add-btn" data-id="${p.id}">ADD TO CART</button>
          </div>
        </div>
      </article>`).join('');
  }

  function renderCourses() {
    $('#courseGrid').innerHTML = COURSES.filter((c) => !c.featured).map((c) => `
      <article class="course-card reveal">
        <div class="img" style="background-image:url(${img(c.img)})"><span class="tag mono">${c.tag}</span></div>
        <div class="body">
          <h3>${c.name}</h3>
          <p>${c.desc}</p>
          <div class="course-meta mono">${c.meta.map((m) => `<span>${m}</span>`).join('')}</div>
          <div class="course-footer">
            <span class="price">${c.price ? fmt(c.price) : 'FREE'}</span>
            <button class="btn-primary add-btn" data-id="${c.id}">${c.price ? 'ENROLL' : 'RESERVE SEAT'}</button>
          </div>
        </div>
      </article>`).join('');
  }

  function renderPrograms() {
    $('#programGrid').innerHTML = PROGRAMS.map((p) => `
      <article class="program reveal">
        <img src="${img(p.img)}" alt="${esc(p.name)}" loading="lazy">
        <div class="content">
          <span class="tag mono">${p.tag}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="stats">${p.stats.map((s) => `<span>// ${s}</span>`).join('')}</div>
          <div class="row-end">
            <span class="price">${p.price ? fmt(p.price) : 'FREE'}</span>
            <button class="btn-primary add-btn" data-id="${p.id}">${p.price ? 'JOIN' : 'RSVP'}</button>
          </div>
        </div>
      </article>`).join('');
  }

  const CATALOG = {};
  PRODUCTS.forEach((p) => (CATALOG[p.id] = { name: p.name, price: p.price, img: p.imgs[0], kind: 'merch' }));
  COURSES.forEach((c) => (CATALOG[c.id] = { name: c.name, price: c.price, img: c.img, kind: 'course' }));
  PROGRAMS.forEach((p) => (CATALOG[p.id] = { name: p.name, price: p.price, img: p.img, kind: 'fitness' }));

  /* ---------------- CART ---------------- */
  let cart = store.get('syndicate-cart', []).filter((i) => CATALOG[i.id]);

  function saveCart() { store.set('syndicate-cart', cart); }

  function addToCart(id, size) {
    const key = id + '|' + (size || '');
    const existing = cart.find((i) => i.key === key);
    if (existing) existing.qty += 1;
    else cart.push({ key, id, size: size || '', qty: 1 });
    saveCart();
    updateCart();
    const btn = $('#cartBtn');
    btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump');
    toast(`${CATALOG[id].name}${size && size !== 'ONE SIZE' && size !== 'PROGRAMMED' ? ' — ' + size : ''} ADDED`);
  }

  function updateCart() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    $('#cartCount').textContent = count;
    const items = $('#cartItems');
    if (!cart.length) {
      items.innerHTML = '<p class="cart-empty mono">Your loadout is empty. Gear up.</p>';
    } else {
      items.innerHTML = cart.map((i, idx) => {
        const p = CATALOG[i.id];
        return `<div class="cart-item">
          <img src="${img(p.img)}" alt="">
          <div>
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-sub">${i.size ? i.size + ' · ' : ''}${p.price ? fmt(p.price) : 'FREE'}</div>
            <div class="qty"><button data-q="-1" data-idx="${idx}" aria-label="Decrease">−</button><span>${i.qty}</span><button data-q="1" data-idx="${idx}" aria-label="Increase">+</button></div>
          </div>
          <button class="remove-item" data-rm="${idx}">REMOVE</button>
        </div>`;
      }).join('');
    }
    $('#cartTotal').textContent = fmt(cartTotal());
    $('#checkoutWa').disabled = $('#checkoutMail').disabled = !cart.length;
  }

  const cartTotal = () => cart.reduce((s, i) => s + CATALOG[i.id].price * i.qty, 0);

  function orderText() {
    const lines = cart.map((i) => {
      const p = CATALOG[i.id];
      return `• ${i.qty} × ${p.name}${i.size ? ' (' + i.size + ')' : ''} — ${p.price ? fmt(p.price * i.qty) : 'FREE'}`;
    });
    return `API SYNDICATE ORDER\n\n${lines.join('\n')}\n\nTOTAL: ${fmt(cartTotal())}\n\nName:\nDelivery address / city:`;
  }

  function openCart() { $('#cartDrawer').classList.add('open'); $('#backdrop').classList.add('visible'); }
  function closeAll() {
    $('#cartDrawer').classList.remove('open');
    $('#backdrop').classList.remove('visible');
    $('#mainNav').classList.remove('open');
    $('#menuBtn').classList.remove('open');
  }

  /* ---------------- TOAST ---------------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* ---------------- LIGHTBOX ---------------- */
  let lbIndex = 0;
  function openLightbox(i) {
    lbIndex = (i + MOB.length) % MOB.length;
    const [src, , label] = MOB[lbIndex];
    $('#lbImg').src = img(src);
    $('#lbImg').alt = label;
    $('#lbCap').textContent = `${label} // FRAME ${String(lbIndex + 1).padStart(2, '0')} OF ${MOB.length}`;
    $('#lightbox').classList.add('open');
    document.body.classList.add('locked');
  }
  function closeLightbox() { $('#lightbox').classList.remove('open'); document.body.classList.remove('locked'); }

  /* ---------------- EVENTS ---------------- */
  document.addEventListener('click', (e) => {
    const t = e.target;

    const thumb = t.closest('.gallery-thumb');
    if (thumb) {
      const card = thumb.closest('.product-card');
      const main = $('.main-img', card);
      main.style.opacity = 0;
      setTimeout(() => { main.src = thumb.src; main.style.opacity = 1; }, 150);
      $$('.gallery-thumb', card).forEach((g) => g.classList.toggle('active', g === thumb));
      return;
    }

    const size = t.closest('.size');
    if (size) {
      $$('.size', size.parentElement).forEach((s) => s.classList.toggle('active', s === size));
      return;
    }

    const add = t.closest('.add-btn');
    if (add) {
      const id = add.dataset.id;
      const card = add.closest('.product-card');
      const sz = card ? $('.size.active', card) : null;
      if (card && !sz) { toast('SELECT A SIZE FIRST'); return; }
      addToCart(id, sz ? sz.dataset.size : '');
      return;
    }

    const filter = t.closest('.filter');
    if (filter) {
      const f = filter.dataset.filter;
      $$('.filter').forEach((b) => b.classList.toggle('active', b === filter));
      $$('.product-card').forEach((c) => c.classList.toggle('hide', f !== 'all' && c.dataset.cat !== f));
      return;
    }

    const mob = t.closest('.mob-item');
    if (mob) { openLightbox(+mob.dataset.i); return; }

    const q = t.closest('[data-q]');
    if (q) {
      const item = cart[+q.dataset.idx];
      item.qty += +q.dataset.q;
      if (item.qty <= 0) cart.splice(+q.dataset.idx, 1);
      saveCart(); updateCart();
      return;
    }

    const rm = t.closest('[data-rm]');
    if (rm) { cart.splice(+rm.dataset.rm, 1); saveCart(); updateCart(); return; }

    const intent = t.closest('[data-intent]');
    if (intent) { $('#missionType').value = intent.dataset.intent; }

    if (t.closest('.main-nav a')) closeAll();
  });

  $('#cartBtn').addEventListener('click', openCart);
  $('#closeCart').addEventListener('click', closeAll);
  $('#backdrop').addEventListener('click', closeAll);
  $('#menuBtn').addEventListener('click', () => {
    const open = $('#mainNav').classList.toggle('open');
    $('#menuBtn').classList.toggle('open', open);
  });

  $('#checkoutWa').addEventListener('click', () => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(orderText())}`, '_blank', 'noopener');
  });
  $('#checkoutMail').addEventListener('click', () => {
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('API Syndicate order')}&body=${encodeURIComponent(orderText())}`;
  });

  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', () => openLightbox(lbIndex - 1));
  $('#lbNext').addEventListener('click', () => openLightbox(lbIndex + 1));
  $('#lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); closeAll(); }
    if ($('#lightbox').classList.contains('open')) {
      if (e.key === 'ArrowLeft') openLightbox(lbIndex - 1);
      if (e.key === 'ArrowRight') openLightbox(lbIndex + 1);
    }
  });

  /* Access form */
  let via = 'whatsapp';
  $$('#accessForm [type=submit]').forEach((b) => b.addEventListener('click', () => (via = b.dataset.via)));
  $('#accessForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    let ok = true;
    ['name', 'brief'].forEach((n) => {
      const el = f.elements[n];
      const bad = !el.value.trim();
      el.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) { $('#formNote').textContent = '> TRANSMISSION INCOMPLETE — NAME AND BRIEF REQUIRED.'; return; }
    const d = Object.fromEntries(new FormData(f));
    const text = `API SYNDICATE — ACCESS KEY REQUEST\n\nName: ${d.name}\nBusiness: ${d.business || '-'}\nMission: ${d.type}\nBudget: ${d.budget}\n\nBrief:\n${d.brief}`;
    if (via === 'email') {
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Access key request — ' + d.type)}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    }
    $('#formNote').textContent = '> TRANSMISSION READY. COMPLETE SEND IN YOUR ' + (via === 'email' ? 'MAIL APP.' : 'WHATSAPP.');
  });

  /* ---------------- FX ---------------- */
  function boot() {
    const el = $('#boot');
    const log = $('#bootLog');
    if (sessionStorageSafe('booted')) { el.classList.add('done'); return; }
    const lines = [
      '<b>API SYNDICATE</b> // BUILDSBYBUCHANAN',
      '> establishing secure channel ........ <b>OK</b>',
      '> locating operators ................. <b>8 ONLINE</b>',
      '> region ............................. <b>CPT-021</b>',
      '> decrypting drop payload ............ <b>OK</b>',
      '<i>> SYSTEM DETECTED. CLAIM YOUR UPGRADE.</i>'
    ];
    let i = 0;
    const next = () => {
      if (i < lines.length) { log.innerHTML += lines[i++] + '\n'; setTimeout(next, 150); }
      else setTimeout(() => el.classList.add('done'), 350);
    };
    next();
    el.addEventListener('click', () => el.classList.add('done'));
  }
  function sessionStorageSafe(k) {
    try { const v = sessionStorage.getItem(k); sessionStorage.setItem(k, '1'); return v; } catch { return null; }
  }

  function clock() {
    const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const tick = () => ($('#clock').textContent = f.format(new Date()));
    tick(); setInterval(tick, 1000);
  }

  function typer() {
    const cmds = ['deploy --target cape-town --mode silent', 'syndicate drop --id 007 --loc [CLASSIFIED]', 'build --what "they cant" --ship now', 'nfc write --payload buildsbybuchanan.com', 'run --club night --route sea-point --km 10'];
    const el = $('#typed');
    let c = 0, ch = 0, del = false;
    const step = () => {
      const s = cmds[c];
      el.textContent = s.slice(0, ch);
      if (!del && ch < s.length) { ch++; setTimeout(step, 45 + rand(50)); }
      else if (!del) { del = true; setTimeout(step, 1800); }
      else if (ch > 0) { ch--; setTimeout(step, 18); }
      else { del = false; c = (c + 1) % cmds.length; setTimeout(step, 300); }
    };
    step();
  }

  // Next drop: last Friday of the month, 20:00 SAST (UTC+2)
  function nextDrop() {
    const now = new Date();
    for (let m = 0; m < 3; m++) {
      const y = now.getUTCFullYear(), mo = now.getUTCMonth() + m;
      const last = new Date(Date.UTC(y, mo + 1, 0));
      const back = (last.getUTCDay() - 5 + 7) % 7;
      const d = new Date(Date.UTC(last.getUTCFullYear(), last.getUTCMonth(), last.getUTCDate() - back, 18, 0, 0));
      if (d > now) return d;
    }
    return new Date(now.getTime() + 7 * 864e5);
  }
  function countdown() {
    const target = nextDrop();
    const num = Math.max(1, (target.getUTCFullYear() - 2026) * 12 + target.getUTCMonth() - 2);
    $('#dropName').textContent = 'DROP ' + String(num).padStart(3, '0');
    const pad = (n) => String(n).padStart(2, '0');
    const tick = () => {
      let s = Math.max(0, Math.floor((target - new Date()) / 1000));
      $('#cdD').textContent = pad(Math.floor(s / 86400)); s %= 86400;
      $('#cdH').textContent = pad(Math.floor(s / 3600)); s %= 3600;
      $('#cdM').textContent = pad(Math.floor(s / 60));
      $('#cdS').textContent = pad(s % 60);
    };
    tick(); setInterval(tick, 1000);
  }

  function glitchLoop() {
    const g = $$('.glitch');
    setInterval(() => {
      const el = g[rand(g.length)];
      el.classList.add('firing');
      setTimeout(() => el.classList.remove('firing'), 380);
    }, 1600);
  }

  function reveals() {
    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach((r) => r.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((r) => io.observe(r));
  }

  /* ---------------- INIT ---------------- */
  renderMob();
  renderProducts();
  renderCourses();
  renderPrograms();
  updateCart();
  boot();
  clock();
  typer();
  countdown();
  glitchLoop();
  reveals();
  $('#year').textContent = new Date().getFullYear();
  $('#sessionId').textContent = Math.random().toString(16).slice(2, 8).toUpperCase();
})();
