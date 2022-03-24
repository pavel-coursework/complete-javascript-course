const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // → false
console.log(hasDriversLicense || hasGoodVision); // → true
console.log(!hasDriversLicense); // → false

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..."); // → Someone else should drive...
}
