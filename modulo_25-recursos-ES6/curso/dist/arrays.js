"use strict";

// ===========================================================================================================
// FOREACH method
// ===========================================================================================================

var socialsMedia = ["Facebook", "Instagram", "YouTube"];

// for (let i = 0; i < socialsMedia.length; i++) {
// 	console.log(`I have an account on ${socialsMedia[i]}!`);
// }

socialsMedia.forEach(function (social, index) {
  return console.log("#".concat(index, " I have an account on ").concat(social, "!"));
});

// ===========================================================================================================
// MAP method
// ===========================================================================================================

var students = ["Gustav", "Julia", "Paul", "Anna", "Amanda"];
var students2 = students.map(function (student) {
  student = {
    name: student,
    course: "Frontend"
  };
  return student;
});
console.log(students2);
var numbers = Array.from({
  length: 10
}, function (_, k) {
  return k + 1;
});
var double = numbers.map(function (num) {
  return num * 2;
});
console.log(double);

// ===========================================================================================================
// FIND method
// ===========================================================================================================
var _name = "Anna";
var hasAnna = students2.find(function (student) {
  return student.name === _name;
}) ? "Yes" : "No";
console.log(hasAnna);

// ===========================================================================================================
// FINDINDEX method
// ===========================================================================================================
var name2 = "Paulo";
var indexPaul = students2.findIndex(function (student) {
  return student.name === name2;
});
console.log(indexPaul);

// ===========================================================================================================
// EVERY method
// ===========================================================================================================
var isAllGreaterThan2 = double.every(function (num) {
  return num >= 2;
});
console.log(isAllGreaterThan2);

// ===========================================================================================================
// SOME method
// ===========================================================================================================
var isSomeLessThan2 = double.some(function (num) {
  return num < 2;
});
console.log(isSomeLessThan2);

// ===========================================================================================================
// REDUCE method
// ===========================================================================================================
var range = Array.from({
  length: 50
}, function (_, k) {
  return 1 + 3 * k;
});
var sum = range.reduce(function (acc, item) {
  return acc + item;
}, 0);
console.log(sum);
var sumMultipleOfFour = range.reduce(function (acc, item) {
  return item % 4 === 0 ? acc + item : acc;
}, 0);
console.log(sumMultipleOfFour);
var allStudents = "The students are: ".concat(students.reduce(function (acc, item, index) {
  if (index < students.length - 1) {
    return acc += "".concat(item, ", ");
  } else {
    return acc += "".concat(item, "!");
  }
}, ""));
console.log(allStudents);