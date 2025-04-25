'use strict';

//class is syntatic sugar, but 95% current code is using class instead of constructor
{
  //basic syntax
  class MyClass {
    constructor() {}
    method1() {}
    method2() {}
    method3() {}
    //...etc
  }
}
// example 1
{
  class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      console.log(this.name);
    }
  }

  //application
  let user = new User('John');
  user.sayHi();

  console.log(typeof User);
}

//example 2: getter/setter
{
  class User {
    constructor(name) {
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        console.log('name is too short');
        return;
      }
      this._name = value;
    }
  }

  let user = new User('John');
  console.log(user.name);

  user = new User('abc');
}

//class fields --> add property to the class without constructor
{
  class User {
    name = 'john'; //can be added, but it is hardcoded. --> this can be a default value. to make it dynamic, constructor is still needed, but not empty constructor

    constructor(name) {
      if (name) this.name = name; //if a name passed, overwrite the default
    }

    sayHi() {
      console.log(`hello, ${this.name}`);
    }
  }

  new User().sayHi();
  new User('alice').sayHi();
}
