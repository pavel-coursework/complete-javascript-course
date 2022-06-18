"use strict";

/* The setTimeout method sets a timer which executes a function
or specified piece of code once the timer expires. */
setTimeout((ing1, ing2) => {
  console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
}, 3000, "olives", "spinach");
console.log("Waiting...");
// → Waiting...
// 3s → Here is your pizza with olives and spinach 🍕

const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout((ing1, ing2) => {
  console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
}, 3000, ...ingredients);
console.log("Waiting...");
// → Waiting...
// 3s → ""

// Cancel setTimeout method
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

/* The setInterval method, repeatedly calls a function or executes
a code snippet, with a fixed time delay between each call. */
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000)
// 1s → 09:14:00 ч.
// 1s → 09:14:01 ч.
// 1s → 09:14:02 ч.
// 1s → 09:14:03 ч.
// 1s → ...

/* Using setInterval is a bad practice because at higher loads the
interval is not accurate. It is correct to use setTimeout recursively. */