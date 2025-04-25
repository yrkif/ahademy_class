'use strict';
{
  function Rabbit() {}

  Rabbit.prototype = {
    constructor: Rabbit, // the reason about constructor is a property of a prototype
    walks: true, // if a property added, its okay as long constructor property still there.
  };
  //to add a property, just add it, dont overwrite it
  Rabbit.prototype.jumps = true;

  let rabbit = new Rabbit('white rabbit');

  console.log(rabbit.constructor === Rabbit);
}

//Object.prototype
{
  let obj = {};

  console.log(obj.__proto__ === Object.prototype);
  console.log(obj.toString === obj.__proto__.toString);
  console.log(obj.toString === Object.prototype.toString);

  console.log(Object.prototype.__proto__); //Object.prototype is the highest order
}
//other prototype
{
  let arr = [1, 2, 3]; //internally using 'new Array()'to create an array

  console.log(arr.__proto__ === Array.prototype);
  console.log(arr.__proto__.__proto__ === Object.prototype);
  console.log(arr.__proto__.__proto__.__proto__);

  console.log(arr); // -> result from Array.prototype.toString
}
//change the native prototype
{
  String.prototype.show = function () {
    console.log(this);
  };

  'boom!'.show();
}

//prototype method, object without proto --> modern method to set the prototype
{
  let animal = {
    eats: true,
  };

  // create a new object with animal as the prototype
  let rabbit = Object.create(animal); //same ase (rabbit.__proto__ = animal)

  console.log(rabbit.eats);
  console.log(Object.getPrototypeOf(rabbit) === animal);
  Object.setPrototypeOf(rabbit, {}); //change the prototype of rabbit into {}

  let rabbit2 = Object.create(animal, {
    //Object.create is stronger than serPrototypeOf since the second argument can have a property descriptor
    jumps: {
      value: true,
    },
  });
  console.log(rabbit2.jumps);
}

//object 'simple' --> quite dont understand, and no explanation from Edwin. so juts skip it
{
  let obj = {};

  let key = prompt('apa kuncinya');
  obj[key] = 'nilai tertentu';

  console.log(obj[key]); //prompt is used in html. the result is [object Object], not 'nilai tertentu' --> glitch why __proto__ is not used anymore

  //to resolve that bug, use new Map

  let obj2 = new Map();

  let key2 = prompt('apa kuncinya', '__proto__');
  Map.set(key2, 'nilai tertentu');

  console.log(obj2[key2]);
}
