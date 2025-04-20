{
  let fruits: string[] = ['banana', 'orange'];
  fruits.push('pinaple');
  fruits.push(true);
  fruits.push(0);

  console.log(fruits);
}

//assign type of different types in an array --> tuple
{
  let product: [string, number, boolean] = ['shoes', 100000, true];
  product.push('sock');
  console.log(product);
}

{
  //literat assigning
  const numbers: [1, 2, 3] = [1, 2, 3];
  console.log(numbers);
}
