"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUsd = movements.map((mov) => mov * eurToUsd);
console.log(movementsUsd);
// → (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, ...]

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * eurToUsd);
}
console.log(movementsUsdfor);
// → (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, ...]

const movementsDesc = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
);

console.log(movementsDesc);
// → (8) ['Movement 1: You deposited 200', 'Movement 2: You deposited 450', ...]