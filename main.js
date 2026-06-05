// Extracted JavaScript from index.html
/* Project data */
const pg = document.getElementById('port-grid');
const projects = [
  { t: "Project Alpha", c: "Design", e: "🖌️", bg: "#1a202c", link: "#", tag: "Featured" },
  { t: "Project Beta", c: "Development", e: "💻", bg: "#2d3748", link: "#", tag: "New" },
  { t: "Project Gamma", c: "Branding", e: "🎨", bg: "#4a5568", link: "#", tag: "Popular" }
];
// End of data
projects.forEach(p => {
  pg.innerHTML += `<div class="port-card" onclick="window.location.href='${p.link}'"><div class="port-thumb" style="background:${p.bg}"><span>${p.e}</span></div><div class="port-overlay"></div><div class="port-info"><div class="port-title">${p.t}</div><div class="port-cat">${p.c}</div></div><div class="port-badge">${p.tag}</div></div>`;
});

// Preloader
let pct = 0;
const pctEl = document.getElementById('pct');
const iv = setInterval(() => {
  pct += Math.floor(Math.random() * 12) + 4;
  if(pct >= 100){ pct = 100; clearInterval(iv); }
  pctEl.textContent = pct + '%';
}, 120);
window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').classList.add('gone'), 1900));

// Cursor
const cur = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX+'px'; cur.style.top = e.clientY+'px';
  setTimeout(() => { ring.style.left = e.clientX+'px'; ring.style.top = e.clientY+'px'; }, 90);
});

document.querySelectorAll('button,a,.port-card,.svc-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.width='18px'; cur.style.height='18px'; cur.style.background='var(--secondary)'; ring.style.width='50px'; ring.style.height='50px'; });
  el.addEventListener('mouseleave', () => { cur.style.width='10px'; cur.style.height='10px'; cur.style.background='var(--primary)'; ring.style.width='34px'; ring.style.height='34px'; });
});

// Scroll
window.addEventListener('scroll', () => {
  const p = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  document.getElementById('progress').style.width = p + '%';
  document.getElementById('btt').classList.toggle('on', window.scrollY > 450);
});

// Reveal
const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Counters
function count(el, target, sfx) {
  let n = 0;
  const step = () => { n = Math.min(n + Math.ceil(target/28), target); el.textContent = n+sfx; if(n < target) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
const cobs = new IntersectionObserver(es => {
  if(es[0].isIntersecting){ count(document.getElementById('s1'),50,'+'); count(document.getElementById('s2'),20,'+'); count(document.getElementById('s3'),5,'+'); cobs.disconnect(); }
}, {threshold:.4});
cobs.observe(document.querySelector('.stats'));

// Form — Formspree
document.getElementById('cform').addEventListener('submit', async function(e) {
  e.preventDefault();
  let ok = true;
  const fields = [
    {id:'f-name',eid:'e-name',check:v=>v.trim().length>0},
    {id:'f-email',eid:'e-email',check:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},
    {id:'f-msg',eid:'e-msg',check:v=>v.trim().length>0}
  ];
  fields.forEach(f => {
    const el = document.getElementById(f.id), em = document.getElementById(f.eid);
    el.classList.remove('err'); em.style.display='none';
    if(!f.check(el.value)){ el.classList.add('err'); em.style.display='block'; ok=false; }
  });
  if(!ok) return;
  const btn = document.getElementById('f-submit');
  btn.textContent='Sending...'; btn.classList.add('loading');
  try {
    const res = await fetch(this.action, {method:'POST', body:new FormData(this), headers:{'Accept':'application/json'}});
    if(res.ok){
      document.getElementById('cform').style.display='none';
      document.getElementById('success-state').style.display='block';
      if(typeof gtag!=='undefined') gtag('event','form_submit',{event_category:'contact',event_label:'enquiry'});
    } else { btn.textContent='Failed — try again'; btn.classList.remove('loading'); }
  } catch(err) { btn.textContent='Network error — retry'; btn.classList.remove('loading'); }
});

// Newsletter
function handleNewsletter() {
  const email = document.getElementById('nl-email').value;
  const msg = document.getElementById('nl-msg');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ msg.textContent='✕ Please enter a valid email.'; msg.style.color='#F87171'; return; }
  msg.textContent="✓ You're subscribed! Welcome aboard."; msg.style.color='var(--primary)';
  document.getElementById('nl-email').value='';
  if(typeof gtag!=='undefined') gtag('event','newsletter_signup',{event_category:'engagement'});
}

// Theme
let isLight = localStorage.getItem('scornith-theme') === 'light';
function applyTheme(){
  document.body.classList.toggle('light', isLight);
  document.getElementById('theme-toggle').textContent = isLight ? '🌙 Dark' : '☀️ Light';
}
applyTheme();
document.getElementById('theme-toggle').addEventListener('click', () => {
  isLight = !isLight;
  localStorage.setItem('scornith-theme', isLight ? 'light' : 'dark');
  applyTheme();
});
