//we want to limit the general type not to broad
{
  function getLength<T extends { length: number }>(item: T): number {
    return item.length;
  }

  console.log(getLength('hello'));
  console.log(getLength([1, 2, 3]));
  // console.log(getLength(123))
}

{
  interface HasName {
    name: string;
  }

  function greet<T extends HasName>(obj: T) {
    console.log(`Hellom ${obj.name}`);
  }

  greet({ name: 'budi', age: 25 });
}

{
  function double<T extends number | string>(value: T): T {
    if (typeof value === 'number') {
      return (value * 2) as T;
    } else {
      return (value + value) as T;
    }
  }

  console.log(double(10));
  console.log(double('hi'));
}

{
  //without constraints -> error
  function print<T>(value: T) {
    console.log(value.length);
  }

  function print2<T extends { length: number }>(value: T) {
    console.log(value.length);
  }
}
