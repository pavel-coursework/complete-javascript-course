// Class expression
const PersonE = class {};

// Class declaration
class PersonD {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonD("Jessica", 1996);
jessica.calcAge(); // → 41

console.log(jessica.__proto__ == PersonD.prototype); // → true

// What happens behind the scenes when you add a method inside the class
PersonD.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
}

jessica.greet(); // → Hey Jessica

/* Things to know about classes
1. Classes are NOT hoisted even if they are class declarations
2. Classes are first-class citizens (they are treated as variables)
3. Classes are always executed in strict mode */