"use strict";

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // → Thu Nov 19 2037 15:23:00 GMT+0200 (EEST)
console.log(+future); // → 2142249780000

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1); // → 10

// If you need really precise calculation -> MomentJS library
