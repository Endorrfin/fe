// source: https://dev.to/ahmetkapusuz/what-is-the-temporal-dead-zone-in-javascript-3hlc
// https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6/31222689#31222689

// ------- Example I -------
var foo1 = 'foo';
// console.log(foo1); // foo


// ------- Example II -------
// console.log(foo2); // undefined
var foo2 = 'foo';


// ------- Example III -------
// console.log(foo3); // ReferenceError
let foo3 = 'foo';


// ------- Example IV -------
var foo4 = 'first';
function example() {
  // console.log(foo4); // undefined
  var foo4 = 'second';
}
example();


// ------- Example V -------
// let foo = 'first';
// function example() {
//   console.log(foo); // ReferenceError
//   let foo = 'second';
// }
// example();



// ============ setTimeout ============

// ------- Example I -------
for (var i = 1; i < 10; i++) {
    setTimeout(function(){
        // console.log(i);
    }, 0);
}


// ------- Example II -------
for (let i = 1; i < 10; i++) {
    setTimeout(function(){
        // console.log(i);
    }, 0);
}

