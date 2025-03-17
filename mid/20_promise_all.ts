/**
 *
 * PromiseAllPromiseLike 객체의 배열을 허용하는 함수를 입력하고 ,
 * 반환 값은 다음과 같아야 합니다. Promise<T>여기서 는 T해결된 결과 배열입니다.
 *
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const PromiseAll = <T extends readonly any[]>(
  vals: [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
}> => {
  return Promise.all(vals) as any;
};

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

export {};
