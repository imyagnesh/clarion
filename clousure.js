const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => c - b;

const calc = (a, b) => {
  return (operation) => {
    return operation(a, b);
  };
};

console.log(add(1, 2));

console.log(calc(1, 2)(sub));

// const calc = (a, b, operator) => {
//     if(operator === '/') {
//         return a / b;
//     }

//     if(operator === '+') {
//         return a + b;
//     }

//     if(operator === '-') {
//         return a - b;
//     }

//     if(operator === '*') {
//         return a * b;
//     }

//     return 0;
// }

// console.log(calc(1,2, '-'));

// calc(1,2)(add)
