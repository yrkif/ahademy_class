//as const change the type into readonly

const fruits = ['apple', 'banan'] as const;

const car = {
  company: 'Toyota',
  model: 'Camry',
  year: 2022,
  price: 1000,
  color: 'red',
} as const;

console.log(fruits);
console.log(car);
