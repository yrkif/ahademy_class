'use strict';

function User(name){
  this.name = name;
  this.isAdmin = false;
}

let user = new User('John');
console.log(user.name); // John
console.log(user.isAdmin); // false
