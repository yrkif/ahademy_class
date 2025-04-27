// {} = any non nullish value, not an object

function printSomething(val: {}): void {
  console.log(val);
}

//non-null & undefined is able in {} type
printSomething(123);
printSomething('123');
printSomething(true);
// printSomething(null);
// printSomething(undefined);
