//generic function

function echo(data: any): any {
  return data;
}

const hasil = echo('hello');
console.log(hasil.toUpperCase());

function capitalize<T>(data: T): T {
  return data;
}

const result = capitalize('halo');
console.log(result.toUpperCase());
