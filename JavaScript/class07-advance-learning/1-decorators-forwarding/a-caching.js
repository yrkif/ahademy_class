'use strict';

//caching

{
  function slow(x) {
    // misalnya disini task berat yang takes heavy resources
    console.log(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {
        // jika ada kunci tersebut di cache
        return cache.get(x); // baca hasilnya dari cache
      }

      let result = func(x); // jika tidak, panggil fungsi asli

      cache.set(x, result); // dan simpan hasilnya di cache
      return result;
    };
  }

  slow = cachingDecorator(slow);

  console.log(slow(1)); // slow(1) disimpan di cache dan hasilnya dikembalikan
  console.log('Again: ' + slow(1)); // slow(1) hasilnya diambil dari cache

  console.log(slow(2)); // slow(2) disimpan di cache dan hasilnya dikembalikan
  console.log('Again: ' + slow(2)); // slow(2) hasilnya diambil dari cache
}
