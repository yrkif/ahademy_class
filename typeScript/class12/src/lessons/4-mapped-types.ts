//basic syntax
/*
type NewType = {
  [key in UnionType]: ValueType
}
*/

{
  type Person = {
    name: string;
    age: number;
  };

  //mapped type
  type PersonOptional = {
    [key in keyof Person]?: Person[key];
  };

  const maybePerson: PersonOptional = {
    name: 'budi',
    // age: 22,
  };

  console.log(maybePerson);
}

{
  type ReadonlyType<T> = {
    readonly [K in keyof T]: T[K];
  };

  type User = {
    username: string;
    level: number;
  };
  type ReadonlyUser = ReadonlyType<User>;

  const admin: ReadonlyUser = {
    username: 'admin',
    level: 99,
  };

  admin.level = 100; // it's only readonly
  console.log(admin);
}
