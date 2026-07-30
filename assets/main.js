/* =========================================================
   Grace Wellness — shared site behaviour + header/footer
   EDIT CONTACT DETAILS HERE (updates every page at once)
   ========================================================= */
const SITE = {
  brand: "Grace Wellness",
  tagline: "Healthcare Centre for the Need",
  motto: "Care. Heal. Thrive.",
  promise: "Compassionate care for every stage of life.",
  phoneLabel: "70903 44516",
  phoneTel: "+917090344516",
  phone2Label: "88676 37039",
  phone2Tel: "+918867637039",
  wa: "917090344516",
  email: "gracewellnessmhc@gmail.com",
  addressLines: ["No 22/6, 3rd Cross, Rahamath Nagar", "RT Nagar Post, Bangalore 560032"],
  logo: "assets/logo.svg"
};

const SERVICES = [
  ["elderly-care.html","Elderly Care","M12 21s-7-4.3-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.7-9 9-9 9Z"],
  ["post-hospitalization.html","Post-Hospitalization","M12 8v8M8 12h8 M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"],
  ["baby-care.html","Baby Care","M12 4a4 4 0 0 1 4 4 4 4 0 0 1-8 0 4 4 0 0 1 4-4Z M6 21a6 6 0 0 1 12 0"],
  ["chronic-disease.html","Chronic Disease Care","M3 12h4l2 5 4-10 2 5h6"],
  ["diagnostics-at-home.html","Diagnostics at Home","M9 3v6l-4 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-8V3 M8 3h8"],
  ["equipment-rental.html","Medical Equipment Rental","M5 10h14M6 10V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3M5 10l1.5 8h11L19 10"],
  ["palliative-care.html","Palliative &amp; End-of-Life Care","M12 21s-7-4.3-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.7-9 9-9 9Z"],
  ["pharmacy-support.html","Pharmacy Support","M4 8h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z M8 8V6a4 4 0 0 1 8 0v2M12 12v4M10 14h4"]
];

const ICON = {
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm5.5 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.1.1.3 0 .5l-.4.5c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.2.1.4.1.6-.1l.7-.9c.2-.3.4-.2.7-.1l1.9.9c.3.1.4.2.5.3.1.2.1.8-.1 1.5Z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="m6 9 6 6 6-6"/></svg>'
};

const waLink = (msg) => `https://wa.me/${SITE.wa}?text=${encodeURIComponent(msg||"Hi, I'd like to know about your home nursing services.")}`;
const telLink = `tel:${SITE.phoneTel}`;

function currentPage(){
  const p = location.pathname.split('/').pop() || 'index.html';
  return p === '' ? 'index.html' : p;
}

function buildHeader(){
  const cur = currentPage();
  const isSvc = SERVICES.some(s => s[0] === cur);
  const link = (href,label) => `<a href="${href}" class="${cur===href?'active':''}">${label}</a>`;
  const dropItems = SERVICES.map(s =>
    `<a href="${s[0]}"><span class="di"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${s[2]}"/></svg></span>${s[1]}</a>`
  ).join('');

  return `
  <div class="wrap hdr">
    <a class="brand" href="index.html" aria-label="${SITE.brand} home">
      <img class="mk" src="${SITE.logo}" alt="">
      <span><b>${SITE.brand}</b><small>${SITE.tagline}</small></span>
    </a>
    <nav class="nav">
      ${link('index.html','Home')}
      ${link('about.html','About')}
      <span class="has-drop">
        <a href="services.html" class="${isSvc?'active':''}" style="display:inline-flex;align-items:center;gap:5px">Services ${ICON.chev}</a>
        <span class="drop">${dropItems}</span>
      </span>
      ${link('how-it-works.html','How It Works')}
      ${link('contact.html','Contact')}
    </nav>
    <div class="hdr-cta">
      <a class="hdr-phone" href="${telLink}">${ICON.phone}${SITE.phoneLabel}</a>
      <a class="btn btn-primary" href="${telLink}">${ICON.phone}Call now</a>
    </div>
    <button class="burger" id="burger" aria-label="Open menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div>`;
}

function buildMobileNav(){
  const cur = currentPage();
  const link = (href,label) => `<a href="${href}" ${cur===href?'style="color:var(--gold)"':''}>${label}</a>`;
  const svc = SERVICES.map(s=>`<a href="${s[0]}" class="mn-sub">${s[1]}</a>`).join('');
  return `
    <div class="mn-top">
      <a class="brand" href="index.html"><img class="mk" src="${SITE.logo}" alt=""><span><b>${SITE.brand}</b></span></a>
      <button class="mn-close" id="mnClose" aria-label="Close menu"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    </div>
    ${link('index.html','Home')}
    ${link('about.html','About')}
    <a href="services.html" style="border-bottom:none;padding-bottom:4px">Services</a>
    ${svc}
    ${link('how-it-works.html','How It Works')}
    ${link('contact.html','Contact')}
    <div class="mn-actions">
      <a class="btn btn-primary btn-lg" href="${telLink}">${ICON.phone}Call ${SITE.phoneLabel}</a>
      <a class="btn btn-wa btn-lg" href="${waLink()}" target="_blank" rel="noopener">${ICON.wa}WhatsApp us</a>
    </div>`;
}

