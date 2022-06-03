"use strict";

const runOnce = function () {
  console.log("This will never run again");
};

runOnce(); // → This will never run again

//Immediately invoked function expression
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})(); // → This will never run again

console.log(isPrivate); // → ReferenceError

// Arrow function
(() => console.log("This will never run again"))(); // → This will never run again

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(isPrivate); // → ReferenceError
console.log(notPrivate); // → 46
