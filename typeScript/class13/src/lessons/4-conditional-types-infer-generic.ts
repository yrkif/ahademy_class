//conditional types + infer + generic types

//basic concept
//combine 3 powerful TypeScript features

//example1: extract return type from generic function
{
  type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

  function sayHi(): string {
    return 'Hello';
  }

  type Result = GetReturnType<typeof sayHi>; // string
  const message: Result = 'Hello, world!';
  console.log('Return type of sayHi:', message);
}
