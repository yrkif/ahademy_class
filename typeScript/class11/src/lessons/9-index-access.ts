type Car = {
  company: string;
  model: string;
  year: number;
};

type CarCompany = Car['company']; //string
type CarModel = Car['model']; //string
type CarYear = Car['year']; //number

type KeyOfCar = keyof Car; //company | model | year

type CarProperty = Car[KeyOfCar];
