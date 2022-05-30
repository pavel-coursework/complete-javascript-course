"use strict";

const airline = "TAP Air Portugal";
console.log(airline.toLowerCase()); // → tap air portugal
console.log(airline.toUpperCase()); // → TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // → Jonas

// Check email
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.IO \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email); // → true

// Replacing
const priceGB = "288,98£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS); // → 288.98$

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));
// → All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); // → true
console.log(plane.startsWith("Air")); // → true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
} // → Part of the NEW Airbus family

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board!");
  } else {
    console.log("Welcome abroad!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket knife");
// → You are NOT allowed on board!
checkBaggage("Socks and camera");
// → Welcome abroad!
checkBaggage("Got some snacks and a gun for protection");
// → You are NOT allowed on board!
