function sumWithCallBack(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

sumWithCallBack(1, 2, (sum) => console.log(sum));
