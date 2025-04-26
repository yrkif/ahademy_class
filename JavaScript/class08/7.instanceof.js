'use strict';

//basic syntax
{
  // obj instanceof Class;

  //example
  class Rabbit {}
  let rabbit = new Rabbit();

  console.log(rabbit instanceof Rabbit);
}

//example using function constructor
{
  function Rabbit() {} //not using class

  console.log(new Rabbit() instanceof Rabbit);
}

//example using built-in class like Array
{
  let arr = [1, 2, 3];
  console.log(arr instanceof Array);
  console.log(arr instanceof Object);
}

//example instanceOf in class inheritance
{
  class Animal {}
  class Rabbit extends Animal {}

  let rabbit = new Rabbit();
  console.log(rabbit instanceof Animal);
}

//instanceOf and Prototype
//class is not checked by instanceOf, but the prototype chains and class.prototype are checked.
//this is causing unexpected result if prototype from a constructor is changed after the object is created
{
  function Rabbit() {}
  let rabbit = new Rabbit();

  //change the prototype
  console.log(Rabbit.prototype); //checking whats inside the prototype
  Rabbit.prototype = {};

  console.log(Rabbit.prototype);
  console.log(rabbit instanceof Rabbit);
}
