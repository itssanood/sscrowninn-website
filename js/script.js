document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const checkin = data.get("checkin");
  const checkout = data.get("checkout");
  const room = data.get("room");
  const guests = data.get("guests");
  const name = data.get("name");
  const phone = data.get("phone");

  const bookingID = 'SS' + Date.now().toString().slice(-6);
  const msg = `Booking Request:%0A
  Booking ID: ${bookingID}%0A
  Name: ${name}%0A
  Phone: ${phone}%0A
  Room Type: ${room}%0A
  Guests: ${guests}%0A
  Check-in: ${checkin}%0A
  Check-out: ${checkout}`;

  const url = `https://wa.me/916364309962?text=${msg}`;
  window.open(url, '_blank');
});
