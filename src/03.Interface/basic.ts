
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

export { createSquare, ISquareConfig, IPoint, IStringArray };
