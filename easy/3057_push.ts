/**
 * Array.push의 제네릭 버전을 구현하세요
 *
 */

type Push<T extends any[], U> = [...T, U];

type Result = Push<[1, 2], "3">; // [1, 2, '3']

export {};
