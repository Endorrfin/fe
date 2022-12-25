'use strict';

// ======= What will show console log? #1 =======
function showConsole () {
  console.log(1 + '2'); // 12
  console.log('1' + 2); // 12
  console.log(1 + 3 + '2'); // 42
  console.log([] + []); // ' '
  console.log([] + {}); // [object Object]
  console.log({} + []); // [object Object]
  console.log({} + {}); // [object Object][object Object]
  console.log('5' - 3); // 2
  console.log('5' + 3); // '53'
  console.log('5' - '4'); // 1
  console.log(3 + 2 - '1'); // 4
  console.log('3' + 2 - 1); // 31
  console.log(+'10' + 1); // 11
  console.log(null + 5); // 5
  console.log(true + undefined); // Nan
  console.log('5' + +'5'); // 55
  console.log(5 + +'5'); // 10
  console.log('foo' + 'foo'); // foofoo
  console.log('foo' + +'foo'); // fooNaN
  console.log('5' + -2); // '5-2'
  console.log(null == undefined) // true
  console.log(undefined === undefined) // true
  console.log(null === null) // true
  console.log(NaN == undefined) // false
  console.log(NaN == null) // false
  console.log(NaN === NaN) // false
  console.log(NaN == NaN) // false
  console.log(typeof typeof 1); // string
  console.log(typeof null); // object - признанный баг
}

// console.log(showConsole());





// -------------- Unit 1.1 What will be the output of this code? --------------

var a = {},
  b={key:'b'},
  c={key:'c'};

a[b]=123;
a[c]=456;

// console.log(a[b]);
// console.log({}.toString())


// -------------- Unit 1.2 What will be the output of this code? --------------
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
// girl ();


// -------------- Unit 1.3 Imagine you have this code? --------------
var a = [1, 2, 3];
// a) Will this result in a crash?
a[10] = 99;
// b) What will this output?
// console.log(a[6]);



// -------------- Unit 1.4 ему равно foo.length? --------------
var foo = {};
foo.bar = 'hello';
// console.log(foo.length);


// -------------- Unit 1.5 What will show console log? --------------
var RED = 'red';
const red = 'red';
var RED = 'blue';
// red = 'blue';
// console.log(RED);




// -------------- Unit 1.6 What will show console log? --------------
var a = {};
var b = a;
// console.log(a === b);

var c = {};
var d = {};
// console.log(c === d); // false - передача по сслыке, а ссылки разные




// -------------- Unit 1.7 What will show console log? --------------
let num = 5;

// function run(fromWhom, fromWhom) {
//   return fromWhom
// }
// console.log( run(1, 2) );
// console.log( num );
// console.log( zombie );

// 13.
for (let i = 0; i < 10; i++) {
  let count = 10;
  count += i
}

// console.log(count);


// -------------- Unit 1.8 What will show console.log? --------------
 for(var i = 0; i < 3; i++) {
   setTimeout(function () {
     // console.log(i); // 3
   }, i * 1000);
 }


// -------------- Unit 1.9 What will show console.log? --------------
 for(let i = 0; i < 3; i++) {
  setTimeout(function () {
    // console.log(i); // 0, 1, 2
  }, i * 1000);
}



// -------------- Unit 2.1 What will show console.log? --------------
const multiply = new Function('x', 'y', 'return x * y');
// console.log(multiply(3, 4));


// -------------- Unit 2.2 What will show console.log? --------------
class User {
  constructor () {
    this.name = 'Frank';
    this.age = 101;
  }

  greet () {
    return this.name;
  }

  mother () {
    this.name = 'Arianne';
    return this.greet();
  }
}

const user = new User();
// console.log(user.greet());
// console.log(user.mother());


// -------------- Unit 2.3 What will show console.log? --------------
const capitalize = ([a, ...other]) => a.toUpperCase() + other.join('');
let result = capitalize('hello');
// console.log(result);


// -------------- Unit 2.4 What will show console.log? --------------
const mixArray1 = [3, '', 14, false, 15.8, true, 0, 'name', undefined, 100, NaN, 'true', 'false', ' ', -0, [], {}];
const mixArray2 = mixArray1.filter(Boolean);
// console.log(mixArray2);


// -------------- Unit 2.5 What will show console.log? --------------
let a2 = 7;
function test (a2) {
  return a2++;
}

// console.log(test());


// -------------- Unit 3.1 What will show console.log? --------------
const id = document.body.id = 1;
// console.log(id === 1);
// console.log(document.body.id === 1);









