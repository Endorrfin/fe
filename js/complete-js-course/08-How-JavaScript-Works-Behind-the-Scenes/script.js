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



// ============ 98 Regular Functions vs. Arrow Functions ============
//
// var firstName = 'Matilda';
//
// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//
//
//     //  // Error
//     //     const isMillenial = function() {
//     //         console.log(this);
//     //         // console.log(this.year >= 1981 && this.year <= 1996); // Error
//     //     };
//     //     isMillenial(); // undefined
//     // },
//
//         // Solution 1
//     //     const self = this; // self of that
//     //     const isMillenial = function() {
//     //         console.log(this);
//     //         console.log(self.year >= 1981 && self.year <= 1996); // object(jonas)
//     //     };
//     //     isMillenial(); // true
//     // },
//
//         // Solution 2
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996); // object(jonas)
//         };
//         isMillenial(); // true
//     },
//
//     // Arrow Function
//     // greet: () => {
//     //     console.log(this);
//     //     console.log(`Hey ${this.firstName}`)
//     // },
//
//     // Regular Function
//     greet: function () {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`)
//     },
// };
//
// jonas.greet();
// jonas.calcAge();
//
//
// // arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
//
//
// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
//
// addArrow(2, 4, 8); // arguments is not defined
//



// ============ 99 Primitives vs. Objects (Primitives vs. Reference Types) ============

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30
//
//
// const me = {
//     name: 'Jonas',
//     age: 30,
// };
//
// const friend = me;
// friend.age = 27;
// console.log('Friend: ', friend); // Friend:  {name: 'Jonas', age: 27}
// console.log('Me', me); // Me {name: 'Jonas', age: 27}



// ============ 100 Primitives vs. Objects if Practice ============

// // Primitives types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);
//
//
// // Reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
//
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);
//
//
// // Copying objects
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob'],
// };
//
//
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
//
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
//
// console.log('Before marriage:', jessica2); // {firstName: 'Jessica', lastName: 'Williams', age: 27}
// console.log('After marriage:', jessicaCopy); // {firstName: 'Jessica', lastName: 'Davis', age: 27}










