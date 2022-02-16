'use strict';

// ============ 03 Mapping Users to Get Usernames ============

/*
* 1. Write code to get array of names from given array of users,
* 2. Get back only active users,
* 3. Sort users by age descending
*
* */

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 17
  },
  {
    id: 2,
    name: 'Nick',
    isActive: true,
    age: 52
  },
  {
    id: 3,
    name: 'Bob',
    isActive: false,
    age: 24
  },
  {
    id: 4,
    name: 'Georg',
    isActive: true,
    age: 38
  },
  {
    id: 5,
    name: 'Akim',
    isActive: false,
    age: 46
  }
];


// // Solve I
// const names = []
// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
// }


// // Solve II
// users.sort((user1, user2) => user1.age < user2.age ? -1 : 1)
// const names = []
// users.forEach((user) => {
//   if (user.isActive) {
//     names.push(user.name);
//   }
// })


// // Solve III
// const names = users
//   .sort((user1, user2) => user1.age < user2.age ? -1 : 1)
//   .filter((user) => user.isActive)
//   .map((user) => user.name);
//
// console.log(names);


// ============ 04 Difference between null and undefined ============

// let var1;
// console.log(var1);
// console.log(typeof var1);
//
// let var2 = null;
// console.log(var2);
// console.log(typeof var2);


// ============ 05 Hoisting ============

/*
* What will be console.logged here
* */

// // Question 1
// console.log(foo); // Error
// foo = 1;


// // Question 2
// console.log(foo); // undefined
// var foo = 2;


// // Question 3
// var foo;
// console.log(foo); // undefined
// foo = 3;


// // Question 4
// foo = 4;
// console.log(foo); // 4
// var foo;




// ============ 06 Closures ============

/*
* Create a counter function which has increment and genValue functionality
* */

// const privateCounter = () => {
//   let count = 0;
//
//   return {
//     increment: (val = 1) => {
//       count += val;
//     },
//
//     getValue: () => {
//       return count;
//     },
//   };
// };
//
// const counter = privateCounter();
// console.log(counter.getValue()); // 0
// counter.increment();
// console.log(counter.getValue()); // 1
//
// console.dir(counter.getValue);
//
//
// const privateSecret = () => {
//   const secret = 'foo';
//
//   return () => secret;
// };
//
// const getSecret = privateSecret();
// console.log(getSecret()); // foo




// ============ 07 Currying ============

/*
* Write a function which helps to achieve multiply(a)(b) and returns product of a and b
* Create a curry function
* */

// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };
//
// console.log(multiply(2)(3)); // 6


// const multiply = (num1) => (num2) => num1 * num2;
// console.log(multiply(2)(3));



// const multiply = (num1) => {
//   return (num2) => {
//     return (num3) => {
//       return num1 * num2 * num3;
//     }
//   };
// };
//
// console.log(multiply(2)(3) (4)); // 24


// const curry = function (fn) {
//   var arity = fn.length;
//   console.log('arity', arity);
//
//   return function f1(...args) {
//     // console.log('f1', args);
//     if (args.length >= arity) {
//       console.log('enough arguments');
//       return fn(...args);
//     } else {
//       console.log('need mere arguments');
//       return function f2(...moreArgs) {
//         var newArgs = args.concat(moreArgs);
//         return f1(...newArgs);
//       };
//     }
//   };
// };
//
// const curriedSum = curry((a, b, c) => a + b + c);
// const partialLyCurriedSum = curriedSum(1);
// console.log(partialLyCurriedSum(2, 3));
// console.log(curriedSum(1, 2, 3));
//
//
// const get = curry((property, object) => object[property]);
// const getId = get('id');
// const map = curry((fn, values) => values.map(fn));
// const getIds = map(getId);



// ============ 08 Adding Elements of the Array ============

/*
* Write a function which get's an array and an element and returns a array with this element at the end
* */

// ---- Option I ----
// const arr1 = [1, 2, 3, 4,];
// console.log(arr1.push(5));


// ---- Option II ----
// const numbers = [1, 2];
// const append = (arr, el) => {
//   // arr.push(el);
//
//   return [...arr, el];
// };
//
// console.log(append([1, 2, 3, 4, 5, 6, 7], 5));
// console.log(append(numbers, 3));
// console.log(append(numbers, 4));
// console.log(append(numbers, 11));
//
// const newNumbers = append(numbers, 3);
// console.log(newNumbers);
// console.log(numbers);



// ============ 09 Concatenating Arrays ============

