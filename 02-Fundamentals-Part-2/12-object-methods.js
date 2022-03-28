"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // Any function that is attached to an object is called a method
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  calcAge2: function () {
    return 2037 - this.birthYear;
  },

  calcAge3: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge3()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge(1991)); // → 46
console.log(jonas["calcAge"](1991)); // → 46

// The method gets called multiple times (bad practice)
console.log(jonas.calcAge2()); // → 46
console.log(jonas.calcAge2()); // → 46
console.log(jonas.calcAge2()); // → 46

// The method gets called once and the value is stored as a property
console.log(jonas.calcAge3()); // → 46

console.log(jonas.age); // → 46
console.log(jonas.age); // → 46
console.log(jonas.age); // → 46

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(jonas.getSummary()); // → Jonas is a 46-year old teacher, and he has a driver's license
