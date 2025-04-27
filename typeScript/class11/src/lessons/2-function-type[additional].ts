type sumCallBack = (sum: number) => void;

function sumWithCallBack(a: number, b: number, cb: sumCallBack): void {
  cb(a + b);
}

sumWithCallBack(1, 2, (sum) => console.log(sum));

//it just the same as lesson 6-8, not important
