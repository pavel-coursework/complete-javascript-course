/* Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log("hello");
};

Car.prototype.logSpeed = function () {
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.logSpeed();
};

Car.prototype.brake = function () {
  this.speed -= 5;
  this.logSpeed();
};

const car1 = new Car("BMW", 120);
car1.accelerate(); // → 'BMW' going at 130 km/h
car1.accelerate(); // → 'BMW' going at 140 km/h

const car2 = new Car("Mercedes", 95);
car2.brake(); // → 'Mercedes' going at 90 km/h