/*
* Write a function which can concatenate 2 arrays
* */

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
//
// // console.log('Option I', arr1.concat(arr2));
// // console.log('Option II', ...arr1, ...arr2);
//
//
// const mergeArrays = (arr1, arr2) => {
//   //return arr1.push(...arr2); // bad approach because push mutation initial array
//   return arr1.concat(...arr2); // good result
//   return [...arr1,...arr2]; // good result
// }
//
// const result = mergeArrays(arr1, arr2);
// console.log('result', result, 'arr1', arr1, 'arr2', arr2);
//
// // console.log('result', mergeArrays( arr1, arr2));



// ============ 10. Check if User With Such Name Exists ============

/*
* Check that user with such name exists in array of objects
* */

// users.forEach((user) => {
//   if (user.name === 'Bob') {
//     console.log("Yes");
//   } else {
//     console.log('No');
//   }
// });


// // Option I
// const isNameExists1 = (name, array) => {
//   let exists = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].name === name) {
//       exists = true;
//     }
//   }
//   return exists;
// }
//
// console.log(isNameExists1('Georg', users));
// console.log(isNameExists1('Mike', users));
// console.log(isNameExists1('Julia', users));
// console.log(isNameExists1('Akim', users));


// // Option II
// const isNameExists2 = (name, arr) => arr.some((el) => el.name === name);
// console.log(isNameExists2('Georg', users));
// console.log(isNameExists2('Mike', users));
// console.log(isNameExists2('Julia', users));
// console.log(isNameExists2('Akim', users));


// // Option III
// const isNameExists3 = (name, arr) => {
//   const el = arr.find((el) => el.name === name);
//   return Boolean(el);
// }
// console.log(isNameExists3('Georg', users));
// console.log(isNameExists3('Mike', users));
// console.log(isNameExists3('Julia', users));
// console.log(isNameExists3('Akim', users));


// // Option IV
// const isNameExists4 = (name, arr) => {
//   const index = arr.findIndex((el) => el.name === name);
//   return index > 0;
// }
// console.log(isNameExists4('Georg', users));
// console.log(isNameExists4('Mike', users));
// console.log(isNameExists4('Julia', users));
// console.log(isNameExists4('Akim', users));


// ============ 11. Remove all Duplicates in the Array ============

/*
* Remove all duplicates in the array
* */

// const arr = [1, 2, 3, 1, 2];
//
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);
//
//
// // Option I
// const uniqueArr1 = (arr) => {
//   return [...new Set(arr)];
// };
// console.log(uniqueArr1(arr));
//
//
//
// // Option II
// const uniqueArr2 = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   })
//   return result;
// };
// console.log(uniqueArr2(arr));
//
//
// // Option III
// const uniqueArr3 = (arr) => {
//   return arr.reduce((acc, el) => {
//     return acc.includes(el) ? acc : [...acc, el];
//   }, []);
// };
// console.log(uniqueArr3(arr));



// ============ 12. Sorting the array ============

/*
* Sort the array of numbers
* */

// const arr = [3, 5, 1];
// const result = arr.sort((a, b) => (a < b ? -1 : 1));
// console.log(arr, result);
//
//
// const books = [
//   { name: 'Harry Potter', author: 'Joanne Rowling' },
//   { name: 'Warcross', author: 'Marie Lu' },
//   { name: 'The Hunger Games', author: 'Suzanne Collins' },
// ];
//
// books.sort((book1, book2) => {
//   const authorLastName1 = book1.author.split(' ')[1];
//   const authorLastName2 = book2.author.split(' ')[2];
//   return authorLastName1 < authorLastName2 ? -1 : 1;
// })
// console.log(books);


// ============ 14. Writing Range Function ============

/*
* Write a function which implement range
* range (1, 50)
* 1, 2, 3, 4, 5, 6, .... ,50
* */

// // Option I
// const range = (start, end) => {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//
//   return result;
// }
// console.log(range(1, 50));
//
// // Option II
// const range2 = (start, end) => {
//   return [...Array(end).keys()].map((el) => el + start);
// }
//
// console.log(range2(1, 11));



// ============ 15. Writing Shuffle Function ============

/*
* Write a function which implements shuffle
* */

// const shuffleItems = (items) => {
//   return items
//     .map((item) => ({ sort: Math.random(), value: item }))
//     .sort((item1, item2) => item1.sort - item2.sort)
//     .map((a) => a.value);
// };
//
// console.log(shuffleItems([1,2]));


// ============ 16. Find the Number of Occurrences of Minimum Value in List ============

/*
* Find the number of occurrences of minimum value in the list
* */

// const arr = [1, 3, 3, 4, 5, 8, 3, 5, 1, 2, 1, 5, 1, 2, 1];
// const minValue = Math.min(...arr);
// const minArr = arr.filter((el) => el === minValue);
// console.log(minArr.length);















