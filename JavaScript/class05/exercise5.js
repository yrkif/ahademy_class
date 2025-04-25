'use strict';

// 1. first question
{
  let car = {
    brand: 'Toyota',
    model: 'Avanza',
    year: 2022,
  };

  let { brand, model, year } = car;

  console.log('Mobil saya adalah ' + model + ' keluaran tahun ' + year + '.');
}

//2. second question
{
  function sumAll(...args) {
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
  }

  console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
}

//3. third question
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  let merged = [...arr1, ...arr2];

  console.log(merged);
}
