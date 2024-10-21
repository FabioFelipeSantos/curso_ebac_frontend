"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// -----------------------------------------------------------------------------------------------------------
// MAP
// -----------------------------------------------------------------------------------------------------------
var meuMap = new Map();
meuMap.set("nome", "fabio");
meuMap.set("stack", "html, css, js");
console.log(meuMap);
var name = meuMap.get("nome");
console.log(name);
console.log(meuMap.size);

// meuMap.clear();
console.log(meuMap.size);
for (var _i = 0, _arr = [meuMap.keys(), meuMap.values()]; _i < _arr.length; _i++) {
  var _arr$_i = _slicedToArray(_arr[_i], 2),
    chave = _arr$_i[0],
    value = _arr$_i[1];
  console.log(chave);
  console.log(value);
}
var _iterator = _createForOfIteratorHelper(meuMap.entries()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var entrada = _step.value;
    console.log(entrada);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.entries()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _step2$value = _slicedToArray(_step2.value, 2),
      key = _step2$value[0],
      _value = _step2$value[1];
    console.log("".concat(key, ": ").concat(_value));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
meuMap.delete("nome");
console.log(meuMap);

// -----------------------------------------------------------------------------------------------------------
// SET
// -----------------------------------------------------------------------------------------------------------
var cpfsSet = new Set();
cpfsSet.add("77729449005");
cpfsSet.add("88210577042");
cpfsSet.add("15566952097");
cpfsSet.add("57904147025");
console.log(cpfsSet);
console.log(cpfsSet.keys());
console.log(cpfsSet.values());
cpfsSet.forEach(function (value) {
  return console.log("O cpf \xE9 ".concat(value));
});
var array = ["Fabio Felipe", "José Paulo", "Maria Isabel", "Luana Souza", "Luana Souza", "Fabio Felipe"];
var arrayAsSet = new Set([].concat(array));
var arrayWithoutRepetition = _toConsumableArray(arrayAsSet);
console.log(array);
console.log(arrayAsSet);
console.log(arrayWithoutRepetition);