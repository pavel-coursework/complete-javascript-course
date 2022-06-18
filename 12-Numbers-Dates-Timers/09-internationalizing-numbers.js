"use strict";

const num = 3884764.23;
console.log(`US: ${new Intl.NumberFormat("en-US").format(num)}`);
// → US: 3,884,764.23

console.log(`Germany: ${new Intl.NumberFormat("de-DE").format(num)}`);
// → Germany: 3.884.764,23

console.log(`Bulgaria: ${new Intl.NumberFormat("bg").format(num)}`);
// → Bulgaria: 3 884 764,23

const options = {
  style: "unit",
  unit: "mile-per-hour",
};
console.log(`UK: ${new Intl.NumberFormat("en-GB", options).format(num)}`);
// → UK: 3,884,764.23 mph

console.log(`Greek: ${new Intl.NumberFormat("el", options).format(num)}`);
// → Greek: 3.884.764,23 μίλια/ώρα

const options2 = {
  style: "currency",
  unit: "mile-per-hour",
  currency: "EUR",
  // useGrouping: false
};
console.log(`US: ${new Intl.NumberFormat("en-US", options2).format(num)}`);
// → US: €3,884,764.23

console.log(`Bulgaria: ${new Intl.NumberFormat("bg", options2).format(num)}`);
// → Bulgaria: 3884764,23 €