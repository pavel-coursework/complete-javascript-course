const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷") // → I like to drink wine 🍷
  : console.log("I like to drink water 💧");

// Operators always produce a value
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink); // → wine 🍷

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2); // → wine 🍷

/* We can use ternary operator in template literals, 
because all operators are expressions */
console.log(`I like to drink ${drink}`); // → wine 🍷