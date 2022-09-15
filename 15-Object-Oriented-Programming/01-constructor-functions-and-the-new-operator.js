/* The only difference between a regular function and a
constructor function is that we call the new operator. */

// There is a convention that constructor functions should start with a capital letter.
const Person = function (firstName, birthYear) {
  // Instance properties      
  this.firstName = firstName;
  this.birthYear = birthYear;

  /* Never create a method inside a constructor function, because a 
  new copy of the method is created on each new instance. */
  this.calcAge = function () {
    return 2037 - this.birthYear;
  }
}

const jonas = new Person("Jonas", 1991);
console.log(jonas); // → Person {firstName: 'Jonas', birthYear: 1991}

/* What happens when we call a function with the new operator.
1. A new empty object is created
2. The function is called and the this keyword is set to the newly created object
3. The new object is linked (__proto__ property) to the constructor function's prototype property
4. The function implicitly returns the object that we created */

/* The instanceof operator allows us to check whether
an object belongs to a certain constructor function. */
console.log(jonas instanceof Person); // → true

/* Function constructors are not really a feature of the JS language, they
are simply a pattern that was created by other developers. */