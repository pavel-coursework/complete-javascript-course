"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
/* → JavaScript is the best!
     Transformed string: JAVASCRIPT is the best!
     Transformed by: upperFirstWord */

transformer("JavaScript is the best!", oneWord);
/* → JavaScript is the best!
     Transformed string: javascriptisthebest!
     Transformed by: oneWord */

// JS uses callback all the time
const high5 = function () {
  console.log("Hi 5!");
};

["Pavel", "Martha", "Adams"].forEach(high5);
/* → Hi 5!
     Hi 5!
     Hi 5! */
