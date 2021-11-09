// OOPS

// 1. Encapsulation ->
// 2. Abstraction ->
// 3. Inheritance
// 4. Polymorphism

function add(a, b) {
  return a + b;
}

add(1, 2);

class Animal {
  hasLegs = true;
  // special method
  // call only once when create instance
  constructor(type = "Cat") {
    console.log("called cons");
    console.log(type);
    this.animalType = type;
  }

  set animalType(value) {
    console.log(value);
    this.xyz = value.toUpperCase();
  }

  get animalType() {
    return this.xyz;
  }

  makeSound() {
    console.log(this.animalType);
    console.log(this.hasLegs);
  }

  changeAnimalType(type) {
    this.animalType = type;
  }
}

class Dog extends Animal {
  constructor() {
    super("Dog");
  }

  canBite() {
    this.#changeAnimalType();
    return false;
  }

  #changeAnimalType() {
    super.changeAnimalType("Lion");
  }
}

// Instance
const dog = new Dog();

dog.canBite();

// dog.makeSound()

// dog.changeAnimalType('Cat')

// Employee

// class Employee {
//     constructor(name, empId) {
//         this.name = name;
//         this.empId = empId;
//     }

//     #getSalary() {

//     }

//     employeeDetail() {

//     }

// }

// class CEO extends Employee {

//     terminateEmployee() {

//     }

//     employeeDetail() {

//     }
// }

// class BordMembers extends Employee {

// }
