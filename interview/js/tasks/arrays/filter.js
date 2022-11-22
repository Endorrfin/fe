let array = [12, 15, 7, 19, 2, 9, 139];

// Вариант I
let newArray = array.filter(function (elem) {
    return elem >= 15;
})

// console.log(newArray);


// Вариант II
let isBigEnough = (elem) => elem > 8
let newSortArray = array.filter(isBigEnough)
// console.log(newSortArray);
