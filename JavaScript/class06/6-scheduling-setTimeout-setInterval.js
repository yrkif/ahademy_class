'use strict';

{
  function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
  }

  let timerId = setTimeout(sayHi, 1000, 'hello', 'john'); //execute a function with a timelag

  clearTimeout(timerId); //cancel the timeout
}

//two method on running with an interval. (1) setInterval; and (2) nestedTimeout
{
  //1. setInterval
  let timerId = setInterval(() => console.log('tick'), 1000);

  //after 5 seconds, stop the tick

  // setTimeout(() => {
  //   clearInterval(timerId);
  //   console.log('stop');$
  // }, 5000);
}

{
  //2. nested setTimeout
  // the result is quite wrong, print double tick in the second call

  let timerId = setTimeout(function tick() {
    console.log('tick');
    setTimeout(tick, 2000);
  }, 1000);
}
