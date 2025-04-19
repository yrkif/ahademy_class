'use strict';

function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log(`Hello, ${who}`);
}

let sayHiDeffered = defer(sayHi, 2000);
sayHiDeffered('John');
