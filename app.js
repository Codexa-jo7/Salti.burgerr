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
