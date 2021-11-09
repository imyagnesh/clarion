// hoisting will work with function as well
// function add(a, b) {
//     return a + b;
// }

// function add() {
//     return 'hacked...'
// }

// C#
// Arrow Function

// no need to return if you dont add curly bracket
const add = (a, b) => a + b;

// if only one parameter then no need to wrap parameter with bracket
const greet = (name) => `Hello, ${name}`;

// Arrow functions are light weighted(occupy less memory)

console.log(add(1, 2));

console.log(greet("Yagnesh"));
