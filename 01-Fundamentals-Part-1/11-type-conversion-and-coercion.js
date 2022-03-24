// Type conversion
// • When we manually convert from one type to the another

// We can convert strings to numbers by using the build-in Number() function
console.log(Number("1991") + 18); // → 2009

// We can convert numbers to strings by using the build-in String() function
console.log(String(23) + 23); // → "2323"

// There are certain types that are impossible to convert.
console.log(Number("Jonas")) // → NaN
/* • It is good to note that NaN actually means an invalid number because if you
use the typeof operator to check the data type, the result is a number. */


// Type coercion
// • When JS automatically converts the types behind the scene

// The + operator in JS triggers an coercion to strings
console.log("1991" + 18); // → "199118"

// The -, *, and / operators in JS trigger an coercion to numbers
console.log("20" - "10" - 3) // → 7
console.log("20" * "2") // → 40
console.log("20" / "2") // → 10


// Practice
const n = "1" + 1; // → "11"
console.log(n - 1); // → 10

console.log(2 + 3 + 4 + "5") // → "95"

console.log("10" - "4" - "3" - 2 + "5") // → 15
