// set and map

// O(1)

// O(LogN)
const arr = [1,2,3,4,5,6,7,8];


// Premive Type data
const set = new Set(arr);

set.

// O(1)
console.log(set.has(9)); 

console.log(set.size);

set.add(1);

console.log(set.size);

set.delete(5)

console.log(set.size);


const rohit =  {
    name: 'rohit',
    age: 34,
    gender: 'male'
}

const weakSet = new WeakSet();

weakSet.add(rohit)

console.log(weakSet.has(rohit));

console.log(weakSet.delete(rohit)); 

console.log(weakSet.has(rohit));


const map = new Map();

map.set("rohit", rohit)

console.log(map.has("rohit"));

const weakMap = new WeakMap();

weakMap.set(rohit, "xyz")

weakMap.














