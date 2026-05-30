'use strict';

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// Nav background on scroll (passive for performance)
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 50
    ? 'rgba(250,249,246,0.97)'
    : 'rgba(250,249,246,0.85)';
}, { passive: true });

// Nav CTA button – no inline onclick
document.getElementById('navCta').addEventListener('click', () => {
  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
});
