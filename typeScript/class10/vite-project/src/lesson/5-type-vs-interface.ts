{
  // type Car = {
  //   name: string;
  //   color: string;
  //   year: number;
  //   engine?: string;
  // };

  interface Car {
    //almost same as type
    name: string;
    color: string;
    year: number;
    engine?: string;
  }

  let car: Car = {
    // ? is optional
    name: 'BMW',
    color: 'black',
    year: 2022,
  };

  console.log(car);
}

//extend
{
  type Address = {
    street: string;
    city: string;
    country: string;
  };

  type User = {
    name: string;
    age: number;
  };

  type userWithAddress = User & Address; // for inheritance, & is replaced by 'extends'
  //interface is used for a lot of inheritance

  let user: userWithAddress = {
    name: 'John',
    age: 30,
    street: 'Jl. Raya',
    city: 'Jakarta',
    country: 'Indonesia',
  };

  console.log(user);
}
