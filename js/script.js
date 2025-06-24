document.addEventListener('DOMContentLoaded', () => {
  let current = 0;
  const slides = document.querySelectorAll('.room-slide');

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
  }

  window.addEventListener('scroll', () => {
    const trigger = window.scrollY / window.innerHeight;
    const index = Math.floor(trigger - 1);
    if (index !== current && index >= 0 && index < slides.length) {
      current = index;
      showSlide(index);
    }
  });

  showSlide(0);
});