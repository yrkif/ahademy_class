function sum(a: number, b: number): number /*return-type*/ {
  return a + b;
}

sum(1, 2);
// sum(1, 'john'); //should number
// sum(1, true); //should number

type sumCallBack = (sum: number) => void;

function sumWithCallBack(a: number, b: number, cb: sumCallBack): void {
  cb(a + b);
}

sumWithCallBack(1, 2, (sum) => console.log(sum));
