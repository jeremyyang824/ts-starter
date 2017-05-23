"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 布尔值
var isDone = false;
// 数值
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var name = "bob";
name = "smith";
var sentence = "Hello, my name is " + name + ".";
// 数组
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 元组(Tuple)
var x = ["hello", 10];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var colorValue = Color.Green;
var colorName = Color[2];
// 任意值
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// 空值
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
// Null 和 Undefined
// 默认情况下null和undefined是所有类型的子类型
var u = undefined;
var n = null;
// Never
function error(message) {
    throw new Error(message);
}
// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
var someValue = "this is a string";
// tslint:disable-next-line:no-angle-bracket-type-assertion
var strLength1 = someValue.length;
var strLength2 = someValue.length;
// 默认值
function getMessage(message) {
    return "message content: " + message;
}
getMessage("hello world");
getMessage();
function getAnotherMessage(message) {
    if (message === void 0) { message = "hello world"; }
    return "message content: " + message;
}
getAnotherMessage();
//# sourceMappingURL=basicType.js.map