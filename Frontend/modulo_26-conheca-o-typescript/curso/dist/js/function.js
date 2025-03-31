"use strict";
// For simple functions, we can apply a TYPE to any parameter that will be an argument to the function. We also need to apply a TYPE to the output of the function.
function calculatingArea(base, height) {
    return base * height;
}
// Arrow function follow the same TYPE's rules that the usual function.
const calculatingTriangleArea = (base, height) => (base * height) / 2;
function toSum(...numbers) {
    return numbers.reduce((acc, num) => (acc += num));
}
const arrayToSum = Array.from({ length: 15 }, (_, k) => 1 * Math.pow(1 / 3, k));
console.log(arrayToSum.map((i) => i.toExponential(5)));
console.log(toSum(...arrayToSum));
// A function don't need to return a variable with a TYPE. In this case, we can TYPE the return as VOID
function greeting(name) {
    console.log(`Hello ${name}`);
}
console.log(greeting("Fábio"));
// A function can be return several TYPEs. In this case, we must apply a TYPE to all return's possibilities.
function toShow(num) {
    if (!Number.isInteger(num)) {
        return "Your number must be an integer.";
    }
    if (num < 0) {
        return false;
    }
    else if (num < 5) {
        return `Your number is ${num}. This number must be greater or equal to five.`;
    }
    else {
        return num;
    }
}
console.log(toShow(1.56));
console.log(toShow(-5));
console.log(toShow(4));
console.log(toShow(6));
