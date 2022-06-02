"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Pavel Georgiev");
// → Pavel Georgiev booked a seat on Lufthansa flight LH

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;
// Does NOT Work
// book(23, "Sarah Williams");

book.call(eurowings, 23, "Sarah Williams");
// → Sarah Williams booked a seat on undefined flight EW

book.call(lufthansa, 230, "Mary Cooper");
// → Mary Cooper booked a seat on Lufthansa flight LH

// Apply Method (not used in modern JavaScript)
const flightData = [538, "George Cooper"];
book.apply(eurowings, flightData);
// → George Cooper booked a seat on undefined flight EW

book.call(eurowings, ...flightData);
// → George Cooper booked a seat on undefined flight EW
