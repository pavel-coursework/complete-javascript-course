"use strict";

// Closure is not a feature that we explicitly use, we don't create closures manually.
// Closures happen implicitly in certain situations.
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); // → 1 passengers
booker(); // → 2 passengers
booker(); // → 3 passengers

/* • A closure makes a function remember all the variables that existed at the function's birth place by the time it was created.

• A function has access to the variable environment of the execution context in which it was created even after that execution context is gone.

• Closure: variable environment attached to the function, exactly as it was at the time and place the function was created.

• The closure has priority over the scope chain.

• console.dir() - allows us to look at the closure of a function  */