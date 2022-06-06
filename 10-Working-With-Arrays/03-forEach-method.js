"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}
/* → Movement 1: You deposited 200
     Movement 2: You deposited 450
     Movement 3: You withdrew 400
     ... */

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
/* → Movement 1: You deposited 200
     Movement 2: You deposited 450
     Movement 3: You withdrew 400
     ... */
