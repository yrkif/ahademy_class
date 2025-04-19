'use strict';

//custom property
{
  function sayHi() {
    console.log('hello');

    sayHi.counter++;
  }

  sayHi.counter = 0;

  sayHi();
  sayHi();
  console.log(`called ${sayHi.counter} times`);
}

{
  function makeCounter() {
    function increment() {
      return increment.count++;
    }

    increment.count = 0;
    return increment;
  }

  let counter = makeCounter();
  console.log(counter());
  console.log(counter());
}
