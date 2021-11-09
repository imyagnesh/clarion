// Hoist The Variable

// 2 Problems in OLD Javascript
// 1. Hoisting
// 2. Scoping

// console.log(a);
// let a = 1;

// a = 2

// const pi = 3.14;

// pi = 3.12

// console.log(a);

// {
//     var c = 1;
// }

// console.log(c);

// function add(a, b) {
//     var c = 3
//     return a + b + c;
// }

// console.log(c);

// console.log(add(1,2));

// var b;

// console.log(b);

// var a;

// a = 1;

// a = 2;

// console.log(a);

// console.log(a);

// var a = 1;

// var a = 2;

// console.log(a);

// Anonymous Function
// IIFE (Immidetly Invoke Function Expression)

// var a = 2;
// injection
// (function(data) {
//     console.log(data);
//     var b = 1;
// })(a);

// console.log(b);

// function add(a, b) {
//     return a + b;
// }

// add(1, 2)

// {
//     var a = 1;
// }

// console.log(a);

// var a = 1;

// var a = 2;

// console.log(a);

//              scoping     hoisting    reassign    redeclare
// var            NO            Yes         Yes         Yes
// const          Yes            No         No          No
// let            Yes           No          Yes         No

// Const so called exception

const user = {
  firstName: "Yagnesh",
  lastName: "Modh",
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.firstName);
console.log(user.lastName);

user.age = 33;

console.log(user);

const arr = [1, 2, 3, 4, 5];

arr.pop();

console.log(arr);
