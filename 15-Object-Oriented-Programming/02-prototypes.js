/* Each and every function in JS automatically has a property called prototype.
Every object that is created by a certain constructor function will get access to
all the methods and properties that we define on the constructor prototype property.*/
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// With prototype only one instance of calcAge is created and shared between all instances.
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};
// .prototype is an object property

const jonas = new Person("Jonas", 1991);
console.log(jonas.calcAge()); // → 46

console.log(jonas); // → Person {firstName: 'Jonas', birthYear: 1991}
console.log(jonas.__proto__); // → {calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__.constructor); // points to the constructor function

/* Person.prototype is not the prototype of Person, it is what is going to be used as the
prototype of all the objects that are created with the Person constructor function. */
console.log(jonas.__proto__ === Person.prototype); // → true
console.log(Person.prototype.isPrototypeOf(jonas)); // → true

// .prototype should've been named .prototypeOfLinkedObjects to be more clear.

// We can also set properties to the prototype
Person.prototype.species = "Homo Sapiens";
// species property is not directly in the object, so it's not it's own property
console.log(jonas.species); // → Homo Sapiens
console.log(jonas.__proto__); // → {calcAge: ƒ, species: 'Homo Sapiens', constructor: ƒ}

console.log(jonas.hasOwnProperty("firstName")); // → true
console.log(jonas.hasOwnProperty("species")); // → false