function buildFooter(){
  const svcLinks = SERVICES.slice(0,6).map(s=>`<a href="${s[0]}">${s[1]}</a>`).join('');
  return `
  <div class="wrap foot-top">
    <div class="foot-col">
      <div class="foot-brand"><img class="mk" src="${SITE.logo}" alt=""><span><b>${SITE.brand}</b><small>${SITE.motto}</small></span></div>
      <p style="max-width:34ch;color:#DCCDAE">${SITE.promise} Professional home nursing backed by 30 years of experience — bringing hospital-quality care home, with warmth and dignity.</p>
      <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap">
        <a class="btn btn-primary" href="${telLink}">${ICON.phone}Call now</a>
        <a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>
      </div>
    </div>
    <div class="foot-col">
      <h4>Services</h4>
      ${svcLinks}
    </div>
    <div class="foot-col">
      <h4>Company</h4>
      <a href="about.html">About us</a>
      <a href="how-it-works.html">How it works</a>
      <a href="services.html">All services</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="foot-col foot-contact">
      <h4>Reach us</h4>
      <a href="${telLink}">${ICON.phone}${SITE.phoneLabel}</a>
      <a href="tel:${SITE.phone2Tel}">${ICON.phone}${SITE.phone2Label}</a>
      <a href="mailto:${SITE.email}">${ICON.mail}${SITE.email}</a>
      <p>${ICON.pin}<span>${SITE.addressLines[0]}<br>${SITE.addressLines[1]}</span></p>
      <p>${ICON.clock}Available 24 / 7</p>
    </div>
  </div>
  <div class="wrap foot-bottom">
    <span>© <span id="yr"></span> ${SITE.brand}. All rights reserved.</span>
    <span>${SITE.motto}</span>
  </div>`;
}

function buildMobileBar(){
  return `
    <a class="mb-call" href="${telLink}">${ICON.phone}Call now</a>
    <a class="mb-wa" href="${waLink()}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>`;
}

document.addEventListener('DOMContentLoaded', () => {
  // screenshot helper: ?still renders the final (settled) state, no animation
  if(location.search.indexOf('still') > -1) document.documentElement.classList.add('stills');

  // inject chrome
  const h = document.getElementById('site-header');
  if(h){ h.className='site-header'; h.innerHTML = buildHeader(); }
  const f = document.getElementById('site-footer');
  if(f){ f.className='site-footer'; f.innerHTML = buildFooter(); }

  const mnav = document.createElement('div'); mnav.className='mobile-nav'; mnav.id='mobileNav'; mnav.innerHTML=buildMobileNav();
  document.body.appendChild(mnav);
  const mbar = document.createElement('div'); mbar.className='mobile-bar'; mbar.innerHTML=buildMobileBar();
  document.body.appendChild(mbar);

  const yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();

  // mobile menu toggle
  const openM=()=>{mnav.classList.add('open');document.body.style.overflow='hidden';};
  const closeM=()=>{mnav.classList.remove('open');document.body.style.overflow='';};
  const burger=document.getElementById('burger'); if(burger) burger.addEventListener('click',openM);
  const mnClose=document.getElementById('mnClose'); if(mnClose) mnClose.addEventListener('click',closeM);
  mnav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeM));

  // header scrolled state
  const header=document.getElementById('site-header');
  const onScroll=()=>{ if(header) header.classList.toggle('scrolled', window.scrollY>20); };
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  // scroll reveal
  const items=document.querySelectorAll('.reveal,.zoom');
  if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    items.forEach(el=>el.classList.add('in'));
  } else {
    const io=new IntersectionObserver((ents)=>{
      ents.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    },{threshold:.14,rootMargin:'0px 0px -50px 0px'});
    items.forEach(el=>io.observe(el));
  }

  // parallax on inner page-hero background
  const ph=document.querySelector('.page-hero .ph-bg');
  if(ph && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    window.addEventListener('scroll',()=>{ ph.style.transform=`scale(1.08) translateY(${window.scrollY*0.12}px)`; },{passive:true});
  }

  // WhatsApp callback form
  const form=document.getElementById('callbackForm');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const name=(form.querySelector('[name=name]').value||'').trim();
      const phone=(form.querySelector('[name=phone]').value||'').trim();
      const need=form.querySelector('[name=need]').value;
      const msg=`Hi, I'd like to request a callback.\n\nName: ${name}\nPhone: ${phone}\nCare needed: ${need}`;
      window.open(waLink(msg),'_blank');
    });
  }
});
