import "mocha";
import { expect } from "chai";

import * as starter from "../../src/03.Interface/starter";

describe("Interface Starter", () => {
  const obj = {
      label: "Size 10 Object",
      size: 10,
  };

  it("starter introduce", () => {
    const v1 = starter.fn1(obj);
    expect(v1).to.be.deep.equal(obj);

    const v2 = starter.fn2(obj);
    expect(v2).to.be.deep.equal(obj);

    const v3 = starter.fn3(obj);
    expect(v3).to.be.deep.equal(obj);
  });
});
