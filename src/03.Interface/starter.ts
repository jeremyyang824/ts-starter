
// 字面量类型
function fn1(obj: {label: string}) {
    return obj;
}

// type类型
// tslint:disable-next-line:interface-over-type-literal
type LabelValue = {label: string};
function fn2(obj: LabelValue) {
    return obj;
}

// 接口类型
interface ILabelValue {
    label: string;
}
function fn3(obj: ILabelValue) {
    return obj;
}

export { fn1, fn2, fn3 };
