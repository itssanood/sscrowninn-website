document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, phone, roomType, checkin, checkout } = e.target;
  const msg = document.getElementById('formMsg');
  if (new Date(checkout.value) <= new Date(checkin.value)) {
    msg.textContent = '⚠️ Check‑out date must be after check‑in.';
    return;
  }
  msg.textContent = `Thanks ${name.value}! Your ${roomType.value} is booked from ${checkin.value} to ${checkout.value}. We'll call you at ${phone.value}.`;
  e.target.reset();
});
console.log('Website fully loaded and ready.');