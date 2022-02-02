'use strict'

// ============ 00 SORTED ============

/*
The sort method changes the original array.
 */

// Option I
// const unsorted = [6, 1, 5, 8, 4, 2, 9, 7, 3];
// const ascending = [...unsorted].sort((a, b) => a - b).map(d => d * 100);
// const descending = ascending.slice().sort((a, b) => b - a).map(d => d / 10);
//
// console.log('unsorted', unsorted);
// console.log('ascending', ascending);
// console.log('descending', descending);

// Option II
// // let arr = [7, 3, 5, 8, 1];
// let arr = [7, 3, 13, 5, 134, 8, 1];
// // arr.sort();
// arr.sort((a, b) => {
//     console.log(a + ' ' + b);
//     return a - b;
// })
//
// console.log(arr);


// const arr2 = [
//     {one: 1, two: 2},
//     {one: 7, two: 1},
//     {one: 3, two: 3},
//     {one: 6, two: 9},
//     {one: 4, two: 8},
// ];
//
// arr2.sort((a, b) => {
//     return a.two - b.two;
// });
//
// console.log(arr2)


// ============ 01 MERGE INTERVALS ============
/*
Условия задачи следующие: на вход подается массив интервалов (от и до).
К примеру, речь идет о начале и окончании встреч. На выход вы должны вернуть новый массив интервалов,
в котором будут помечены все занятые встречами отрезки времени.
Если два каких-то митинга пересекаются, то в результат должен попасть один отрезок времени с самым ранним началом
и самым поздним окончанием из этих двух встреч. Митинги также считаются пересекающимися, если один начинается ровно тогда,
когда закончился предыдущий.
*/

// let input1 = [[1,3], [2,6], [8, 10], [15, 18]];
// let input2 = [[1, 4], [4, 5]];
// let input3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]];
//
// function merge(intervals) {
//     if (intervals.length < 2) return intervals;
//
//     // sorted be first element in each array
//     intervals.sort((a, b) => a[0] - b[0]);
//
//
//     let result = [intervals[0]];
//     for (let interval of intervals) {
//         let recent = result[result.length - 1];
//
//         if (recent[1] >= interval[0]) {
//             recent[1] = Math.max(recent[1], interval[1])
//         } else {
//             result.push(interval);
//         }
//     }
//     return result;
// }
//
// console.log(merge(input1));
// console.log(merge(input2));
// console.log(merge(input3));



// ============ 02 FIBONACCI ============

// // 1, 1, 2, 3, 5, 8, 13
// // f(n) = f(n-1) + f(n-2)
//
// // Option I
// function fibonacci(n) {
//     if (n <= 0) {
//         return 0;
//     }
//
//     if (n <= 2) {
//         return 1;
//     }
//
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
//
//
// // Option II
//
// function iterationFibonacci(n) {
//     if (n <= 0) return 0;
//     if (n <= 2) return 1;
//
//     let prev = 1;
//     let result = 1;
//     for (let i = 0; i < n - 2; i++) {
//         let tmp = result;
//         result += prev;
//         prev = tmp;
//     }
//     return result;
// }
//
// console.log(fibonacci(5));
// console.log(fibonacci(7));
// console.log(fibonacci(10));
// console.log(fibonacci(20));
//
// console.log(iterationFibonacci(5));
// console.log(iterationFibonacci(7));
// console.log(iterationFibonacci(10));
// console.log(iterationFibonacci(20));


// ============ 03 PALINDROME ============

// // Option I
// function palindrome (string) {
//     string = string.toLowerCase();
//     for (let i = 0; i < string.length / 2; i++) {
//         if (string[i] !== string[string.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(palindrome('Anna'));
// console.log(palindrome('Gabriella'));
//
//
// // Option II
// function palindrome2 (string) {
//     string = string.toLowerCase();
//     return string === string.split('').reverse.join('');
// }
//
// console.log(palindrome('Anna'));
// console.log(palindrome('Gabriella'));



// ============ 04 FUNC ============

// function one(callback) {
//     return callback ? callback(1) : 1;
// }
//
// function two(callback) {
//     return callback ? callback(2) : 2;
// }
//
// function three(callback) {
//     return callback ? callback(3) : 3;
// }
//
// function four(callback) {
//     return callback ? callback(4) : 4;
// }
//
// function five(callback) {
//     return callback ? callback(5) : 5;
// }
//
// function six(callback) {
//     return callback ? callback(6) : 6;
// }
//
// function seven(callback) {
//     return callback ? callback(7) : 7;
// }
//
// function eight(callback) {
//     return callback ? callback(8) : 8;
// }
//
// function nine(callback) {
//     return callback ? callback(9) : 9;
// }
//
//
// function plus(a) {
//     return (b) => a + b;
// }
//
// function minus(a) {
//     return (b) => b - a;
// }
//
// function divide(a) {
//     return (b) => b / a;
// }
//
// function multiply(a) {
//     return (b) => a * b;
// }
//
//
// console.log(one(plus(three())));
// console.log(seven(minus(six())));
// console.log(four(multiply(seven())));
// console.log(nine(divide(three())));



// ============ 05 FUNC ============

