"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // → A
console.log("B737"[0]); // → B
console.log(plane.length); // → 4
console.log("B737".length); // → 4

// Get the position in which a letter is inside a string
console.log(airline.indexOf("r")); // → 6
console.log(airline.lastIndexOf("r")); // → 10
console.log(airline.lastIndexOf("Portugal")); // → 8

console.log(airline.slice(4)); // → Air Portugal
console.log(airline.slice(4, 7)); // → Air

console.log(airline.slice(0, airline.indexOf(" "))); // → TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // → PORTUGAL

console.log(airline.slice(-2)); // → al
console.log(airline.slice(1, -1)); // → AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B"); // → You got the middle seat
checkMiddleSeat("23C"); // → You got lucky
checkMiddleSeat("3E"); // → You got the middle seat

/* Wherever we call a method to a string javascript behind
the scenes convert this string to an object and when the
operation is over javascript convert back the string object to a primitive */
console.log(new String("jonas"));
console.log(typeof new String("jonas")); //object
console.log(typeof new String("jonas").slice(1)); //string