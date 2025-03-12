/**
 * Promise와 같은 타입에 감싸인 타입이 있을 때,
 * 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?
 */

type MyAwaited<T> = T extends Promise<infer U> ? U : never;

type ExampleType = Promise<string>;
type Result = MyAwaited<ExampleType>; // string

export {};
