"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function toSumTwoNumbers(x, y) {
  return x + y;
}
console.log(toSumTwoNumbers(20, 46));
function toSumAllNumbers() {
  for (var _len = arguments.length, array = new Array(_len), _key = 0; _key < _len; _key++) {
    array[_key] = arguments[_key];
  }
  // Here I used a REST operator
  return array.reduce(function (sum, num) {
    return sum += num;
  }, 0);
}
var numbers = Array.from({
  length: 30
}, function (_, k) {
  return -2 + 2 * k;
});
console.log(numbers);
console.log(toSumAllNumbers.apply(void 0, numbers)); // Here I used a SPREAD operator

var arrayStrings1 = ["a", "b", "c"];
var arrayStrings2 = ["d", "e", "f", "g", "h"];
var allArrays = [].concat(arrayStrings1, arrayStrings2);
console.log(allArrays);
var worker1 = {
  function: "Engineer",
  entryDate: 2020,
  salary: 9000
};
var worker2 = _objectSpread(_objectSpread({}, worker1), {}, {
  salary: 7000
});
console.table(worker1);
console.table(worker2);

// Destructuring
var salaryWorker1 = worker1.salary;
var salaryWorker2 = worker2.salary;
console.table(salaryWorker1);
console.table(salaryWorker2);