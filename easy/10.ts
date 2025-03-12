const tuple = ["tesla", "model 3", "model X", "model Y", 1] as const;

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

type result = TupleToObject<typeof tuple>;

const expected: result = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
  1: 1,
};

export {};
