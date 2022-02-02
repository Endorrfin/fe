'use strict'

// ============ 93 Scoping in Practice ============

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
//
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating NEW variable with same name as outer scope's variable
//             const firstName = 'Steven';
//
//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT!';
//
//             const str = `Oh, and you're a millenial, ${firstName}`;
//
//             console.log(str);
//             function add(a, b) {
//                 return a + b;
//
//             }
//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }
//     printAge();
//     return age;
// }
//
// const firstName = 'Jonas';
// calcAge(1991);
//
// // console.log(age);
// // printAge();



// ============ 94 Variable Environment Hoisting and The TDZ ============

// const myName = 'Jonas'
//
// if (myName === 'Jonas') {
//     console.log(`Jonas is a ${job}`);
//     const age = 2037 - 1989;
//     console.log(age);
//     const job = 'teacher';
//     console.log(x);
// }


// ============ 95 Hoisting and TDZ in Practice ============

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);
//
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;
//
//
// // Functions
//
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));
//
// // console.log(addExprVar(2, 3));
// // console.log(addArrowVar(2, 3));
//
// function addDecl(a, b) {
//     return a + b;
// };
//
// const addExpr = function(a, b) {
//     return a + b;
// };
//
// const addArrow = (a, b) => a + b;
//
//
//
// var addExprVar = function(a, b) {
//     return a + b;
// };
//
// var addArrowVar = (a, b) => a + b;
//
//
// // Example
// if (!numProducts) deleteShoppingCart();
//
// var numProducts = 10;
//
// function deleteShoppingCart() {
//     console.log('All products deleted');
// }
//
//
// var x = 1; // window in console
// let y = 2;
// const z = 3;
//
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false


// ============ 97 The this Keyword in Practice ============

// console.log(this); // Window
//
// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this); // undefined
// }
//
// calcAge(1991);
//
//
// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this); // Window
// }
//
// calcAgeArrow(1980);
//
//
// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };
//
// jonas.calcAge();
//
//
// const matilda = {
//     year: 2017,
// };
//
// matilda.callcAge = jonas.calcAge;
// matilda.callcAge();
//
//
// const f = jonas.calcAge;
// f();














