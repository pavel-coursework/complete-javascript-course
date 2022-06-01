"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Pavel"); // → Hey Pavel
greet("Hello")("Pavel"); // → Hello Pavel

const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet2("Hello")("Pavel"); // → Hello Pavel
