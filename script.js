// JS logic placeholder for future dynamic booking flow

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Optional: Highlight current tab based on URL
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add('active');
  }
});