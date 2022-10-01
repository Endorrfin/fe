/**
 * В якій послідовності будуть виведені console.log?
 */

// console.log(1);
//
// setTimeout(() => {
//   console.log(2);
// });
//
// const promise1 = new Promise(resolve => {
//   console.log(3);
//   resolve(4);
// });
//
//
// const promise2 = new Promise(resolve => {
//   console.log(5);
//   resolve(6);
// });
//
// promise1.then(console.log);
// promise2.then(console.log);
//
// console.log(7);

// Result - 1, 3, 5, 7, 4, 6, 2


// Exercise I -  task
// const third = (str => str + "Script.");
// const second = () => third("Java ");
//
// const First = (() => {
//     let name = second();
//     console.log("My name is " + name);
// })
//
// First ();


// Output - Hello, I am JavaScript.
// послідовність виконання - third(), second(), First().
// Працюватиме лише callStack, без залучення чого-небудь ще.


// Exercise II Asynchronous task
// console.log('Hello,');
//
// setTimeout(function(Synchronous) {
//     // This will execute in future after 5 seconds
//     console.log('cool programming language')
// }, 5000);
//
// setTimeout(function() {
//     // This will execute in future after 3 seconds
//     console.log('JavaScript - ');
// }, 3000);
// console.log("I am");


// Output - Hello, I am JavaScript - cool programming language






