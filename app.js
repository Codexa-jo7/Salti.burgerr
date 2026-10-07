'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'فتح القائمة'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة'); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
matchMedia('(min-width: 601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('.copy-address').addEventListener('click', async () => { const status = document.querySelector('.copy-status'); try { await navigator.clipboard.writeText('سلطي برغر، شارع الستين، السلط، الأردن'); status.textContent = 'تم نسخ العنوان. بنستناك!'; } catch { status.textContent = 'العنوان: سلطي برغر، شارع الستين، السلط، الأردن'; } });
document.querySelector('#year').textContent = new Date().getFullYear();

const menuData = [{"category": "beef", "name": "كلاسيك بيف", "variants": [["برغر", 2.5], ["برغر دبل", 3.5], ["وجبة", 3.5], ["وجبة دبل", 4.5]]}, {"category": "beef", "name": "زومبي بيف", "variants": [["برغر", 2.75], ["برغر دبل", 3.75], ["وجبة", 3.75], ["وجبة دبل", 4.75]]}, {"category": "beef", "name": "سموك بيف", "variants": [["برغر", 3], ["برغر دبل", 4], ["وجبة", 4], ["وجبة دبل", 5]]}, {"category": "beef", "name": "ايلاند بيف", "variants": [["برغر", 2.75], ["برغر دبل", 3.75], ["وجبة", 3.75], ["وجبة دبل", 4.75]]}, {"category": "beef", "name": "سلطي برغر بيف", "variants": [["برغر", 3.25], ["برغر دبل", 4.25], ["وجبة", 4.25], ["وجبة دبل", 5.25]]}, {"category": "beef", "name": "وايت مشروم بيف", "variants": [["برغر", 2.75], ["برغر دبل", 3.75], ["وجبة", 3.75], ["وجبة دبل", 4.75]]}, {"category": "beef", "name": "تشيز برغر بيف", "variants": [["برغر", 1.25], ["برغر دبل", 2.25], ["وجبة", 2.25], ["وجبة دبل", 3.25]]}, {"category": "beef", "name": "باربيكيو بيف", "variants": [["برغر", 2.75], ["برغر دبل", 3.75], ["وجبة", 3.75], ["وجبة دبل", 4.75]]}, {"category": "chicken", "name": "جولد كرسبي", "variants": [["برغر", 2.5], ["برغر دبل", 3.5], ["وجبة", 3.5], ["وجبة دبل", 4.5]]}, {"category": "chicken", "name": "مايتي كرسبي", "variants": [["برغر", 2.5], ["برغر دبل", 3.5], ["وجبة", 3.5], ["وجبة دبل", 4.5]]}, {"category": "chicken", "name": "سلطي برغر تشكن", "variants": [["برغر", 3], ["برغر دبل", 4], ["وجبة", 4], ["وجبة دبل", 5]]}, {"category": "chicken", "name": "كلاسيك تشكن", "variants": [["برغر", 2.25], ["برغر دبل", 3.25], ["وجبة", 3.25], ["وجبة دبل", 4.25]]}, {"category": "chicken", "name": "زومبي تشكن", "variants": [["برغر", 2.75], ["برغر دبل", 3.75], ["وجبة", 3.75], ["وجبة دبل", 4.75]]}, {"category": "sandwich", "name": "هوت دوغ", "variants": [["ساندويش", 2], ["هوت دوغ سموكي", 2.25]]}, {"category": "sandwich", "name": "زنجر", "variants": [["فرنسي", 1.75], ["تورتيلا", 2]]}, {"category": "sandwich", "name": "ستربس", "variants": [["فرنسي", 1.75], ["تورتيلا", 2]]}, {"category": "sandwich", "name": "بطاطا", "variants": [["فرنسي", 1], ["تورتيلا", 1.25]]}, {"category": "sandwich", "name": "سلطي شيش", "variants": [["ساندويش", 2]]}, {"category": "sides", "name": "كيرلي", "variants": [["السعر", 1.25]]}, {"category": "sides", "name": "ويجز", "variants": [["السعر", 1]]}, {"category": "sides", "name": "بطاطا", "variants": [["السعر", 0.5]]}, {"category": "sides", "name": "ناجتس — 8 قطع", "variants": [["السعر", 1.5]]}, {"category": "sides", "name": "تشيكن فرايز", "variants": [["السعر", 2.75]]}, {"category": "sides", "name": "أصابع موزريلا — 4 قطع", "variants": [["السعر", 1.5]]}, {"category": "sides", "name": "حلقات البصل — 8 قطع", "variants": [["السعر", 1.5]]}, {"category": "sides", "name": "زنجر بوكس", "variants": [["السعر", 2.5]]}, {"category": "sides", "name": "سلطة السيزر عادي", "variants": [["السعر", 2]]}, {"category": "sides", "name": "سلطة السيزر مع دجاج", "variants": [["السعر", 2.75]]}, {"category": "sauce", "name": "سلطي", "variants": [["إضافة صوص", 0.25]]}, {"category": "sauce", "name": "بافلو", "variants": [["إضافة صوص", 0.25]]}, {"category": "sauce", "name": "هني ماسترد", "variants": [["إضافة صوص", 0.25]]}, {"category": "sauce", "name": "تشلي", "variants": [["إضافة صوص", 0.25]]}, {"category": "sauce", "name": "غارلك بارميزان", "variants": [["إضافة صوص", 0.25]]}, {"category": "sauce", "name": "BBQ", "variants": [["إضافة صوص", 0.25]]}, {"category": "sauce", "name": "وايت صوص", "variants": [["إضافة صوص", 0.25]]}];

const labels = {beef:'برغر لحم',chicken:'برغر دجاج',sandwich:'ساندويش',sides:'مقبلات',sauce:'صوصات'};
let activeCategory = 'all';
const searchInput = document.querySelector('#menu-search');
function normalize(text) { return text.replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/[\u064B-\u065F]/g,'').toLowerCase().trim(); }
function renderMenu() {
 const query = normalize(searchInput.value);
 const filtered = menuData.filter(item => (activeCategory === 'all' || item.category === activeCategory) && normalize(item.name + ' ' + labels[item.category]).includes(query));
 document.querySelector('#menu-items').replaceChildren(...filtered.map(item => {
  const card = document.createElement('article'); card.className = 'food-card';
  const tag = document.createElement('span'); tag.className = 'food-tag'; tag.textContent = labels[item.category];
  const title = document.createElement('h3'); title.textContent = item.name;
  const prices = document.createElement('dl');
  item.variants.forEach(([label,price]) => {const row=document.createElement('div');const dt=document.createElement('dt');dt.textContent=label;const dd=document.createElement('dd');dd.textContent=price.toFixed(2)+' د.أ';row.append(dt,dd);prices.append(row);});
  card.append(tag,title,prices); return card;
 }));
 document.querySelector('#menu-count').textContent = filtered.length + ' صنف';
 document.querySelector('#menu-empty').hidden = filtered.length !== 0;
}
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
 activeCategory = button.dataset.category;
 document.querySelectorAll('[data-category]').forEach(other => {const active = other === button;other.classList.toggle('active',active);other.setAttribute('aria-pressed',String(active));});
 renderMenu();
}));
searchInput.addEventListener('input',renderMenu);
renderMenu();
