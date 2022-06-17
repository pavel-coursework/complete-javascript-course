"use strict";

// Language-sensitive date and time formatting
const now = new Date();
console.log(now); // → Fri Jun 17 2022 22:04:59 GMT+0300 (EEST)
console.log(new Intl.DateTimeFormat("en-US").format(now));
// → 6/17/2022
console.log(new Intl.DateTimeFormat("en-GB").format(now));
// → 17/06/2022
console.log(new Intl.DateTimeFormat("bg").format(now));
// → 17.06.2022 г.

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
console.log(new Intl.DateTimeFormat("en-GB", options).format(now));
// → Friday, 17 June 2022, 22:08
console.log(new Intl.DateTimeFormat("bg", options).format(now));
// → петък, 17 юни 2022 г., 22:09 ч.

// Get the preferred language of the user, usually the language of the browser UI.
const locale = navigator.language;
console.log(locale); // → "bg"

// ISO Language Code Table (en-US, en-GB, bg, ...)