// Animate all fade-in and room-card sections
const fadeElements = document.querySelectorAll('.fade-in, .room-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
});

fadeElements.forEach(el => observer.observe(el));