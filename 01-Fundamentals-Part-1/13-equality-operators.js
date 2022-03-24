// The strict equality operator does not perform a type coercion
console.log(18 === "18"); // → false

// The loose equality operator does perform a type coercion
console.log(18 == "18"); // → true

let favorite = prompt("What's your favorite number?");
console.log(favorite); // → the number you entered
console.log(typeof favorite); // → string
favorite = Number(favorite);

if (favorite === 9) {
  console.log("Cool, 9 is my favorite number as well!");
} else if (!isNaN(favorite)) {
  console.log(`${favorite} is also a cool number :)`);
} else {
  console.log("The value you entered is not a number :(");
}

if (favorite !== 9) {
  console.log("Why not 9?");
}