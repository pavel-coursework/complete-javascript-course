"use strict";

const flight = "LH234";
const pavel = {
  name: "Pavel Georgiev",
  passport: 412525323,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 412525323) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, pavel); // → Checked in
console.log(flight); // → LH234
console.log(pavel); // → {name: 'Mr. Pavel Georgiev', passport: 412525323}

// Is's the same as doing...
const flightNum = flight;
const passenger = pavel;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(pavel);
checkIn(flight, pavel); // → Wrong passport!
