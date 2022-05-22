"use strict";

console.log(this); // → Window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //This is undefined
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
  // → This is pointing to Window Object because arrow functions do not get their own this keyword, they use their parent context.
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Points to Jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
// Method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // → It will call the birth year of Matilda

const f = jonas.calcAge();
f(); // → Regular function calling there is no owner and this keyword is undefined
