'use strict';

{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still`);
    }
  }
  let animal = new Animal('My animal');

  //new class that inherit class animal, using extends
  class Rabbit extends Animal {
    //override constructor. currently class Rabbit doesnt have its own constructor --> empty constructor() is made.
    constructor(name, earlength) {
      super(name);
      this.earLength = earlength;
    }

    hide() {
      console.log(`${this.name} hides!`);
    }

    //override a method, is not reccomended to change the parents' method. therefore, we use method 'super'
    stop() {
      super.stop(); //call stop() from parent
      this.hide(); //then execute the hide method instantly
    }
  }

  let rabbit = new Rabbit('White Rabbit');

  rabbit.run(10);
  rabbit.stop();
}
