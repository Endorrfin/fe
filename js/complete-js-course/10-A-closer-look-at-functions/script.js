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

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   }
// };
//
// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
//
// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: []
// };
//
// const book = lufthansa.book;
//
// // Does NOT work
// // book(23, 'Sarah Williams');
//
// // CALL METHOD
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
//
// book.call(lufthansa, 239, 'Mary, Cooper');
// console.log(lufthansa);
//
//
// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: []
// };
//
// book.call(swiss, 583, 'Mary Cooper');
//
//
// // APPLY METHOD
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
//
// book.call(swiss, ...flightData);


// ==========================================================
//              134 The bind Method
// ==========================================================

// // BIND METHOD
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
//
//
// bookEW(23, 'Steven Williams');
//
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');
//
// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log('this', this);
//
//   this.planes++;
//   console.log(this.planes);
// };
//
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//
//
// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//
// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;
//
// console.log(addVAT(100));
// console.log(addVAT(23));
// console.log(addVAT(10));
//
//
// const addTaxRate = function(rate) {
//   return function(value) {
//     return value + value * rate;
//   };
// };
//
// console.log('=======================================>');
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));
// console.log(addVAT2(10));


// ==========================================================
//              135 Coding Challenge #1
// ==========================================================

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is you favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😀
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log('answer', answer);
//
//     // Register answer
//     typeof answer === 'number' &&
//     answer < this.answers.length && this.answers[answer]++;
//
//     this.displayResults();
//     this.displayResults('string');
//   },
//
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };
//
// // poll.registerNewAnswer();
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
//
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3, 9, 6, 1] });


// ==========================================================
//     136 Immediately Invoked Function Expressions (IIFE)
// ==========================================================

// const runOnce = function() {
//   console.log('This will never run again');
// };
//
// runOnce();
//
//
// // IIFE
// (function() {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
//
// // console.log(isPrivate)
//
// (() => console.log('This will ALSO never run again'))
// ();
//
//
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
//
// // console.log(isPrivate);
// console.log(notPrivate);


// ==========================================================
//                137 Closures
// ==========================================================

// const secureBooking = function() {
//   let passengerCount = 0;
//
//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
//
// const booker = secureBooking();
//
// booker();
// booker();
// booker();
//
// console.dir(booker);


// ==========================================================
//               138 More Closure Examples
// ==========================================================

// // EXAMPLE I
// let f;
//
// let g = function() {
//   const a = 23;
//   f = function() {
//     console.log(a * 2);
//   };
// };
//
// const h = function() {
//   const b = 777;
//   f = function() {
//     console.log(b * 2);
//   };
// };
//
// g();
// f();
// console.dir(f);
//
// // Re-assigning f function
// h();
// f();
// console.dir(f);
//
//
// // EXAMPLE II
// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;
//
//
//   setTimeout(function() {
//     console.log(`We are now boarding ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//
//
//   console.log(`Will start boarding in ${wait} seconds`);
// };
//
// const perGroup = 1000;
// boardPassengers(180, 3);


// ==========================================================
//                139 Coding Challenge #2
// ==========================================================

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  });
})();



















