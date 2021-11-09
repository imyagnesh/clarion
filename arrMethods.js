// Array Methods

// Immutable methods

const a = 1;

const b = "1";

// only check value(not check data type)
console.log(a == b);

// check value and datatype
console.log(a === b);

// const arr = [1,2,3,4,5,6,7,8];

// const index = arr.findIndex(item => item === 4)

// console.log(index);

const users = [
  {
    name: "yagnesh",
    age: 30,
    gender: "male",
  },
  {
    name: "virat",
    age: 28,
    gender: "male",
  },
  {
    name: "rohit",
    age: 32,
    gender: "male",
  },
  {
    name: "dipika",
    age: 34,
    gender: "female",
  },
  {
    name: "alia",
    age: 19,
    gender: "female",
  },
  {
    name: "rekha",
    age: 64,
    gender: "female",
  },
  {
    name: "Taimur",
    age: 8,
    gender: "male",
  },
];

// {
//     "00-09": [],
//     "10-19": [],
//     "20-29": [],
//     "30-39": [],
//     "60-69": []
// }

const obj = {};

console.log(obj["male"]);

obj["male"] = [];

console.log(obj["male"]);

const age = 22;

const ageGroup = Math.floor(age / 10);

console.log(`${ageGroup}0-${ageGroup}9`);

// "20-29"

const groupBy = users.reduce((p, c) => {
  const ageGroup = Math.floor(c.age / 10);
  const key = `${ageGroup}0-${ageGroup}9`;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupBy);

// {
//     male: [],
//     female: []
// }

// index of will work with premite types
// const arr = [1,2,3,4];
// console.log(arr.indexOf(6));

// if record exist return index
// else -1

// if data exist O(logN)
// if data not exist O(N)
const index = users.findIndex((item) => {
  console.log(item.name);
  return item.name === "rohit";
});

const reduceIndex = users.reduce((previous, current, index) => {
  console.log(previous);
  if (current.name === "rohit") {
    return index;
  }
  return previous;
}, -1);

console.log(reduceIndex);

// const updatedUsers = [...users.slice(0, index), {...users[index], age: 31}, ...users.slice(index + 1)];

// console.log(updatedUsers);

console.log(index);

console.log(users[index]);

// if record exist return data
// else undefined

// if data exist O(logN)
// if data not exist O(N)
const rohitData = users.find((item) => {
  console.log(item.name);
  return item.name === "anita";
});

console.log(rohitData);

// if record exist return all posible data
// else []

// always O(N)
const femaleUsers = users.filter((item) => {
  return item.gender === "other";
});

const maleUsers = users.reduce((p, c) => {
  console.log(p);
  if (c.gender === "male") {
    return [...p, c];
  }
  return p;
}, []);

console.log(maleUsers);

console.log(femaleUsers);

// check for anyone
const isRohitExistTeam = users.some((item) => {
  return item.name === "ami";
});

console.log(isRohitExistTeam);

// check for everyone
const isEveryoneAdult = users.every((item) => {
  return item.age > 18;
});

console.log(isEveryoneAdult);

// O(N)
const updatedUsers = users.map((item) => {
  if (item.name === "rohit") {
    return { ...item, age: 31 };
  }
  return item;
});

console.log(updatedUsers);

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }
  return item;
});

console.log(newArr);

const sum = arr.reduce((p, c) => p + c, 0);

console.log(sum);

// let result  = 0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result = result + element;
// }
// console.log(result);

// you can achive anything using reduce
