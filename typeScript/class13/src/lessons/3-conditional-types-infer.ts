//infer = catch = hidden type in the project

//basic syntax
// T extends SomeStructure<infer U> ? U : fallback

//example1: get element from array
{
  type GetType<T> = T extends Array<infer U> ? U : never;
  // infer = const, type data ga bisa diubah, klo ga cocok = never

  type A = GetType<string[]>;
  type B = GetType<number[]>;
  type C = GetType<boolean>; //its not an array, thus the type is never

  const itemA = 'hello';
  const itemB = 20;

  console.log('infer Array: A', itemA);
  console.log('infer Array: B', itemB);
}

//example2: get return type from function
{
  type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

  type Fn = () => number;
  type Result = GetReturnType<Fn>; // number

  const result: Result = 123;
  console.log(result);
}

//example3
{
  type GetFirstParam<T> = T extends (arg: infer P) => any ? P : never;
  type Fn = (x: string) => void;
  type Param = GetFirstParam<Fn>; // string

  const value: Param = 'example';

  console.log('firstParam', value);
}

//why using infer?
// 1. to extract types from complex structures (return type, parameter type, array, promise, etc)
// 2. to create more flexible and reusable types
// 3. to create custom utility types from 'return type', 'parameter type', 'awaited', etc
