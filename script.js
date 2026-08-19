const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
window.addEventListener('scroll', () => {
  const current = sections.filter(section => section.offsetTop <= scrollY + 150).at(-1)?.id;
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}, {passive: true});
document.querySelector('#year').textContent = new Date().getFullYear();
