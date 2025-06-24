document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
});
