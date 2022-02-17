"use strict";
// Basic Types
let id = 5;
let company = 'Cynthia';
let isFinished = true;
let x = 'Hello';
let ids = [1, 2, 3];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Cynthia', true]; // has to be in order
// Tuple Array
let employees;
employees = [
    [1, 'Cynthia'],
    [2, 'Cindy'],
];
// Union
let pid; // variable to hold more than 1 type
pid = 22;
pid = '22';
// Enum - allows us to define a set of named constants, numberic or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 1
console.log(Direction1.Left); // 2
console.log(Direction1.Right); // 3
// can set a value too: Up = 1, then Down will be 2 and so on
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // 'Up'
const user = {
    id: 1,
    name: 'Cynthia'
};
// Type Assertion- explicitly telling the compiler we want to treat an entity as a diff type
let cid = 1;
/* first way:
let customerId = <number>cid

second way:
let customerId = cid as number
*/
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Cynthia'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const cynthia = new Person(1, 'Cynthia');
const cindy = new Person(1, 'Cindy');
console.log(cynthia.register()); // 'Cynthia is now registered'
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // this takes the id and name from Person (superclass)
        this.position = position;
    }
}
const emp = new Employee(3, 'Amelia', 'Developer');
console.log(emp.register()); // 'Amelia is now registered'
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]); // define number type here
let strArray = getArray(['cynthia', 'cindy']); // define string type here
