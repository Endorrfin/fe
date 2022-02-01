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


// ============ 01 Объединение интервалов ============
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

// 1, 1, 2, 3, 5, 8, 13
// f(n) = f(n-1) + f(n-2)

// Option I
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }

    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}


// Option II

function iterationFibonacci(n) {
    if (n <= 0) return 0;
    if (n <= 2) return 1;

    let prev = 1;
    let result = 1;
    for (let i = 0; i < n - 2; i++); {
        let tmp = result;
        result += prev;
        prev = tmp;
    }
    return result;
}
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(20));

console.log(iterationFibonacci(5));
console.log(iterationFibonacci(7));
console.log(iterationFibonacci(10));
console.log(iterationFibonacci(20));














