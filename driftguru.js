// Drift Guru 58 Website Scripts
// Handles: Mobile menu, animations, form validation

// MOBILE MENU
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navMenu.querySelector('ul').classList.toggle('show');
});

// INTERSECTION OBSERVER for animations
const flyIns = document.querySelectorAll('.fly-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

flyIns.forEach(el => observer.observe(el));

// FORM VALIDATION
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting Drift Guru 58! We will get back to you soon.');
  form.reset();
});
