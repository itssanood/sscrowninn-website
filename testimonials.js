const testimonialSection = document.querySelector('.testimonials');
const testimonials = testimonialSection.querySelectorAll('.testimonial-item');
const testimonialDotsContainer = testimonialSection.querySelector('.testimonial-dots');
const testimonialPrevBtn = testimonialSection.querySelector('.prev');
const testimonialNextBtn = testimonialSection.querySelector('.next');
let testimonialCurrent = 0;

// Create dots
testimonials.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showTestimonial(i));
  testimonialDotsContainer.appendChild(dot);
});
const testimonialDots = testimonialDotsContainer.querySelectorAll('span');

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonialDots.forEach(d => d.classList.remove('active-dot'));
  testimonials[index].classList.add('active');
  testimonialDots[index].classList.add('active-dot');
  testimonialCurrent = index;
}

function nextTestimonial() {
  testimonialCurrent = (testimonialCurrent + 1) % testimonials.length;
  showTestimonial(testimonialCurrent);
}

function prevTestimonial() {
  testimonialCurrent = (testimonialCurrent - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialCurrent);
}

testimonialNextBtn.addEventListener('click', nextTestimonial);
testimonialPrevBtn.addEventListener('click', prevTestimonial);

// Auto play
setInterval(nextTestimonial, 5000);

// Initialize
showTestimonial(testimonialCurrent);
