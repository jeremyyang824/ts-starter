"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
exports.createSquare = createSquare;
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result !== -1;
};
// 共有支持两种索引签名：字符串和数字。
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
// tslint:disable-next-line:max-classes-per-file
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
// tslint:disable-next-line:max-classes-per-file
var Clock = (function () {
    function Clock(currentTime) {
        this.currentTime = currentTime;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
// tslint:disable-next-line:max-classes-per-file
var Clock2 = (function () {
    // tslint:disable-next-line:no-empty
    function Clock2(hour, minute) {
    }
    Clock2.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock2;
}());
var ClockType = Clock2;
var aClock = new ClockType(23, 45);
function getCounter() {
    // tslint:disable-next-line:only-arrow-functions
    var counter = function (start) {
        return "hello world";
    };
    counter.interval = 0;
    // tslint:disable-next-line:no-empty
    counter.reset = function () { };
    return counter;
}
exports.getCounter = getCounter;
//# sourceMappingURL=basic.js.map