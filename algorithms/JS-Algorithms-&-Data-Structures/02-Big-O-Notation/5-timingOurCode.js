
// ======= IMPLEMENTATION #1 =======
// function addUpTo1(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
//
// let time1 = Date.now();
// console.log('Option I', addUpTo1(1000000000));
// let time2 = Date.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`); // Time Elapsed: 2.257 seconds.


// ======= IMPLEMENTATION #2 =======
// function addUpTo2(n) {
//     return n * (n + 1) / 2;
// }
//
// let time3 = Date.now();
// console.log('Option II', addUpTo2(1000000000));
// let time4 = Date.now();
// console.log(`Time Elapsed: ${(time4 - time3) / 1000} seconds.`); // Time Elapsed: 0.001 seconds.


// ======= IMPLEMENTATION #3 =======
// function countUpAndDown(n) {
//     console.log('Going up!');
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
//     console.log('At the top!\nGoing down...');
//     for (let j = n - 1; j >= 0; j--) {
//         console.log(j);
//     }
//     console.log('Back down. Bye!');
// }


// ======= IMPLEMENTATION #4 =======
// function printAllPairs(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j);
//         }
//     }
// }

// printAllPairs(3);


// ======= IMPLEMENTATION #5 =======
// function logAtLeast5(n) {
//     for (let i = 1; i <= Math.max(5, n); i++) {
//         console.log(i);
//     }
// }

// logAtLeast5(5);


// ======= IMPLEMENTATION #6 =======
// function logAtMost5(n) {
//     for (let i = 1; i <= Math.min(5, n); i++) {
//         console.log(i);
//     }
// }

// logAtMost5(3);


// ======= IMPLEMENTATION #7 =======
// function sum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }
//
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// ======= IMPLEMENTATION #8 =======
// function double(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(2 * arr[i]);
//     }
//     return newArr;
// }
//
// console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
