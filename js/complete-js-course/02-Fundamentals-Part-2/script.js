'use strict'

// ============ 32 ACTIVATING STRICT MODE ============

// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // interface is not allowed as identifier in strict mode
// const private = 534 // private is not allowed as identifier in strict mode


// ============ FUNCTIONS  ============

// function logger() {
//     console.log('My name is Jonas');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
//     const juice =  `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// fruitProcessor (5, 0);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');


// ============ 34 FUNCTION DECLARATION VS. EXPRESSIONS  ============

// Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// Function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);



// ============ 35 ARROW FUNCTION  ============

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
//
// console.log(yearsUntilRetirement(1991));
//
//
// const yearsUntilRetirementParameters = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }
//
// console.log(yearsUntilRetirementParameters(1991, 'Jonas'));
// console.log(yearsUntilRetirementParameters(1980, 'Bob'));


// ============ 36 FUNCTIONS CALLING OTHER FUNCTIONS ============

// function cutFruitPieces (fruit) {
//     return (fruit * 4)
// }
//
// function fruitProcessor (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//
//     const juice =  `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }
//
// console.log(fruitProcessor(2, 3));


// ============ 37 Reviewing Functions ============

// Function declaration - function than can be used before it's declared;
// Function expression - Essentially a function value stored in a variable;
// Arrow function - Creat for a quick one-line function. Has no this keyword (more later...)

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
//
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired :)`);
//         return -1;
//     }
// }
//
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));



// ============ 38 Coding Challenge #1 ============
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
//
// // Test I
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
//
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win :D (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win :D (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
//
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);
// checkWinner(222, 777);
//
//
// // Test II
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// ============ 39 Introduction to Arrays ============

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // Peter

// friends[2] = 'Jay';
// console.log(friends); // ['Michael', 'Steven', 'Jay']
// // friends = ['Bob', 'Alice']; // Error

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// // Exercise
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years)); // errors
// const age1 = (calcAge(years[0]));
// const age2 = (calcAge(years[1]));
// const age3 = (calcAge(years[years.length - 1]));

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log('ages', ages);


// ============ 40 Basic Array Operations (Methods) ============

// const friends = ['Michael', 'Steven', 'Peter'];
//
// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// console.log(newLength);
//
// friends.unshift('John');
// console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
//
// // Remove elements
// friends.pop(); // Last
//
// const popped = friends.pop();
// console.log(popped); // Peter
// console.log(friends); // ['John', 'Michael', 'Steven']
//
// friends.shift(); // First
// console.log(friends); // ['Michael', 'Steven']
//
//
// console.log(friends.indexOf('Steven')); // 1
// console.log(friends.indexOf('Bob')); // -1
//
//
// friends.push(23);
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes(23)); // false
//
// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter');
// }
//
// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }


// ============ 41 Coding Challenge #2 ============
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// console.log(bills, tip, totals);



// ============ 42 Introduction to Objects ============
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };










