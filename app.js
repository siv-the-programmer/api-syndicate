(() => {
  const WA_NUMBER = '27792686620';
  const EMAIL = 'info@buildsbybuchanan.com';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const fmt = (n) => 'R ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  /* ---------------- DATA ---------------- */
  // stock: 'ok' | 'low'  ·  badge: optional small label on the image
  const PRODUCTS = [
    { id: 'hoodie-blackout', cat: 'hoodies', name: 'Blackout Tactical Hoodie', price: 1450, stock: 'low',
      desc: '480 GSM organic cotton fleece. Black on black, oversized double-layered hood, no visible branding.',
      imgs: ['hood4', 'hood6', 'hood7', 'mob8'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'hoodie-emblem', cat: 'hoodies', name: 'Emblem Hoodie', price: 1550, badge: 'New',
      desc: '480 GSM heavy fleece with a high-contrast screen-printed Syndicate emblem on the back and chest.',
      imgs: ['hood12', 'hood13', 'hood11', 'night1'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'hoodie-nfc', cat: 'hoodies', name: 'NFC Key Hoodie', price: 1650, badge: 'NFC',
      desc: 'Waterproof NFC chip in the wrist cuff. Tap a phone to it and it opens your portfolio or landing page.',
      imgs: ['hood1', 'hood3', 'hood5', 'mob6'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'hoodie-operator', cat: 'hoodies', name: 'Operator Hoodie', price: 1500,
      desc: 'Relaxed fit with dropped shoulders, a hidden phone pocket and thumb-hole cuffs.',
      imgs: ['crew3', 'mob9', 'hood10', 'hood9'], sizes: ['S', 'M', 'L', 'XL'] },
    { id: 'tee-core', cat: 'tees', name: 'Core Tee', price: 550,
      desc: '240 GSM boxy heavyweight tee with a tonal chest print. For everyday wear.',
      imgs: ['merch11', 'merch13', 'merch15', 'merch2'], sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 'tee-manifesto', cat: 'tees', name: 'Manifesto Tee', price: 600, badge: 'Limited',
      desc: 'The Code printed down the back. Limited to 100 pieces per run.',
      imgs: ['merch12', 'merch4', 'merch7', 'merch1'], sizes: ['S', 'M', 'L', 'XL'] },
    { id: 'balaclava', cat: 'headwear', name: 'Knit Balaclava', price: 350,
      desc: 'Fine-knit merino, breathable and warm. The crew wears these at every drop.',
      imgs: ['mob1', 'mob2', 'mob4', 'mob3'], sizes: ['One size'] },
    { id: 'cap-ops', cat: 'headwear', name: 'Washed Cap', price: 420,
      desc: 'Washed black six-panel cap with tonal embroidery and an adjustable strap.',
      imgs: ['merch5', 'merch10', 'mob6', 'hood10'], sizes: ['One size'] },
    { id: 'access-cards', cat: 'kit', name: 'NFC Business Cards ×25', price: 1250, badge: 'For business',
      desc: 'Matte black NFC and QR business cards, programmed to link to your website. The same cards we hand out at drops.',
      imgs: ['code6', 'code3', 'night7', 'code1'], sizes: ['Programmed'] },
    { id: 'drop-kit', cat: 'kit', name: 'Drop Kit Bundle', price: 2450, badge: 'Bundle', stock: 'low',
      desc: 'Blackout hoodie, balaclava, core tee and 5 NFC cards. R 150 less than buying them separately.',
      imgs: ['mob5', 'hood4', 'mob1', 'merch11'], sizes: ['S', 'M', 'L', 'XL'] }
  ];

  const COURSES = [
    { id: 'course-fullstack', name: 'Full-Stack Web Architecture & Automation', price: 5499, img: 'code5', featured: true },
    { id: 'course-api', name: 'API & Automation', price: 3499, img: 'code2', tag: '8 weeks',
      desc: 'REST, webhooks, bots, and payment and messaging integrations. Automate the repetitive parts of any business.',
      meta: ['Live', 'Project-based'] },
    { id: 'course-3d', name: '3D Web & WebGL', price: 2999, img: 'code4', tag: '6 weeks',
      desc: 'Three.js, shaders and scroll-driven 3D: the kind of websites people stop to film.',
      meta: ['On-demand', 'Portfolio'] },
    { id: 'course-freelance', name: 'Freelance Blueprint', price: 1499, img: 'code3', tag: '4 weeks',
      desc: 'Pricing, quoting, contracts, finding clients and delivery for South African developers.',
      meta: ['On-demand', 'Templates'] },
    { id: 'course-night', name: 'Zero to Deployed: Night Session', price: 0, img: 'code1', tag: 'Free',
      desc: 'Build and deploy your first live website in one evening, in person in Cape Town. Limited seats.',
      meta: ['1 evening', 'In person'] },
    { id: 'course-mentor', name: '1:1 Mentorship', price: 2200, img: 'code6', tag: 'Monthly',
      desc: 'Weekly calls with a BuildsByBuchanan engineer, plus code reviews on your own projects.',
      meta: ['4 calls / month', 'Code review'] }
  ];

  const PROGRAMS = [
    { id: 'fit-iron', name: 'Iron Protocol', price: 899, img: 'gym1', tag: '12-week strength',
      desc: 'A progressive strength program for people who sit all day. Tracked in an app and checked by a coach.',
      meta: ['3× / week', '60 min'] },
    { id: 'fit-run', name: 'Night Run Club', price: 0, img: 'run3', tag: 'Thursdays',
      desc: 'Evening runs on the Sea Point promenade, in 5K and 10K groups.',
      meta: ['Weekly', '5K / 10K'] },
    { id: 'fit-strike', name: 'Strike', price: 1199, img: 'gym9', tag: 'Boxing conditioning',
      desc: 'Bag work, pad work and conditioning for sharper reflexes, less stress and more discipline.',
      meta: ['2× / week', 'Gloves included'] },
    { id: 'fit-devbody', name: 'Desk Reset', price: 499, img: 'gym8', tag: 'Mobility · online',
      desc: 'Daily 15-minute mobility and back routines for people who work at a desk.',
      meta: ['Daily', '15 min'] }
  ];

  const MOB = [
    ['mob2', 'Ghost'], ['night4', 'Arrival'], ['hood5', 'Crew'],
    ['mob8', 'Lookout'], ['mob1', 'Blackout'], ['hood6', 'Silent']
  ];

  /* ---------------- RENDER ---------------- */
  const img = (n) => `img/${n}.jpg`;
  const sm = (n) => `img/sm/${n}.jpg`;
  const pic = (n, sizes, attrs = '') =>
    `<img src="${sm(n)}" srcset="${sm(n)} 640w, ${img(n)} 1400w" sizes="${sizes}" ${attrs} loading="lazy" decoding="async">`;
  const priceLabel = (p) => (p ? fmt(p) : 'Free');

  function renderMob() {
    $('#mobWall').innerHTML = MOB.map(([src, label], i) => `
      <figure class="mob-item reveal" data-i="${i}">
        ${pic(src, '(min-width: 640px) 33vw, 50vw', `alt="API Syndicate crew: ${label.toLowerCase()}"`)}
        <figcaption>${label}</figcaption>
      </figure>`).join('');
  }

  function renderProducts() {
    $('#productGrid').innerHTML = PRODUCTS.map((p) => {
      const oneSize = p.sizes.length === 1;
      return `
      <article class="product-card reveal" data-cat="${p.cat}">
        <div class="product-media">
          ${pic(p.imgs[0], '(min-width: 1200px) 25vw, (min-width: 960px) 33vw, (min-width: 640px) 46vw, 84vw', `class="main-img" alt="${esc(p.name)}"`)}
          ${p.badge ? `<span class="badge ${p.badge === 'NFC' ? 'badge-info' : 'badge-accent'}">${p.badge}</span>` : ''}
        </div>
        <div class="thumbs">
          ${p.imgs.map((s, i) => `<img class="thumb ${i === 0 ? 'active' : ''}" src="${sm(s)}" data-full="${s}" alt="${esc(p.name)}, view ${i + 1}" loading="lazy" decoding="async">`).join('')}
        </div>
        <div class="product-body">
          <div class="product-top">
            <h3 class="product-name">${esc(p.name)}</h3>
            ${p.stock === 'low' ? '<span class="status status-warn"><i></i>Low stock</span>' : '<span class="status status-ok"><i></i>In stock</span>'}
          </div>
          <p class="product-desc">${esc(p.desc)}</p>
          ${oneSize ? '' : '<span class="field-label">Size</span>'}
          <div class="sizes" role="radiogroup" aria-label="Size">${p.sizes.map((s) => `<button class="size ${oneSize || s === 'L' ? 'active' : ''}" data-size="${s}" role="radio" aria-checked="${oneSize || s === 'L'}">${s}</button>`).join('')}</div>
          <div class="card-footer">
            <span class="price">${fmt(p.price)}</span>
            <button class="btn btn-primary add-btn" data-id="${p.id}">Add to cart</button>
          </div>
        </div>
      </article>`;
    }).join('');
  }

  function renderCourses() {
    $('#courseGrid').innerHTML = COURSES.filter((c) => !c.featured).map((c) => `
      <article class="course-card reveal">
        <div class="media">${pic(c.img, '(min-width: 960px) 33vw, (min-width: 640px) 46vw, 84vw', 'class="bg" alt=""')}<span class="badge ${c.price ? '' : 'badge-accent'}">${c.tag}</span></div>
        <div class="body">
          <h3>${esc(c.name)}</h3>
          <p>${esc(c.desc)}</p>
          <div class="meta-row">${c.meta.map((m) => `<span class="badge">${m}</span>`).join('')}</div>
          <div class="card-footer">
            <span class="price">${priceLabel(c.price)}</span>
            <button class="btn ${c.price ? 'btn-primary' : 'btn-secondary'} add-btn" data-id="${c.id}">${c.price ? 'Enrol' : 'Reserve seat'}</button>
          </div>
        </div>
      </article>`).join('');
  }

  function renderPrograms() {
    $('#programGrid').innerHTML = PROGRAMS.map((p) => `
      <article class="program reveal">
        ${pic(p.img, '(min-width: 1200px) 25vw, (min-width: 640px) 46vw, 84vw', `alt="${esc(p.name)}"`)}
        <div class="content">
          <span class="badge ${p.price ? '' : 'badge-accent'}">${p.tag}</span>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.desc)}</p>
          <div class="meta-row">${p.meta.map((m) => `<span class="badge">${m}</span>`).join('')}</div>
          <div class="card-footer">
            <span class="price">${priceLabel(p.price)}</span>
            <button class="btn ${p.price ? 'btn-primary' : 'btn-secondary'} add-btn" data-id="${p.id}">${p.price ? 'Join' : 'RSVP'}</button>
          </div>
        </div>
      </article>`).join('');
  }

  const CATALOG = {};
  PRODUCTS.forEach((p) => (CATALOG[p.id] = { name: p.name, price: p.price, img: p.imgs[0] }));
  COURSES.forEach((c) => (CATALOG[c.id] = { name: c.name, price: c.price, img: c.img }));
  PROGRAMS.forEach((p) => (CATALOG[p.id] = { name: p.name, price: p.price, img: p.img }));

  /* ---------------- CART ---------------- */
  let cart = store.get('syndicate-cart', []).filter((i) => CATALOG[i.id]);
  const saveCart = () => store.set('syndicate-cart', cart);
  const cartTotal = () => cart.reduce((s, i) => s + CATALOG[i.id].price * i.qty, 0);
  const showSize = (s) => s && !['One size', 'Programmed'].includes(s);

  function addToCart(id, size) {
    const key = id + '|' + (size || '');
    const existing = cart.find((i) => i.key === key);
    if (existing) existing.qty += 1;
    else cart.push({ key, id, size: size || '', qty: 1 });
    saveCart();
    updateCart();
    const btn = $('#cartBtn');
    btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump');
    toast(`Added ${CATALOG[id].name}${showSize(size) ? ` (${size})` : ''} to your cart.`);
  }

  function updateCart() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const badge = $('#cartCount');
    badge.textContent = count;
    badge.dataset.n = count;
    $('#cartItems').innerHTML = cart.length
      ? cart.map((i, idx) => {
          const p = CATALOG[i.id];
          return `<div class="cart-item">
            <img src="${sm(p.img)}" alt="">
            <div>
              <div class="cart-item-name">${esc(p.name)}</div>
              <div class="cart-item-sub">${showSize(i.size) ? 'Size ' + i.size + ' · ' : ''}${priceLabel(p.price)}</div>
              <div class="qty"><button data-q="-1" data-idx="${idx}" aria-label="Decrease quantity">−</button><span>${i.qty}</span><button data-q="1" data-idx="${idx}" aria-label="Increase quantity">+</button></div>
            </div>
            <button class="remove-item" data-rm="${idx}">Remove</button>
          </div>`;
        }).join('')
      : '<p class="cart-empty">Your cart is empty.</p>';
    $('#cartTotal').textContent = fmt(cartTotal());
    $('#checkoutWa').disabled = $('#checkoutMail').disabled = !cart.length;
  }

  function orderText() {
    const lines = cart.map((i) => {
      const p = CATALOG[i.id];
      return `• ${i.qty} × ${p.name}${showSize(i.size) ? ' (' + i.size + ')' : ''}: ${p.price ? fmt(p.price * i.qty) : 'Free'}`;
    });
    return `API Syndicate order\n\n${lines.join('\n')}\n\nTotal: ${fmt(cartTotal())}\n\nName:\nDelivery address / city:`;
  }

  function openCart() { $('#cartDrawer').classList.add('open'); $('#backdrop').classList.add('visible'); }
  function closeAll() { $('#cartDrawer').classList.remove('open'); $('#backdrop').classList.remove('visible'); }

  /* ---------------- TOAST ---------------- */
  let toastTimer;
  function toast(msg, kind = '') {
    const t = $('#toast');
    t.textContent = msg;
    t.className = 'toast show ' + kind;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
  }

  /* ---------------- LIGHTBOX ---------------- */
  let lbIndex = 0;
  function openLightbox(i) {
    lbIndex = (i + MOB.length) % MOB.length;
    const [src, label] = MOB[lbIndex];
    $('#lbImg').src = window.innerWidth < 640 ? sm(src) : img(src);
    $('#lbImg').alt = label;
    $('#lbCap').textContent = `${label} · ${lbIndex + 1} of ${MOB.length}`;
    $('#lightbox').classList.add('open');
    document.body.classList.add('locked');
  }
  function closeLightbox() { $('#lightbox').classList.remove('open'); document.body.classList.remove('locked'); }

  /* ---------------- EVENTS ---------------- */
  document.addEventListener('click', (e) => {
    const t = e.target;

    const thumb = t.closest('.thumb');
    if (thumb) {
      const card = thumb.closest('.product-card');
      const main = $('.main-img', card);
      const n = thumb.dataset.full;
      main.style.opacity = 0;
      setTimeout(() => { main.srcset = `${sm(n)} 640w, ${img(n)} 1400w`; main.src = sm(n); main.style.opacity = 1; }, 120);
      $$('.thumb', card).forEach((g) => g.classList.toggle('active', g === thumb));
      return;
    }

    const size = t.closest('.size');
    if (size) {
      $$('.size', size.parentElement).forEach((s) => { s.classList.toggle('active', s === size); s.setAttribute('aria-checked', s === size); });
      return;
    }

    const add = t.closest('.add-btn');
    if (add) {
      const card = add.closest('.product-card');
      const sz = card ? $('.size.active', card) : null;
      if (card && !sz) { toast('Select a size first.', 'warn'); return; }
      addToCart(add.dataset.id, sz ? sz.dataset.size : '');
      return;
    }

    const seg = t.closest('.seg');
    if (seg) {
      const f = seg.dataset.filter;
      $$('.seg').forEach((b) => { b.classList.toggle('active', b === seg); b.setAttribute('aria-selected', b === seg); });
      $$('.product-card').forEach((c) => c.classList.toggle('hide', f !== 'all' && c.dataset.cat !== f));
      $('#productGrid').dispatchEvent(new Event('railchange'));
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
    if (intent) $('#missionType').value = intent.dataset.intent;
  });

  $('#cartBtn').addEventListener('click', openCart);
  $('#closeCart').addEventListener('click', closeAll);
  $('#backdrop').addEventListener('click', closeAll);
  $('#checkoutWa').addEventListener('click', () => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(orderText())}`, '_blank', 'noopener'));
  $('#checkoutMail').addEventListener('click', () => { location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('API Syndicate order')}&body=${encodeURIComponent(orderText())}`; });

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

  /* Contact form */
  let via = 'whatsapp';
  $$('#accessForm [type=submit]').forEach((b) => b.addEventListener('click', () => (via = b.dataset.via)));
  $('#accessForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    let ok = true;
    ['name', 'brief'].forEach((n) => {
      const el = f.elements[n];
      const bad = !el.value.trim();
      el.closest('.field').classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    const note = $('#formNote');
    if (!ok) { note.className = 'form-note err'; note.textContent = 'Please fill in the required fields.'; return; }
    const d = Object.fromEntries(new FormData(f));
    const text = `API Syndicate project request\n\nName: ${d.name}\nBusiness: ${d.business || '-'}\nNeed: ${d.type}\nBudget: ${d.budget}\n\n${d.brief}`;
    if (via === 'email') location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Project request: ' + d.type)}&body=${encodeURIComponent(text)}`;
    else window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    note.className = 'form-note ok';
    note.textContent = via === 'email' ? 'Your email app has opened with the message ready to send.' : 'WhatsApp has opened with the message ready to send.';
  });
  $('#accessForm').addEventListener('input', (e) => { const fld = e.target.closest('.field'); if (fld && e.target.value.trim()) fld.classList.remove('invalid'); });

  /* ---------------- NEXT DROP ---------------- */
  // Last Friday of each month, 20:00 SAST (18:00 UTC)
  function nextDrop() {
    const now = new Date();
    for (let m = 0; m < 3; m++) {
      const last = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + m + 1, 0));
      const back = (last.getUTCDay() - 5 + 7) % 7;
      const d = new Date(Date.UTC(last.getUTCFullYear(), last.getUTCMonth(), last.getUTCDate() - back, 18, 0, 0));
      if (d > now) return d;
    }
    return new Date(now.getTime() + 7 * 864e5);
  }
  function dropInfo() {
    const d = nextDrop();
    $('#dropDate').textContent = new Intl.DateTimeFormat('en-ZA', { timeZone: 'Africa/Johannesburg', weekday: 'short', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: false }).format(d);
    const tick = () => {
      const mins = Math.max(0, Math.round((d - new Date()) / 60000));
      const days = Math.floor(mins / 1440), hrs = Math.floor((mins % 1440) / 60), m = mins % 60;
      $('#dropIn').textContent = days ? `${days}d ${hrs}h ${m}m` : `${hrs}h ${m}m`;
    };
    tick(); setInterval(tick, 30000);
  }

  /* ---------------- UI behaviour ---------------- */
  function reveals() {
    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach((r) => r.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((r) => io.observe(r));
  }

  function activeSection() {
    if (!('IntersectionObserver' in window)) return;
    const links = $$('.tabbar a, .main-nav a');
    const ids = [...new Set(links.map((a) => a.getAttribute('href').slice(1)))];
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    ids.map((id) => document.getElementById(id)).filter(Boolean).forEach((s) => io.observe(s));
  }

  function railDots() {
    $$('.rail-dots').forEach((dots) => {
      const rail = document.getElementById(dots.dataset.for);
      const draw = () => {
        const items = [...rail.children].filter((c) => !c.classList.contains('hide'));
        if (dots.childElementCount !== items.length) dots.innerHTML = items.map(() => '<i></i>').join('');
        const step = items[1] ? items[1].offsetLeft - items[0].offsetLeft : 1;
        const idx = Math.min(items.length - 1, Math.round(rail.scrollLeft / step));
        [...dots.children].forEach((d, i) => d.classList.toggle('on', i === idx));
      };
      rail.addEventListener('scroll', () => requestAnimationFrame(draw), { passive: true });
      rail.addEventListener('railchange', () => { rail.scrollLeft = 0; draw(); });
      draw();
    });
  }

  function lightboxSwipe() {
    const lb = $('#lightbox');
    let x0 = null, y0 = 0;
    lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    lb.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) openLightbox(lbIndex + (dx < 0 ? 1 : -1));
      else if (dy > 90) closeLightbox();
      x0 = null;
    }, { passive: true });
  }

  /* ---------------- INIT ---------------- */
  renderMob();
  renderProducts();
  renderCourses();
  renderPrograms();
  updateCart();
  dropInfo();
  reveals();
  activeSection();
  railDots();
  lightboxSwipe();
  $('#year').textContent = new Date().getFullYear();
})();
