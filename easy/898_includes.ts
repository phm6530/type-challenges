/**
 *
 * JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요.
 * 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.
 *
 *
 */

type Includes<T extends any[], K> = T extends [infer F, ...infer Rest]
  ? F extends K
    ? true
    : Includes<Rest, K>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