/*
    Дан словарь из городов и дат концертов Океан Ельзи.
    Необходимо преобразовать словарь (key-value) в массив из названий городов
    Вывод городов должен быть в хронологическом порядке
    Города в которых концерт уже прошел нужно исключить
    Результат ['Kropyvnytskiy', 'Zytomyr', 'Kharkiv', 'Lutsk', 'Uzhorod']
 */

// const concerts = {
//     'Chernihiv': new Date('2022-02-01'),
//     'Odessa': new Date('2021-10-17'),
//     'Lutsk': new Date('2022-09-11'),
//     'Summy': new Date('2022-01-31'),
//     'Kharkiv': new Date('2022-07-29'),
//     'Ivano-Frankivsk': new Date('2021-08-08'),
//     'Zytomyr': new Date('2022-07-02'),
//     'Uzhorod': new Date('2022-12-18'),
//     'Kropyvnytskiy': new Date('2022-05-10'),
// }
//
// function concertsToArray(concerts) {
//     return Object.keys(concerts)
//         .filter(city => concerts[city] > new Date())
//         .sort((a, b) => concerts[a] - concerts[b]);
// }
//
// console.log(concertsToArray(concerts));



// ============ 06 ARRAY UNIQUE VALUES ============

/*
    Написать функцию, которая возвращает
    массив только с уникальными значениями
    [1,1,2,2,3,4,5,5] -> [3,4]
 */

// // Option I
// function uniqueValue(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//
//         if (count === 1) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
//
// console.log(uniqueValue([1, 3, 4, 2, 3, 4, 6, 6, 8, 3, 9]));
//
//
// // Option II
// function arrayWithoutRepeat(arr) {
//     const result = [];
//     const dictionary = {};
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
//     }
//
//     for(let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (dictionary[item] === 1) {
//             result.push(item);
//         }
//     }
//     return result;
// }
//
// console.log(arrayWithoutRepeat([11, 13, 12, 18, 11, 19, 17, 12, 17, 12, 18, 12, 17, 12]));



// ============ 07 LINEAR SEARCH ============

// const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
// let count = 0;
// function linearSearch(array, item) {
//     for(let i = 0; i < array.length; i++) {
//         count += 1;
//         if (array[i] === item) {
//             return i
//         }
//     }
//     return null;
// }
//
// console.log(linearSearch(array, 11));
// console.log('count', count);


// ============ 08 BINARY SEARCH ============
// const arrayBinary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let count = 0;
//
//
// // Option I
// function binarySearch(array, item) {
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while (found === false && start <= end) {
//         count += 1;
//         middle = Math.floor((start + end) / 2);
//         if (array[middle] === item) {
//             found = true;
//             position = middle;
//             return position;
//         }
//         if (item < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position;
// }
//
// console.log(binarySearch(arrayBinary, 15));
// console.log(count);
//
// // Option II
// function recursiveBinarySearch(array, item, start, end) {
//     let middle = Math.floor((start + end) / 2);
//     count ++;
//     if (item === array[middle]) {
//         return middle
//     }
//     if (item < array[middle]) {
//         return recursiveBinarySearch(array, item, 0, middle - 1)
//     } else {
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }
// }
//
// console.log(recursiveBinarySearch(arrayBinary, 15, 0, arrayBinary.length));
// console.log(count);



// ============ 09 SELECTION SORT ============
// const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32] // [0,1,1,2,3.......]
// let count = 0;
//
// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let indexMin = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[indexMin]) {
//                 indexMin = j;
//             }
//             count++;
//         }
//         let tmp = array[i];
//         array[i] = array[indexMin];
//         array[indexMin] = tmp;
//     }
//     return array;
// }
//
// console.log(selectionSort(arr));
// console.log(arr.length);
// console.log('count', count);



// ============ 10 BUBBLE SORT ============
// const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32] // [0,1,1,2,3.......]
// let count = 0;
//
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let tmp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = tmp;
//             }
//             count++;
//         }
//     }
//     return array;
// }
//
// console.log(bubbleSort(arr));
// console.log(arr.length);
// console.log('count', count);



// ============ 11 BUBBLE SORT ============
// const arr = [0,3,2,5,6,8,1,9, 44, 59, 4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32, 2,9,6,4,1,7,-1, -5, 23,6,2,3, 2,9,6,4,1,7,-1, -5, 23,6,2,3] // [0,1,1,2,3.......]
// let count = 0;
//
// function quickSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     let pivotIndex = Math.floor(array.length / 2);
//     let pivot = array[pivotIndex];
//     let less = [];
//     let greater = [];
//     for (let i = 0; i < array.length; i++) {
//         count ++;
//         if (i === pivotIndex)
//             continue;
//         if (array[i] < pivot) {
//             less.push(array[i])
//         } else {
//             greater.push(array[i])
//         }
//     }
//     return [...quickSort(less), pivot, ...quickSort(greater)];
// }
//
// console.log(quickSort(arr));
// console.log(arr.length);
// console.log('count', count);



// ============ 12 RECURSION | FACTORIAL ============

// const factorial = (n) => {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1)
// }
//
// console.log(factorial(5));
// console.log(factorial(8));



// ============ 13 RECURSION | FIBONACCI ============

// const fibonacci = (n) => {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
//
// console.log(fibonacci(5));
// console.log(fibonacci(8));












