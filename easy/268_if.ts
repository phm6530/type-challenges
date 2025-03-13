type If<T extends boolean, F, S> = T extends 1 ? F : S;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

export {};
