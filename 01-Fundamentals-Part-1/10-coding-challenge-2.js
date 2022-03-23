/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" */

// Test Data 1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// Test Data 2
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
  // Test 1 → Mark's BMI 27.309968138370508 is higher than John's 24.194608809993426!
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
  // Test 2 → John's BMI 27.44059917355372 is higher than Mark's 26.87867813490267!
}