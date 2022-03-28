/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

"use strict";

function calcBMI() {
  this.BMI = this.weight / this.height ** 2;
  return this.BMI;
}

const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,

  calcBMI,
};

const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,

  calcBMI,
};

function printHigherBMI(firstPerson, secondPerson) {
  const firstPersonBMI = firstPerson.calcBMI().toFixed(1);
  const firstPersonFirstName = firstPerson.fullName.split(" ")[0];

  const secondPersonBMI = secondPerson.calcBMI().toFixed(1);
  const secondPersonFirstName = secondPerson.fullName.split(" ")[0];

  if (firstPersonBMI > secondPersonBMI) {
    console.log(
      `${firstPersonFirstName}'s BMI (${firstPersonBMI}) is higher than ${secondPersonFirstName}'s (${secondPersonBMI})`
    );
  } else {
    console.log(
      `${secondPersonFirstName}'s BMI (${secondPersonBMI}) is higher than ${firstPersonFirstName}'s (${firstPersonBMI})`
    );
  }
}

printHigherBMI(mark, john);
// → Mark's BMI (27.3) is higher than John's (24.2)
