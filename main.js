// ── Sticky Nav
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Scroll Reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.stat-card, .highlight-item, .spec-card, .feat-card, .about-text, .about-highlights, .section-title, .section-label'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Parallax orbs on mouse move
document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth  - 0.5) * 30;
  const y = (e.clientY / innerHeight - 0.5) * 20;

  document.querySelectorAll('.orb-1').forEach(orb => {
    orb.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
  });
  document.querySelectorAll('.orb-2').forEach(orb => {
    orb.style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
  });
});

// ── Smooth page-load fade
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
