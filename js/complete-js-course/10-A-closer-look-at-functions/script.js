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

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284
// };
//
// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//
//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
//
// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);
// //
// // // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;
//
// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
//
// newPassport(jonas);
// checkIn(flight, jonas);


// ==========================================================
//      130 First-Class and Higher-Order Functions
// ==========================================================

// // FIRST-CLASS FUNCTIONS
// // JavaScript treats functions as first-class citizens
// // This means that functions are simply values
// // Functions are just another "type" of object
//
//
// // Store functions in variables or properties:
// const add = (a, b) => a + b;
// const counter = {
//   value: 23,
//   inc: function() {
//     this.value++;
//   }
// };
//
// // Pass function as arguments to OTHER functions:
// const greet = () => console.log('Hey Jonas');
// btnClose.addEventListener('click', greet);
//
// // Return functions FROM functions
// // Call methods of functions:
//
// counter.inc.bind(someOtherObject);
//
//
// // HIGHER-ORDER FUNCTIONS
// // A function that receives another function as an argument, that returns ane function, of both
// // This is only possible because of first-class functions
//
// // Function that receives another function
// const greet2 = () => console.log('Hev Jonas');
// btnClose.addEventListener('click', greet2);
//
//
// // Function that returns new function
// function count() {
//   let count = 0;
//   return function() {
//     count++;
//   };
// }


// ==========================================================
//      131 Functions Accepting Callback Functions
// ==========================================================

// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// console.log(oneWord('ParadiSe'));
//
// const upperFirsWord = function(str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// console.log(upperFirsWord('Today is beautiful day'));
//
//
// // Higher-order function
// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//
//   console.log(`Transformed by: ${fn.name}`);
// };
//
// transformer('JavaScript is the best!', upperFirsWord);
// console.log('===========================================>');
// transformer('JavaScript is the best!', oneWord);
//
// // JS uses callbacks all the time
// const high5 = function() {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);


// ==========================================================
//        132 Functions Returning Functions
// ==========================================================

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
//
// greet('Hello')('Barny');
//
// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hey')('Boy');


// ==========================================================
//        133 The call and apply Methods
// ==========================================================

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary, Cooper');
console.log(lufthansa);


const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

book.call(swiss, 583, 'Mary Cooper');


// APPLY METHOD
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);



















