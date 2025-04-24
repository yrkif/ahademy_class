'use strict';

{
  let animal = {
    eats: true,
  };

  function Rabbit(name) {
    this.name = name;
    console.log(name);
  }

  console.log(Rabbit.prototype);
  // console.log(Rabbit.prototype.constructor === Rabbit);

  Rabbit.prototype = animal;

  let rabbit = new Rabbit('bunny');

  // console.log(rabbit.__proto__ === Rabbit.prototype);
  // console.log(rabbit.eats);
  // console.log(rabbit);
  // console.log(Rabbit.prototype);
}
