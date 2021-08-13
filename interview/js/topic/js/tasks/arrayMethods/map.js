// Удвоить все элементы массива.
let nums = [2, 5, 8, 11, 14, 17, 20];

// !Option I
let resultFunction = nums.map(function (elem) {
    return elem * 2;
})
// console.log(resultFunction);

// Прибавить к каждому элементу массива единицу.
// !Option II
let resultArrowFunction = nums.map((elem) => elem + 1)
// console.log(resultArrowFunction);