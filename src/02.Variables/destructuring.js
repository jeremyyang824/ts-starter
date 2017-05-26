"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn1(_a) {
    var first = _a[0], second = _a[1];
    return [first, second];
}
exports.fn1 = fn1;
function fn2(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    return { a: a, b: b };
}
exports.fn2 = fn2;
function fn3(_a) {
    var _b = _a === void 0 ? { a: "hello", b: 1002 } : _a, a = _b.a, b = _b.b;
    return { a: a, b: b };
}
exports.fn3 = fn3;
function fn4(_a) {
    var _b = _a === void 0 ? { a: "hello", b: 1003 } : _a, a = _b.a, b = _b.b;
    return { a: a, b: b };
}
exports.fn4 = fn4;
function fn5(_a) {
    var _b = _a.a, a = _b === void 0 ? "hello" : _b, _c = _a.b, b = _c === void 0 ? 1005 : _c;
    return { a: a, b: b };
}
exports.fn5 = fn5;
//# sourceMappingURL=destructuring.js.map