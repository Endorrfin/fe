


var products = {
    1: {
        name: 'Product 1'
    }, 
    2: {
        name: 'Product 2'
    },
    3: {
        name: 'Product 3'
    },
    4: {
        name: 'Product 4'
    },
    5: {
        name: 'Product 5'
    }
};

// JS
[1, 2, 3, 4, 5].forEach(function(item) {
    console.log(item);
})


// Lodash
_.each([1, 2, 3, 4, 5], function (item) {
    console.log(item);
})

_.each([1, 2, 3, 4, 5, 6, 7], function(item, index) {
    console.log(item, index);
})

_.each(products, function(product) {
    console.log(product);
})

_.each(products, function(product, key) {
    console.log(product, key);
})


// Push name from object Products
var result = [];
_.each(products, function(product, key) {
    result.push(product.name);
});

console.log('result', result);