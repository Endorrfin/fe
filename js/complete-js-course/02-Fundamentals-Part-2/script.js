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



// ============ 43 Dot vs. Bracket Notation ============

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
//
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
//
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]); // Jonas
// console.log(jonas['last' + nameKey]); // Schmedtmann
//
// // console.log(jonas.'last' + nameKey); // error
//
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firsName, lastName, age, job and friends');
//
// // console.log(interestedIn); // input result
// // console.log(jonas.interestedIn); // undefined
// // console.log(jonas[interestedIn]); // result of object value
//
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firsName, lastName, age, job and friends')
// }
//
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
//
// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// ============ 44 Object Methods ============

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // },
//
//     // calcAge: function () {
//     //     console.log(this); // jonas Object
//     //     // return 2037 - jonas.birthYear; // Don't repeat yourself
//     //     return 2037 - this.birthYear;
//     // },
//
//     calcAge: function (birthYear) {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };
//
// // console.log(jonas.calcAge(1991));
// // console.log(jonas[' '](1991));
//
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
//
// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());


// ============ 45 Coding Challenge #3 ============
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// };
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// };
//
// mark.calcBMI();
// john.calcBMI();
//
// console.log('Mark', mark.bmi, 'John', john.bmi);
//
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }


// ============ 46 Iteration The for Loop ============

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10;  rep = rep + 1) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀ `);
// }



// ============ 47 Looping Arrays, Breaking and Continuing ============

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
//
// const types = [];
//
// // console.log(jonas[0]);
// // console.log(jonas[1]);
// // ...
// // console.log(jonas[4]);
// // jonas[5]; does NOT exist
//
// for (let i = 0; i < jonas.length; i++ ) {
//     // console.log(jonas[i]);
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
//
//     // Filing types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
//
// // types[0] = 'string';
// console.log(types);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
//
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages); // [46, 30, 68, 17]
//
//
// // continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonas.length; i++ ) {
//     if(typeof jonas[i] !== 'string') continue;
//
//     console.log(jonas[i], typeof jonas[i]);
// }
//
//
//
// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++ ) {
//     if(typeof jonas[i] === 'number') break;
//
//     console.log(jonas[i], typeof jonas[i]);
// }




// ============ 48 Looping Backwards and Loops in Loops ============

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
//
// // 0, 1, ..., 4
// // 4, 3, ..., 0
//
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }
//
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- STARTING EXERSISE ${exercise}`);
//
//     // for (let rep = 1; rep < 6; rep++) {
//     //     console.log(`Lifting weight repetition ${rep} 🏋️‍♀`)
//     // }
//
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀`)
//     }
// }


// ============ 49 The while Loop ============

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep} 🏋️‍`);
// }

// let rep = 1;
// while (rep <= 12) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }


// ============ 50 Coding Challenge #4 ============

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//
// const tips = [];
// const totals = [];
//
// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
//
// console.log('bills', bills, 'tips', tips, 'totals', totals);
//
// const calcAverage = function(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     // console.log('SUM', sum);
//     return sum / arr.length;
// }
//
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
























