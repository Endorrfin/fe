// let js = 'amazing';
// if(js === 'amazing') alert('JavaScript is FUN!');


/*
console.log(40 + 8 + 23 + -10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// THE 7 PRIMITIVE DATA TYPES

// 1. Number
let age = 23;
// 2. String
let firstName = 'Jonas';

// 3. Boolean
let fullAge = true;

// 4. Undefined
let children;

// 5. Null: Also means 'empty value'

// 6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]

// 7. BigInt (ES2020): Larger integers than the Number type can hold



let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof  true);
console.log(typeof  javascriptIsFun);
console.log(typeof   23);
console.log(typeof 'Jonas');

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year); // undefined
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/

// [MATH OPERATORS]
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`); // modern variant

// [ASSIGNMENT OPERATORS]
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25;
// x *= 4; // x = x * 4 = 100;
// x++; // x = x + 1 = 101;
// x--; // x = x - 1 = 100;
// console.log(x);

// [COMPARISON OPERATORS]
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
//
// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);


// ============ OPERATOR PRECEDENCE ============

// [OPERATOR PRECEDENCE]
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25-10-5; // x = y = 10;
// console.log(x, y);

// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge);


// ============ CODING CHALLENGE #1 ============

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/


// Option I
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Option II
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log('BMIMark', BMIMark.toFixed(1), 'BMIJohn', BMIJohn.toFixed(1), 'markHigherBMI', markHigherBMI);


// ============ STRINGS & TEMPLATE LITERALS ============

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew)

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);


// ============ TAKING DECISIONS IF ELSE STATEMENT ============

// const age = 15;
//
// if (age >= 18) {
//     console.log('Sarah can start driving license ');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }
//
//
// const birthYear = 1998;
//
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
//
// console.log(century);


// ============ 19 CODING CHALLENGE #2 ============

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// Option I
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Option II
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!");
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//     console.log("John's BMI is higher than Mark's!");
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's! ${BMIMark}`);
// }


// ============ 20 TYPE CONVERSION & COERCION ============

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas')); // NaN
// console.log(typeof NaN); // number

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('23' - '10' - 3); // 10
// console.log('23' + '10' + 3); // 23103
// console.log('23' / '2'); // 11.5

// let n = '1' + 1;
// n = n -1;
// console.log(n); // 10

// console.log(2 + 3 + 4 + '5'); // 95
// console.log('10' - '4' - '3' - 2 + '5'); // 15


// ============ 21 TRUTHY & FALSY VALUES ============

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('')); // false
// console.log(Boolean('Jonas')); // true
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true

// const money = 10;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }


// ============ 22 EQUALITY OPERATORS == VS === ============

// const age = '18';
// if (age === 18) console.log('You just become an adult :D (strict)');

// if (age == 18) console.log('You just become an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23, 7 or 9');
// }

// if (favourite !== 23) {
//     console.log('Why not 23?');
// }










