/*
Написать функцию, которая бы возвращала минимальное и максимальное значение в массиве.
*/

// !Base
function minMaxBase(arr) {
    var res = [];
    var minValue = Math.min.apply(null, arr);
    var maxValue = Math.max.apply(null, arr);
    return res.push(minValue, maxValue);
}

// !Advanced
function minMaxAdvanced(arr) {
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}

// !ES6
const minMaxEs6 = (arr) => {
    [Math.min(...arr), Math.max(...arr)];
}

// ! Option IV
function min(a, b) {
    if (a < b) return a;
    else return b;
}

//   console.log(min(0, 10)); // → 0
//   console.log(min(0, -10)); // → -10