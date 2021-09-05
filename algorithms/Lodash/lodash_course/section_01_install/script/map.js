// JS
var newArr = [1, 2, 3].map(function(item) {
    return item
});

console.log('newArr', newArr);



// Lodash
var newArrLodash = _.map([1, 2, 3, 4, 5], function(item) {
    return item
})

console.log('newArrLodash', newArrLodash);


var usersArr = [
    {
        id: 1,
        name: 'User 1'
    },
    {
        id: 2,
        name: 'User 2'
    },
    {
        id: 3,
        name: 'User 3'
    },
    {
        id: 4,
        name: 'User 4'
    },
    {
        id: 5,
        name: 'User 5'
    }
]

var ids = _.map(usersArr, function(item) {
    return item.id;
});

var names = _.map(usersArr, function(item) {
    return item.name;
});

console.log(ids, names);

// get the same result using short more short the way (string)
var idsStr = _.map(usersArr, 'id');
var namesStr = _.map(usersArr, 'name');

console.log(idsStr, namesStr);


// ==============================================

var usersObj = {
    1: {
        name: 'User #1'
    },
    2: {
        name: 'User #2'
    },
    3: {
        name: 'User #3'
    },
    4: {
        name: 'User #4'
    },
    5: {
        name: 'User #5'
    },
}

var idsObj = _.map(usersObj, function(user, id) {
    console.log('idsObj', user);
    return Number(id)
})

console.log(idsObj);



var namesObj = _.map(usersObj, function(user, value) {
    console.log('namesObj', user);
    return (value)
})

console.log(namesObj);



// -------- HomeWork -------

var usersData = [
    {
        id: 1,
        status: 'active',
        first_name: 'John'
    },
    {
        id: 2,
        status: 'inactive',
        first_name: 'Roy'
    },
    {
        id: 3,
        status: 'active',
        first_name: 'Silva'
    }
]

// WaytingResult

// var usersDataResult = [
//     {
//         id: 1,
//         firstName: 'John',
//         isActive: true
//     }
// ]

var normalizeUsers = function(usersData) {
    return _.map(usersData, function(user) {
        return {
            id: user.id,
            firstName: user.first_name,
            isActive: user.status === 'active' // if user.status === active, then we get true, else (if user.status !== active) we get false
        }
    })
}

var result = normalizeUsers(usersData)
console.log('result', result);



