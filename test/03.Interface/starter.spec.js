"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var starter = require("../../src/03.Interface/starter");
describe("Interface Starter", function () {
    var obj = {
        label: "Size 10 Object",
        size: 10,
    };
    it("starter introduce", function () {
        var v1 = starter.fn1(obj);
        chai_1.expect(v1).to.be.deep.equal(obj);
        var v2 = starter.fn2(obj);
        chai_1.expect(v2).to.be.deep.equal(obj);
        var v3 = starter.fn3(obj);
        chai_1.expect(v3).to.be.deep.equal(obj);
    });
});
//# sourceMappingURL=starter.spec.js.map