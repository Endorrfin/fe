
// ============ FILTER USING CALLBACKS ============
const stock = [
    { name: 'MacBook', quantity: 11 },
    { name: 'Ipad', quantity: 0 },
    { name: 'Imac', quantity: 4 },
    { name: 'Iphone', quantity: 6 },
    { name: 'MacMini', quantity: 0 },
    { name: 'AirPods', quantity: 28 },
    { name: 'AirPort', quantity: 0 },
];

const inStock = (item) => item.quantity > 0;
const available = stock.filter(inStock);
// console.log('available in stock', available);
// console.log('stock', stock);



// ============ FILTER ============

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
