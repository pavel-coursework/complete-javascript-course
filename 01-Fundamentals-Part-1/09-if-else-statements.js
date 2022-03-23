const age = 20;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗"); // <= Gets printed
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft}`);
}

// Conditionally assigning values
const birthYear = 1994;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`Person is born in ${century} century`);
// Output: Person is born in 20 century
