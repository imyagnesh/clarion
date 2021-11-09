// Mutable & Immutable

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// console.log(obj);

// Old Javascript Syntex
// const newObj = Object.assign({}, obj, { d: 4 });

// new javascript syntext
const newObj1 = { ...obj, a: 5 };

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

const key = "c";

console.log(obj[key]);
console.log(obj["b"]);
console.log(obj["a"]);

// const a = 5;

// const { a: aa, b, c} = obj;
// console.log(a);
// console.log(aa);
// console.log(b);
// console.log(c);

const { a, ...xyz } = obj;

console.log(xyz);

console.log(newObj1);
console.log(obj);

// Time Complexity is High
// Memory Complexity is low

// obj.d = 4

// obj.d = 4;

// Time Complexity is low
// Memory Complexity is high

// console.log(obj);
// console.log(newObj1);
// console.log(newObj);

// const arr = [1,2,3,4,5,6,7,8, 9, 10];

// const fullArr = [...Array(10000).keys()];

// console.log(fullArr.length);

// console.time('for')
// for (let i = 0; i < fullArr.length; i++) {
//     const element = fullArr[i];
// }
// console.timeEnd('for')

// // console.log(arr.length);

// // O(1)
// console.log(arr[5])

// // O(N)

// // O(logN)

// console.time("complexity")
// let result = false
// for (let i = 0; i < fullArr.length; i++) {
//     const element = fullArr[i];
//     if(element === 6) {
//         result = true;
//         break;
//     }
// }
// console.log(result);
// console.timeEnd("complexity")
