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







