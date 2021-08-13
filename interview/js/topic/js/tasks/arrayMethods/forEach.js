const items = ['item1', 'item2', 'item3'];
const copy = [];

// Решение циклом for
for (let i = 0; i < items.length; i++) {
    // console.log(items[i]);
    copy.push('New' + items[i])
}
// console.log(copy);


// Решение forEach
items.forEach(function (elem, index, array) {
    copy.push(index, +'New' + elem)
});

// console.log(copy);