'use strict';

{
  let user = {
    firstName: 'John',
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    },
  };

  setTimeout(user.sayHi.bind(user), 1000); // Hello, undefined!
}

//without .bind, it is impossible for the setTimeout run because the setTimeout function is not an object, thus the 'this' within the sayHi() function is not under an object anymore.
//to fix this use .bind

//other advantage using bind is binding with the other object, so 'this' does'nt need an object by leveraging the .bind method
{
  let user1 = {
    firstname: 'john',
  };

  function func() {
    console.log(this.firstName);
  }

  let funcUser = func.bind(user1);
  funcUser();

  //====partial function====
  //not only binding .this, but arguments also can be binded

  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 5); //null means we do not want to bind the mul into any object. the second argument (5) is passing to the parameter (a)

  console.log(double(3)); //the argument is passing to the parameter (b)
}
