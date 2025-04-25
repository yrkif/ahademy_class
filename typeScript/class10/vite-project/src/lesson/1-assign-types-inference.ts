{
  let age: number = 30;
  let name: string = 'john';
  age = 20;
  let isAdmin: boolean = true;
  let address: string;

  address = 'Indonesia';

  console.log(name, age, isAdmin, address);
}

//literal types - cannot be reassigned
{
  let car = 'BMW'; //type inference, not recomended. it's not quite safe
  let wheel = 4;
  // car = 2; //error like before, but it is type inference (not explicitly assign a type, but implicity through its value-type)

  console.log(car, wheel);

  //other literal types
  let phone: 'samsung' = 'samsung';
  // phone = 'Xiaomi'; //error, phone is literally assigned to 'samsung'
  // other than this, const also literal types

  console.log(phone);
}
