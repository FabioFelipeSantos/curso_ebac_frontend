"use strict";

var myFunction = function myFunction() {
  return console.log("Hy");
};
myFunction();
var car = function car() {
  return {
    model: "Ranger",
    branch: "Ford",
    year: 2024,
    velocity: 40,
    speedUp: function speedUp() {
      this.velocity += 10;
    },
    slowDown: function slowDown() {
      this.velocity -= 10;
    } // slowDown: () => {
    // 	this.velocity -= 10;
    // },
  };
};
var myCar = car();
console.table(myCar);
myCar.speedUp();
myCar.speedUp();
myCar.speedUp();
console.table(myCar);
myCar.slowDown();
myCar.slowDown();
console.table(myCar);