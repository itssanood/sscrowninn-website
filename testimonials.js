const testimonials = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.testimonials .prev');
const nextBtn = document.querySelector('.testimonials .next');
const dotsContainer = document.querySelector('.testimonial-dots');
let currentTestimonial = 0;

// Create dots
testimonials.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showTestimonial(i));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('span');

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active-dot'));
  testimonials[index].classList.add('active');
  dots[index].classList.add('active-dot');
  currentTestimonial = index;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Auto-play
setInterval(nextTestimonial, 5000);

// Initialize
showTestimonial(currentTestimonial);
