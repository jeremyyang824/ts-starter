"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var hello_1 = require("../src/hello");
describe("Hello function", function () {
    it("should return hello world", function () {
        var result = hello_1.default();
        chai_1.expect(result).to.equal("Hello World!");
    });
});
//# sourceMappingURL=hello.spec.js.map