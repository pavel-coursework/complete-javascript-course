// Every value is either object or primitive value

// Object Example:
let me = {
  name: "Jonas",
};

// Primitive Example:
let name = "Jonas";

// There are 7 primitive data type
// 1. Number → Floating point number, Used for decimals and integers
// 2. String → Sequence of characters. Used in single/double quotes
// 3. Boolean → logical data type for decision making. true or false.
// 4. Undefined → Value taken by a variable that is not yet defined ('empty value'). Example: let children;
// 5. Null → Also means 'empty value'
// 6. Symbol (ES2015) → Not useful for us. Just defines value which is unique and cannot be changed
// 7. BigInt (ES2020) → Larger integers than the Number type can hold

// JS has dynamic typing:
// We do not to define the data type of the value stored in a variable. It is determined automatically.
// Value has data type in JS and not variable.
// We can assign new value with different data type to same variable but can leads to some error.

let isCodingFun = true;
console.log(isCodingFun); // true

// typeof determines what type of data is being used
console.log(typeof true); // boolean
console.log(typeof "text"); // string
console.log(typeof 23); // number

// re-assigning new value to variable
isCodingFun = "Yes!";
console.log(isCodingFun); // Yes!

// Undefined values
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(year); // 1991

// error with typeof
console.log(typeof null); // Object
// It should not return typeof as object. Since it is legacy issue. It is still present in JS.
