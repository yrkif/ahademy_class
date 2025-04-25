//void doesnt return anything => used for console.log, or return nothing

function sum(a: number, b: number): void {
  console.log(a + b);
  return;
}

sum(1, 2);
