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
// Slideshow logic for Serotonin Boost page
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  // Safety check: only run if there are slides on the page
  if (slides.length > 0) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); 
  }
}

// Start the slideshow
showSlides();

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});
