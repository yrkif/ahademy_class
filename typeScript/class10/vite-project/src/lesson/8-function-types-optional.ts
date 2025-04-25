function greet(
  name: string,
  age?: number,
  address?: { city?: string; country?: string } // optional in the object
): string {
  return `Hello, my name is ${name} and I am ${age} years old, from ${address?.city}, ${address?.country}`;
}

console.log(greet('Alice')); // Tidak ada error
console.log(greet('Alice'), 20); // Tidak ada error
console.log(greet('Alice'), 20, { city: 'Jakarta', country: 'Indonesia' }); // Tidak ada error
console.log(greet('Alice'), 20, {}); // Tidak ada Error
