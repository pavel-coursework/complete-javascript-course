"use strict";

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1999);
console.log(age3); // → 23

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, "Pavel")); // → Pavel retires in 42 years
