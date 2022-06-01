"use strict";

const bookings = [];

const createBooking = function (
  flightNum = "1",
  numPassengers = 1,
  price = 200 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123"); // → {flightNum: 'LH123', numPassengers: 1, price: 200}
createBooking("LQ712", 2, 800); // → {flightNum: 'LQ712', numPassengers: 2, price: 800}
createBooking("LB251", 5); // → {flightNum: 'LB251', numPassengers: 5, price: 1000}

// Skipping parameters
createBooking("LR715", undefined, 600); // → {flightNum: 'LR715', numPassengers: 1, price: 600}
