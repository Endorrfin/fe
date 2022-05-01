'use strict';

// ==========================================================
//            128 Default Parameters
// ==========================================================

// const bookings = [];
// const createBooking = function(
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
//
// createBooking('LH123');
// createBooking('LH124', 2, 800);
// createBooking('LH125', 3);
// createBooking('LH126', 5);
//
// createBooking('LH127', undefined, 1000);


// ==========================================================
//    129 How Passing Arguments Works: Value vs. Reference
// ==========================================================

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
//
// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);












