/* Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and
convert them to camelCase.

Test data:
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅ */

"use strict";

const testData =
  "underscore_case\n" +
  " first_name\n" +
  "Some_Variable\n" +
  " calculate_AGE\n" +
  "delayed_departure";

function toCamelCase(data) {
  const wordsList = data.split("\n");
  let checkBoxes = "";

  for (const word of wordsList) {
    let [firstPart, secondPart] = word.toLowerCase().trim().split("_");
    const camelCaseWord = `${firstPart}${secondPart.replace(
      secondPart[0],
      secondPart[0].toUpperCase()
    )}`;
    checkBoxes += "✅";

    console.log(`${camelCaseWord.padEnd(20, " ")} ${checkBoxes}`);
  }
}

toCamelCase(testData);
/* → underscoreCase       ✅
     firstName            ✅✅
     someVariable         ✅✅✅
     calculateAge         ✅✅✅✅
     delayedDeparture     ✅✅✅✅✅ */
