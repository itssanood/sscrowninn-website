/* Reset and base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html {
  height: 100%;
  font-family: 'Open Sans', sans-serif;
}

/* Header */
header {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  z-index: 2;
}
.logo {
  color: white;
  font-size: 1.5em;
  font-weight: bold;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}
.menu span {
  width: 25px;
  height: 2px;
  background: white;
}

/* Hero Section */
.hero {
  position: relative;
  background: url('https://i.postimg.cc/9QwdWPXj/Background-image.png') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.3);
}
.content {
  position: relative;
  color: white;
  z-index: 1;
}
.subtitle {
  letter-spacing: 2px;
  font-size: 0.9em;
  margin-bottom: 10px;
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.8em;
  font-weight: 700;
}
.scroll-down {
  margin-top: 20px;
  font-size: 1.5em;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

/* Booking Section */
.booking {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 1000px;
  margin: -50px auto 40px auto;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 2;
  position: relative;
}
form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
}
.form-group {
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-weight: 600;
  margin-bottom: 5px;
}
input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #555;
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }
  .booking form {
    flex-direction: column;
    gap: 10px;
  }
}

.welcome-section {
  background: #f5f7ff;
  padding: 60px 20px;
}
.welcome-content {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.text {
  flex: 1 1 45%;
}
.text h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.text p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-primary {
  background: #ffb347;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.btn-text {
  color: #ffb347;
  font-weight: bold;
  text-decoration: none;
}
.or {
  color: #888;
}

.images {
  position: relative;
  flex: 1 1 45%;
}
.main-img {
  width: 100%;
  border-radius: 10px;
}
.circle-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white;
  position: absolute;
  bottom: -30px;
  right: -30px;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
}
.rooms-section {
  padding: 60px 20px;
  text-align: center;
}

.section-header h2 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.section-header p {
  max-width: 700px;
  margin: 0 auto 40px;
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
}

.room-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.room-card {
  max-width: 300px;
  text-align: center;
}

.slider {
  position: relative;
  width: 100%;
  padding-top: 66%; /* aspect ratio */
  overflow: hidden;
  border-radius: 8px;
}

.slider img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

.slider img.active {
  opacity: 1;
}

.room-card h3 {
  font-size: 1.4rem;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;
}

.room-card .price {
  font-weight: 600;
  color: #ffb347;
  font-size: 1rem;
}

.room-card .price span {
  font-weight: normal;
  font-size: 0.9rem;
  color: #aaa;
}

/* Responsive */
@media (max-width: 768px) {
  .room-cards {
    flex-direction: column;
    align-items: center;
  }
}
.photo-gallery {
  background: #f5f7ff;
  padding: 60px 20px;
  text-align: center;
}

.photo-gallery .section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.photo-gallery .section-header p {
  max-width: 700px;
  margin: 0 auto 30px;
  color: #555;
}

.carousel {
  position: relative;
  max-width: 800px;
  margin: auto;
}

.carousel-track {
  position: relative;
  overflow: hidden;
  height: 450px;
  border-radius: 10px;
}

.carousel-track img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

.carousel-track img.active {
  opacity: 1;
  z-index: 1;
}

.carousel button {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #444;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
}

.carousel .prev {
  left: -40px;
}

.carousel .next {
  right: -40px;
}

.dots {
  margin-top: 20px;
}

.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #bbb;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
}

.dots .active-dot {
  background: #444;
}
.testimonials {
  padding: 60px 20px;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.testimonial-carousel {
  position: relative;
  max-width: 800px;
  margin: auto;
}

.testimonial-track {
  position: relative;
  overflow: hidden;
  min-height: 250px;
}

.testimonial-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.8s ease;
  padding: 0 20px;
}

.testimonial-item.active {
  opacity: 1;
  position: relative;
}

.testimonial-item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.testimonial-item .quote {
  font-size: 1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 15px;
  line-height: 1.6;
}

.testimonial-item .author {
  font-style: italic;
  color: #777;
}

.testimonial-carousel button {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #444;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.testimonial-carousel .prev {
  left: -40px;
}

.testimonial-carousel .next {
  right: -40px;
}

.testimonial-dots {
  margin-top: 20px;
}

.testimonial-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #bbb;
  margin: 0 4px;
  border-radius: 50%;
  cursor: pointer;
}

.testimonial-dots .active-dot {
  background: #444;
}
