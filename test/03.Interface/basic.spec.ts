import "mocha";
import { expect } from "chai";

import {createSquare, IPoint, ISquareConfig} from "../../src/03.Interface/basic";

describe("Basic Interface Features", () => {
  const obj = { color: "black" };

  it("optional properties", () => {
    const v1 = createSquare(obj);
    expect(v1).to.be.deep.equal({color: "black", area: 100});
  });

  it("readonly properties", () => {
    const readonlyObj: IPoint = { x: 10, y: 20 };
    // readonlyObj.x = 20; error!

    const readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4];
    // readonlyArray[0] = 2; error!
    // readonlyArray.push(5); error!
    // readonlyArray.length = 100; error!

    // 将只读数组转为普通数组
    // const numberArray: number[] = readonlyArray; error!
    const numberArray: number[] = readonlyArray as number[];
    expect(numberArray).to.be.deep.equal([1, 2, 3, 4]);
  });

  it("as keywords usage", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const mySquare = createSquare({width: 100, opacity: 0.5} as ISquareConfig);
    expect(mySquare).to.be.deep.equal({color: "white", area: 10000});
  });

  it("index properties", () => {
    return true;
  });
});
