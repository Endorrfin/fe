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


// ============ 23 BOOLEAN LOGIC ============
// Visual theory

// ============ 24 LOGICAL OPERATORS ============

// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B
//
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }


// ============ 25 CODING CHALLENGE #3 ============

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins = (96 + 108 +89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreDolphins, scoreKoalas);
//
// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }


// BONUS 1
// const scoreDolphins = (97 + 112 +101) / 3
// const scoreKoalas = (109 + 95 + 106) / 3
// console.log(scoreDolphins, scoreKoalas);
//
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy');
// } else {
//     console.log('No one wins the trophy');
// }


// ============ 26 THE SWITCH STATEMENT ============

// const day = 'thursday';

// OPTION I
// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!')
// }

// OPTION II
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not valid day!');
// }


// ============ 27 STATEMENT & EXPRESSIONS ============
// theory


// ============ 28 THE CONDITIONAL (TERNARY) OPERATOR ============

// const age = 17;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


// ============ 29 CODING CHALLENGE #4 ============
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's
 usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not
 allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



