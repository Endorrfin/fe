"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var user1 = {
    id: 1,
    name: 'Zak',
    isAdmin: false
};
var p1 = '1';
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Mike Jordan');
console.log(brad, mike);
console.log(brad.register());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Kir', 'Developer');
console.log(emp.name, emp.register());
