// ============================================================
// Self-drawing commit graph
// ============================================================
(function () {
  const commitLog = document.querySelector('.commit-log');
  if (!commitLog) return;

  commitLog.querySelectorAll('.commit').forEach((commit, index) => {
    commit.style.setProperty('--i', index);
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(commitLog);
})();

// ============================================================
// Footer year
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// Highlight the nav link for the section currently in view
// ============================================================
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('data-section') === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});
