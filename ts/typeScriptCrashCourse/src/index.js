"use strict";
// Basic Types
var id = 5;
console.log('ID: ', id);
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
// ids.push('Hello');
var arr = [1, true, 'Hello'];
// Tuple
var person = [1, 'Brad', true];
//Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
var pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('Enum Direction1', Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log('Enum Direction2', Direction2.Left);
var user = {
    id: 1,
    name: 'John',
};
// Type Assertion
var cid = 1;
// let customerId: <number>cid;
var customerId = cid;
// Functions
function addNum(x, y) {
    return x * y;
}
console.log('addNum', addNum(3, 4));
// Void
function log(message) {
    console.log(message);
}
// console.log(log(true));
console.log(log("Hello 2021 year"));
