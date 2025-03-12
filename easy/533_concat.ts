/**
 * JavaScript의 Array.concat 함수를 타입 시스템에서 구현하세요.
 * 타입은 두 인수를 받고, 인수를 왼쪽부터
 * concat한 새로운 배열을 반환해야 합니다.
 *
 */

type Concat<F extends any[], S extends any[]> = [...F, ...S];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
type ToArray<T extends any[]> = T[number][];
type test = ToArray<Result>;
export {};
