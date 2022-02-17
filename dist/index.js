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
let employee;
employee = [
    [1, 'Cynthia'],
    [2, 'Cindy'],
];
// Union
let pid;
pid = 22;
pid = '22';
// Enum
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
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // 'Up'
