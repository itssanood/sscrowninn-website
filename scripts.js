// ROOM SLIDER (auto change each .slider)
document.querySelectorAll('.slider').forEach(slider => {
  let index = 0;
  const images = slider.querySelectorAll('img');
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
});

// PHOTO GALLERY SLIDER
const photoSection = document.querySelector('.photo-gallery');
const photoSlides = photoSection.querySelectorAll('.carousel-track img');
const photoDotsContainer = photoSection.querySelector('.dots');
const photoPrevBtn = photoSection.querySelector('.prev');
const photoNextBtn = photoSection.querySelector('.next');
let photoCurrent = 0;

// Create dots
photoSlides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => photoGoToSlide(i));
  photoDotsContainer.appendChild(dot);
});
const photoDots = photoDotsContainer.querySelectorAll('span');

function photoUpdateSlider(index) {
  photoSlides.forEach(slide => slide.classList.remove('active'));
  photoDots.forEach(dot => dot.classList.remove('active-dot'));
  photoSlides[index].classList.add('active');
  photoDots[index].classList.add('active-dot');
}

function photoGoToSlide(index) {
  photoCurrent = index;
  photoUpdateSlider(photoCurrent);
}

function photoNextSlide() {
  photoCurrent = (photoCurrent + 1) % photoSlides.length;
  photoUpdateSlider(photoCurrent);
}

function photoPrevSlide() {
  photoCurrent = (photoCurrent - 1 + photoSlides.length) % photoSlides.length;
  photoUpdateSlider(photoCurrent);
}

photoNextBtn.addEventListener('click', photoNextSlide);
photoPrevBtn.addEventListener('click', photoPrevSlide);

// Auto play
setInterval(photoNextSlide, 5000);

// Initialize
photoUpdateSlider(photoCurrent);
