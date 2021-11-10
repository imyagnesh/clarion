// Generators
function* xyz(username, password) {
  try {
    console.log(username);
    console.log(password);
    yield 1; // Login Api

    yield 2; // Logout Api
  } catch (error) {
    console.log(error);
  }
}

const gen = xyz("yagnesh.modh", "password");

gen.next();

const set = new Set([1, 2, 3, 4, 4, 5]);

const map = new Map();

map.set("yagnesh", {
  name: "Yagnesh",
  age: 30,
});

const arr = [1, 2, 3, 4, 5];

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// for (const iterator of arr) {
//     console.log(iterator);
// }

for (const iterator of set) {
  console.log(iterator);
}

for (const [key, value] of map) {
  console.log(key);
  console.log(value);
}

// for (const iterator of gen) {
//     console.log(iterator);
// }

// console.log(gen.next());

// gen.throw("something wrong")

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
