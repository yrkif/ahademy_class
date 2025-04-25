'use strict';

{
  let worker = {
    slow(min, max) {
      console.log(`Called with ${min},${max}`);
      return min + max;
    },
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.apply(this, arguments); // (**) .apply is the same as .call, just remove the rest parameter (...arguments)
      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    // (***)
    return [].join.call(args); // gunakan join untuk menggabungkan semua argumen
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  console.log(worker.slow(3, 5)); // bekerja
  console.log('Again ' + worker.slow(3, 5)); // sama (cached)
}

// (*) we can use JSON.stringify, and the function hash(args) (***) is not needed.
// but hash(arguments) has an advantage whereby it is lighter/faster for primitive values (simple arguments).
//if the values is object/nested data or Order-insensitive keys (complex data), we can use JSON.stringify as followed

{
  //==convert previous code using JSON.stringify==

  let worker = {
    slow(min, max) {
      console.log(`Called with ${min},${max}`);
      return min + max;
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function () {
      let key = JSON.stringify(arguments); //
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.apply(this, arguments);
      cache.set(key, result);
      return result;
    };
  }

  worker.slow = cachingDecorator(worker.slow);

  console.log(worker.slow(3, 5)); // bekerja
  console.log('Again ' + worker.slow(3, 5)); // sama (cached)
}

{
  //==using JSON.stringify for the correct condition (complex data)==

  let worker = {
    calculate(data) {
      console.log(`Called with ${JSON.stringify(data)}`);
      return data.value * 2; // Example computation
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (...args) {
      // Generate a unique key by stringifying all arguments
      let key = JSON.stringify(args); // Handles objects/arrays!

      if (cache.has(key)) {
        console.log('Returning cached result for:', key);
        return cache.get(key);
      }

      // Call the original function with all arguments
      let result = func.apply(this, args);
      cache.set(key, result);
      return result;
    };
  }

  // Apply the decorator
  worker.calculate = cachingDecorator(worker.calculate);

  // Test with complex data
  console.log(worker.calculate({ value: 3 })); // Computes (logs "Called with...")
  console.log('Again:', worker.calculate({ value: 3 })); // Cached (logs "Returning cached...")

  console.log(worker.calculate({ value: 5, items: [1, 2] })); // Computes
  console.log('Again:', worker.calculate({ value: 5, items: [1, 2] })); // Cached
}
