/**
 *
 * @param arg1 내장 제네릭 Parameters<T>를 이를 사용하지 않고 구현하세요.
 * @param arg2
 */

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T> = T extends (...arg: infer P) => void ? P : never;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
