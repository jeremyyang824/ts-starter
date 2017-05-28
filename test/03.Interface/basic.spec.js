"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var basic_1 = require("../../src/03.Interface/basic");
describe("Basic Interface Features", function () {
    var obj = { color: "black" };
    it("optional properties", function () {
        var v1 = basic_1.createSquare(obj);
        chai_1.expect(v1).to.be.deep.equal({ color: "black", area: 100 });
    });
    it("readonly properties", function () {
        var readonlyObj = { x: 10, y: 20 };
        // readonlyObj.x = 20; error!
        var readonlyArray = [1, 2, 3, 4];
        // readonlyArray[0] = 2; error!
        // readonlyArray.push(5); error!
        // readonlyArray.length = 100; error!
        // 将只读数组转为普通数组
        // const numberArray: number[] = readonlyArray; error!
        var numberArray = readonlyArray;
        chai_1.expect(numberArray).to.be.deep.equal([1, 2, 3, 4]);
    });
    it("as keywords usage", function () {
        // tslint:disable-next-line:no-object-literal-type-assertion
        var mySquare = basic_1.createSquare({ width: 100, opacity: 0.5 });
        chai_1.expect(mySquare).to.be.deep.equal({ color: "white", area: 10000 });
    });
    it("index properties", function () {
        var myArray = ["Bob", "Fred"];
        myArray[1] = "Jacky";
        chai_1.expect(myArray[0]).to.be.equal("Bob");
        chai_1.expect(myArray[1]).to.be.equal("Jacky");
        var myReadonlyArray = ["Bob", "Fred"];
        // myReadonlyArray[1] = "Jacky"; error!
        chai_1.expect(myReadonlyArray[1]).to.be.equal("Fred");
    });
    it("mixin types", function () {
        var counter = basic_1.getCounter();
        var start = counter(10);
        chai_1.expect(start).to.be.equal("hello world");
    });
});
//# sourceMappingURL=basic.spec.js.map