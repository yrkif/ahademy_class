// T union types = T extends U ? X : Y
{
  type MyType<T> = T extends string ? 'YES' : 'NO';

  type A1 = MyType<'a' | 1 | 'b'>;
  //MyType<'a'> | Mytype<1> | MyType<'b'>
  //--> 'YES' | 'NO' | 'YES'

  console.log('distribution A: ', 'YES' as Extract<A1, 'yes'>);
  console.log('distribution A: ', 'NO' as Extract<A1, 'yes'>);
}
//example2 filtering with conditional types
{
  type MyExclusion<T, U> = T extends U ? never : T;
  type Result = MyExclusion<'a' | 'b' | 'c', 'a' | 'c'>;

  console.log('exclude result: ', 'b' as Result);

  //'a' extends 'a' | 'c' -> never
  //'b' extends 'a' | 'c' -> b
  //'c' extends 'a' | 'c' -> never
}
//example3: filtering with conditional types: remove the number
{
  type RemoveNumber<T> = T extends number ? never : T;
  type T = 'a' | never | 'b';
  //same as 'a' | 'b'

  type OnlyStrings = RemoveNumber<string | number | boolean>;
  // --> string | boolean
  const val1: OnlyStrings = 'hello';
  const val2: OnlyStrings = true;

  console.log('RemoveNumber: ', val1);
  console.log('RemoveNumber: ', val2);
}
//example 4: non distributive conditional types
{
  type NonDistibutive<T> = [T] extends [string] ? 'YES' : 'NO';
  type A = NonDistibutive<'a' | 'b' | 1>; //NO

  console.log('NonDistibutive: ', 'NO' as A);
}
