"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var destructuring = require("../../src/02.Variables/destructuring");
describe("Destructuring", function () {
    /* 数组解构 */
    it("array destructuring", function () {
        var input = [1, 2];
        var first = input[0], second = input[1];
        chai_1.expect(first).to.equal(1);
        chai_1.expect(second).to.equal(2);
        var _a = [1, 2, 3, 4], third = _a[2];
        chai_1.expect(third).to.equal(3);
    });
    it("swap variables", function () {
        var _a = [1, 2], first = _a[0], second = _a[1];
        _b = [second, first], first = _b[0], second = _b[1];
        chai_1.expect(first).to.equal(2);
        chai_1.expect(second).to.equal(1);
        var _b;
    });
    it("expand arrays", function () {
        var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
        chai_1.expect(first).to.equal(1);
        chai_1.expect(rest).to.deep.equals([2, 3, 4]);
    });
    it("destructure function params", function () {
        var _a = destructuring.fn1([1, 2]), first = _a[0], second = _a[1];
        chai_1.expect(first).to.equal(1);
        chai_1.expect(second).to.equal(2);
    });
    /* 对象解构 */
    it("object destructuring", function () {
        var obj = {
            a: "foo",
            b: 12,
            c: "bar",
        };
        var a = obj.a, b = obj.b;
        chai_1.expect(a).to.equal("foo");
        chai_1.expect(b).to.equal(12);
    });
    it("expand object", function () {
        var obj = {
            a: "foo",
            b: 12,
            c: "bar",
        };
        var a = obj.a, passthrough = __rest(obj, ["a"]);
        chai_1.expect(a).to.equal("foo");
        chai_1.expect(passthrough).to.deep.equal({ b: 12, c: "bar" });
        var first = [1, 2];
        var second = [3, 4];
        var bothPlus = [0].concat(first, second, [5]);
        chai_1.expect(bothPlus).to.deep.equal([0, 1, 2, 3, 4, 5]);
        var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
        var search = __assign({}, defaults, { food: "rich" });
        chai_1.expect(search).to.deep.equal({ price: "$$", ambiance: "noisy", food: "rich" });
    });
    it("rename property", function () {
        var obj = {
            a: "foo",
            b: 12,
            c: "bar",
        };
        // 设定别名，指定类型
        var newName1 = obj.a, newName2 = obj.b;
        chai_1.expect(newName1).to.equal("foo");
        chai_1.expect(newName2).to.equal(12);
    });
    it("default value", function () {
        var v2 = destructuring.fn2({ a: "hello" });
        chai_1.expect(v2).to.deep.equal({ a: "hello", b: 1001 });
        var v3 = destructuring.fn3();
        chai_1.expect(v3).to.deep.equal({ a: "hello", b: 1002 });
        var v4 = destructuring.fn4();
        chai_1.expect(v4).to.deep.equal({ a: "hello", b: 1003 });
        var v5 = destructuring.fn5({ b: 1004 });
        chai_1.expect(v5).to.deep.equal({ a: "hello", b: 1004 });
    });
});
//# sourceMappingURL=destructuring.spec.js.map