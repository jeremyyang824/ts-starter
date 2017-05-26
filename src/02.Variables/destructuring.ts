
function fn1([first, second]: [number, number]): number[] {
    return [first, second];
}

function fn2(wholeObject: {a: string, b?: number}): object {
    const {a, b= 1001 } = wholeObject;
    return {a, b};
}

function fn3({a, b}: {a: string, b: number} = {a: "hello", b: 1002}): object {
    return {a, b};
}

type C = {a: string, b: number};
function fn4({a, b}: C = {a: "hello", b: 1003}): object {
    return {a, b};
}

function fn5({a= "hello", b= 1005}: {a?: string, b?: number}): object {
    return {a, b};
}

export {
    fn1, fn2, fn3, fn4, fn5,
};
