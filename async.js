// async programing

// Single threaded sync language

// V8 Engine of Google

// Async Programing

// 1. Callback -> After complition of event function will call that function called callback funtion
// 2. Promises
// 3. Generators

// document.addEventListener("click", () => {

// })

setTimeout(() => {
  console.log("a1");
}, 0);
console.log("s1");
setTimeout(() => {
  console.log("a2");
}, 100);
console.log("s2");
console.log("s3");
setTimeout(() => {
  console.log("a3");
}, 30);
