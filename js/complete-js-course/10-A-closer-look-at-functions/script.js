'use strict';

// ==========================================================
//            128 Default Parameters
// ==========================================================

const bookings = [];
const createBooking = function(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {

  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH124', 2, 800);
createBooking('LH125', 3);
createBooking('LH126', 5);

createBooking('LH127', undefined, 1000);





