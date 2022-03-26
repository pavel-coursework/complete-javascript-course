// • Strict mode changes previously accepted "bad syntax" into real errors
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
// → ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";
// → SyntaxError: Unexpected strict mode reserved word
const private = 534;
// → SyntaxError: Unexpected strict mode reserved word

// We wont receive these errors if we don't write 'use strict'