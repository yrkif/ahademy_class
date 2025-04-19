'use strict';

//func.call

//decorator caching is not working for object method.

{
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      console.log('Called with ' + x);
      return x * this.someMethod(); // (*)
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // (**)
      cache.set(x, result);
      return result;
    };
  }

  console.log(worker.slow(1)); // metode asli bekerja

  worker.slow = cachingDecorator(worker.slow); // sekarang buat caching

  console.log(worker.slow(2)); // Error: Cannot read property 'someMethod' of undefined
}

// line (**) is not calling worker.slow(x), but func(x). since func(x) is not an object, it will resulting undefined. to fix this, use .call(this,x) to use the original function.
