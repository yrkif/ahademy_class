//basic syntax = T extends U ? X : Y

// example1
type IsString<T> = T extends string ? 'YES' : 'NO';
type Test1 = IsString<string>;
type Test2 = IsString<number>;

console.log('TEST1', 'YES' as Test1);
console.log('TEST2', 'NO' as Test2);

// example2
type Result<T> = T extends boolean ? 'bool' : 'Type something else';
type A = Result<boolean>;
type B = Result<20>;

console.log('RESULT A', 'bool' as A);
console.log('RESULT B', 'Type something else' as B);

// example3: fetch API

type APIResponse<T> = T extends Error
  ? { success: false; error: T }
  : { success: true; data: T };

type Success = APIResponse<string>;
type Failure = APIResponse<Error>;

const res1: Success = { success: true, data: 'OK' };
const res2: Failure = { success: false, error: new Error('Opps fetching Error') };

console.log(res1)
console.log(res2)

//when we using it?
// 1. used in utility types
// 2. handling API
// 3. branching logic in level type not in runtime