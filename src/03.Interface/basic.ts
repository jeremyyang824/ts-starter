
// 可选属性
interface ISquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: ISquareConfig): { color: string; area: number } {
  const newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 只读属性
interface IPoint {
    readonly x: number;
    readonly y: number;
}

// 函数类型
// type ISearchFunc = (source: string, subString: string) => boolean;
interface ISearchFunc {
  // tslint:disable-next-line:callable-types
  (source: string, subString: string): boolean;
}
const mySearch: ISearchFunc = (source: string, subString: string): boolean => {
  const result = source.search(subString);
  return result !== -1;
};

// 可索引的类型
interface IStringArray {
  [index: number]: string;
}

interface IReadonlyStringArray {
    readonly [index: number]: string;
}

// 共有支持两种索引签名：字符串和数字。
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
class Animal {
    public name: string;
}
// tslint:disable-next-line:max-classes-per-file
class Dog extends Animal {
    public breed: string;
}
interface IAnimalDictionary {
  readonly [index: string]: Animal;
  jacky: Dog;
  // length: number;   // error: 属性必须是Animal或其子类
}

// 接口实现
interface IClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
// tslint:disable-next-line:max-classes-per-file
class Clock implements IClockInterface {

    constructor(public currentTime: Date) { }

    public setTime(d: Date): void {
        this.currentTime = d;
    }
}

// 构造函数接口
interface IClockConstructor {
    new (hour: number, minute: number): IClockInterface;
}
// tslint:disable-next-line:max-classes-per-file
class Clock2 implements IClockInterface {
    public currentTime: Date;
    // tslint:disable-next-line:no-empty
    constructor(hour: number, minute: number) { }

    public setTime(d: Date): void {
        this.currentTime = d;
    }
}
const ClockType: IClockConstructor = Clock2;
const aClock = new ClockType(23, 45);

// 混合类型
interface ICounter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): ICounter {
    // tslint:disable-next-line:only-arrow-functions
    const counter = function(start: number): string {
      return "hello world";
    } as ICounter;

    counter.interval = 0;
    // tslint:disable-next-line:no-empty
    counter.reset = () => { };
    return counter;
}

export { createSquare, ISquareConfig, IPoint, IStringArray, IReadonlyStringArray, getCounter };
