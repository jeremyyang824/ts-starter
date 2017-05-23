
// 布尔值
const isDone: boolean = false;

// 数值
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;

// 字符串
let name: string = "bob";
name = "smith";
const sentence: string = `Hello, my name is ${name}.`;

// 数组
const list1: number[] = [1, 2, 3];
const list2: number[] = [1, 2, 3];

// 元组(Tuple)
const x: [string, number] = ["hello", 10];

// 枚举
enum Color {Red = 1, Green = 2, Blue = 4}
const colorValue: Color = Color.Green;
const colorName: string = Color[2];

// 任意值
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// 空值
function warnUser(): void {
    alert("This is my warning message");
}
const unusable: void = undefined;

// Null 和 Undefined
// 默认情况下null和undefined是所有类型的子类型
const u: undefined = undefined;
const n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
const someValue: any = "this is a string";
// tslint:disable-next-line:no-angle-bracket-type-assertion
const strLength1: number = (<string> someValue).length;
const strLength2: number = (someValue as string).length;

// 默认值
function getMessage(message?: string): string {
    return `message content: ${message}`;
}
getMessage("hello world");
getMessage();

function getAnotherMessage(message: string = "hello world"): string {
    return `message content: ${message}`;
}
getAnotherMessage();

export {};
