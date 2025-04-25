'use strict';

// Constructor functions are a way to create objects in JavaScript.
// They are similar to classes, but they are not as powerful.
// Constructor functions are just regular functions that are used to create objects.
// They are called "constructor functions" because they are used to construct objects.
// Constructor functions are usually named with a capital letter to distinguish them from regular functions.
// Constructor functions are called with the `new` keyword.
// When a constructor function is called with the `new` keyword, it creates a new object and sets the `this` keyword to that object.
// The constructor function can then add properties and methods to the new object.

//1. Constructor function
{
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  let user = new User('John');
  console.log(user.name); // John
  console.log(user.isAdmin); // false
}

//2. new function(){}
// This is an anonymous function that is immediately invoked.
// It creates a new object and sets the `this` keyword to that object.
// This is a way to create an object without using a constructor function.

{
  let user = new (function () {
    this.name = 'John';
    this.isAdmin = false;
  })();
}

// this has a limitation where it cannot be used to create objects with a prototype.
// The `this` keyword is not set to the new object, so the prototype chain is not created.
// This means that the object created with this method will not have access to the methods and properties of the prototype.

//3. method in constructor function

// Constructor functions can also have methods.
// Methods are functions that are associated with an object.
// They are used to perform actions on the object or to access the object's properties.
// Methods are defined inside the constructor function and are added to the object using the `this` keyword.
{
  function User(name) {
    this.name = name;

    this.sayHi = function () {
      console.log('My name is: ' + this.name);
    };
  }

  let john = new User('John');
  john.sayHi(); // My name is: John
}
