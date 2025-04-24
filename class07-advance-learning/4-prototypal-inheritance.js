'use strict';
{
  let animal = {
    eats: true,
    walk() {
      console.log('animal walk');
    },
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  let longEar = {
    earLength: 10,
    __proto__: rabbit,
  };

  longEar.walk();
  console.log(rabbit.eats);

  rabbit.walk = function () {
    console.log('Rabbit! bounce-bounce!');
  };
  rabbit.walk();
}

{
  let animal = {
    eats: true,
  };

  let rabbit = Object.create(animal);
  console.log(rabbit.eats);
}

//this
{
  let animal = {
    walk() {
      if (!this.isSleeping) {
        console.log('I walk');
      }
    },
    sleep() {
      this.isSleeping = true; //this refer to object before the dot
    },
  };

  let rabbit = {
    name: 'White rabbit',
    __proto__: animal,
  };

  rabbit.sleep(); //'this' is owned by rabbit, not animal --> just for prototype

  console.log(rabbit.isSleeping);
  console.log(animal.isSleeping);
}

//for...in loop
{
  let animal = {
    eats: true,
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  for (let key in rabbit) {
    if (rabbit.hasOwnProperty(key)) {
      console.log(`milik sendiri: ${key}`);
    } else {
      console.log(`diwarisi: ${key}`);
    }
  }
}

{
  let hamster = {
    eat(food) {
      this.stomach.push(food);
    },
  };

  let speedy = {
    stomach: [],
    __proto__: hamster,
  };

  let lazy = {
    stomach: [],
    __proto__: hamster,
  };

  speedy.eat('apple');

  console.log('speedy.stomach>>', speedy.stomach);
  console.log('lazy.stomach>>', lazy.stomach);
}
