const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);

console.log(jonas.__proto__); // → Jonas.prototype
console.log(jonas.__proto__.__proto__); // → Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // → null

const arr = [7, 5, 1, 5, 7, 5]; // new Array === []
console.log(arr.__proto__); // → Array.prototype
console.log(arr.__proto__ === Array.prototype); // → true

/* All prototypes are objects that's why the array
prototype has an object prototype linked to it */
console.log(arr.__proto__.__proto__); // → Object.prototype

/* In JavaScript, arrays are objects, where the position of a value
in the array (its numerical index) is its key. They also have their
own array prototype, which has various methods and properties that
normal objects don't have, such as push and pop, length, indexOf, etc. */
console.log(arr instanceof Object); // → true

// It's not a good idea to extend the prototype of a build in object
Array.prototype.unique = function () {
  // The this keyword will point to the array that the method has been called on
  return [...new Set(this)];
}

console.log(arr.unique()); // → [5, 1, 7]
