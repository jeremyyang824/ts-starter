import "mocha";
import { expect } from "chai";

import * as destructuring from "../../src/02.Variables/destructuring";

describe("Destructuring", () => {
  /* 数组解构 */
  it("array destructuring", () => {
    const input = [1, 2];
    const [first, second] = input;
    expect(first).to.equal(1);
    expect(second).to.equal(2);

    const [, , third] = [1, 2, 3, 4];
    expect(third).to.equal(3);
  });

  it("swap variables", () => {
    let [first, second] = [1, 2];
    [first, second] = [second, first];
    expect(first).to.equal(2);
    expect(second).to.equal(1);
  });

  it("expand arrays", () => {
    const [first, ...rest] = [1, 2, 3, 4];
    expect(first).to.equal(1);
    expect(rest).to.deep.equals([2, 3, 4]);
  });

  it("destructure function params", () => {
    const [first, second] = destructuring.fn1([1, 2]);
    expect(first).to.equal(1);
    expect(second).to.equal(2);
  });

  /* 对象解构 */
  it("object destructuring", () => {
    const obj = {
        a: "foo",
        b: 12,
        c: "bar",
    };
    const {a, b} = obj;
    expect(a).to.equal("foo");
    expect(b).to.equal(12);
  });

  it("expand object", () => {
    const obj = {
        a: "foo",
        b: 12,
        c: "bar",
    };
    const { a, ...passthrough } = obj;
    expect(a).to.equal("foo");
    expect(passthrough).to.deep.equal({b: 12, c: "bar"});

    const first = [1, 2];
    const second = [3, 4];
    const bothPlus = [0, ...first, ...second, 5];
    expect(bothPlus).to.deep.equal([0, 1, 2, 3, 4, 5]);

    const defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    const search = { ...defaults, food: "rich" };
    expect(search).to.deep.equal({price: "$$", ambiance: "noisy", food: "rich" });
  });

  it("rename property", () => {
    const obj = {
        a: "foo",
        b: 12,
        c: "bar",
    };
    // 设定别名，指定类型
    const {a: newName1, b: newName2}: {a: string, b: number} = obj;
    expect(newName1).to.equal("foo");
    expect(newName2).to.equal(12);
  });

  it("default value", () => {
    const v2 = destructuring.fn2({a: "hello"});
    expect(v2).to.deep.equal({a: "hello", b: 1001});

    const v3 = destructuring.fn3();
    expect(v3).to.deep.equal({a: "hello", b: 1002});

    const v4 = destructuring.fn4();
    expect(v4).to.deep.equal({a: "hello", b: 1003});

    const v5 = destructuring.fn5({b: 1004});
    expect(v5).to.deep.equal({a: "hello", b: 1004});
  });
});
