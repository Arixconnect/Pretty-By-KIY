const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const mobileBook = document.querySelector('[data-mobile-book]');
const hero = document.querySelector('.hero');

const setMenu = (open) => {
  header?.classList.toggle('menu-open', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
};

menuToggle?.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

document.addEventListener('click', (event) => {
  if (!header?.classList.contains('menu-open')) return;
  if (!header.contains(event.target)) setMenu(false);
});

const updateScrollUI = () => {
  header?.classList.toggle('scrolled', window.scrollY > 12);
  if (hero && mobileBook) {
    mobileBook.classList.toggle('visible', hero.getBoundingClientRect().bottom < 120);
  }
};

updateScrollUI();
window.addEventListener('scroll', updateScrollUI, { passive: true });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -28px' });
  reveals.forEach((element) => observer.observe(element));
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const closeMenuAtDesktop = window.matchMedia('(min-width: 901px)');
closeMenuAtDesktop.addEventListener?.('change', (event) => {
  if (event.matches) setMenu(false);
});
