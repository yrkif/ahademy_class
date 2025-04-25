let car: { name: string; color: string; year: number; engine?: string } = {
  // ? is optional
  name: 'BMW',
  color: 'black',
  year: 2022,
};

car.engine = 'V8';

console.log(car);
