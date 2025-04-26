type Car = {
  company: string;
  model: string;
  year: number;
  wheel?: number;
  engine?: string;
  // [key:string]: string | number;
  [key: string]: any; //dynamics from backend data
};

type KeyOfCar = keyof Car;

function getItems(car: Car, key: KeyOfCar) {
  return car[key];
}

const car: Car = {
  company: 'Toyota',
  model: 'Camry',
  year: 2022,
  price: 1000,
  color: 'red',
};

const firstItem = getItems(car, 'company');
console.log(firstItem);
