
// ============ FIND INTERSECTION TWO ARRAYS ============
const array1 = [1, 444, 23, 3, 4, 5, 8888, 1337, -30];
const array2 = [1337, 12, 455, 3, 8, 5, 8888, 1338, -30];

// ------- Solution 1.1 -------
const result = array1.filter((x) => array2.indexOf(x) !== -1);

// console.log('intersection result', result);