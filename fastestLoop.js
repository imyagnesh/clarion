const arr = [...Array(10000000).keys()];

console.time("for");
for (let i = 0; i < arr.length; i++) {
  const elemet = arr[i];
}
console.timeEnd("for");

console.time("forEach");
arr.forEach((element) => {});
console.timeEnd("forEach");

console.time("forEach1");
arr.forEach((element) => {});
console.timeEnd("forEach1");

console.time("while");
let i = 0;
while (i < arr.length) {
  i++;
}
console.timeEnd("while");

console.time("dowhile");
let j = 0;
do {
  j++;
} while (j < arr.length);
console.timeEnd("dowhile");
