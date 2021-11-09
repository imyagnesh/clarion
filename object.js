const firstName = "Yagnesh";

const lastName = "Modh";

const age = 30;

// New Javascript Syntax
const user = {
  firstName,
  lastName,
  age,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.fullName());

console.log(typeof user);
