const form = document.getElementById("bookingForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const room = form.roomType.value;
  const checkin = form.checkin.value;
  const checkout = form.checkout.value;

  if (name.length < 3 || phone.length < 10 || !room || !checkin || !checkout) {
    formMsg.textContent = "Please fill all fields correctly.";
    formMsg.style.color = "#ff6b6b";
    return;
  }

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  if (checkinDate >= checkoutDate) {
    formMsg.textContent = "Check-out must be after check-in.";
    formMsg.style.color = "#ff6b6b";
    return;
  }

  formMsg.textContent = "Booking confirmed! We will contact you shortly.";
  formMsg.style.color = "#e6b400";
  form.reset();
});