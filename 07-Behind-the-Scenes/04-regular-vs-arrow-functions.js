"use strict";

// If we use var window.firstName will print "Matilda" and this is one more reason not to use var
let firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // Regular function call this is undefined
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution, use the arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  // You should never use arrow functions as methods
  greet: () => console.log(`Hey ${this.firstName}`),
  greetDecl: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
// this.firstName will check automatically on the parent scope which is window.firstName
jonas.greet();
jonas.greetDecl();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
var addArrow = (a, b) => {
  // arguments keyword is only available in regular functions
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
