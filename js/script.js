document.addEventListener("DOMContentLoaded", () => {
  const roomCards = document.querySelectorAll(".room-card");
  roomCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
    }, index * 500);
  });
});