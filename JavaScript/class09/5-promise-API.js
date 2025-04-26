'use strict';

//PROMISE .all()
{
  const p1 = Promise.resolve('Data 1');
  const p2 = Promise.resolve('Data 2');
  const p3 = Promise.reject('Data 3');

  Promise.all([p1, p2, p3])
    .then((result) => {
      console.log('Hasil semua: ', result);
    })
    .catch((err) => {
      console.log('ada yang error: ', err);
    });
}

//PROMISE .race()
{
  const fast = new Promise((resolve) =>
    setTimeout(() => resolve('fast'), 1000)
  );
  const slow = new Promise((resolve) =>
    setTimeout(() => resolve('fast'), 1100)
  );

  Promise.race([fast, slow]).then((res) => console.log('yang tercepat', res));
}

//PROMISE .allSettled()
{
  const p6 = Promise.resolve('sukses');
  const p7 = Promise.reject('gagal');

  Promise.allSettled([p6, p7]).then((result) => {
    result.forEach((res, index) => {
      console.log(`Promise ${index + 1}`, res);
    });
  });
}

//PROMISE .any()
{
  const p8 = Promise.reject('fail 8');
  const p9 = Promise.resolve('suvvess from p9');
  const p10 = Promise.reject('fail 10');

  Promise.any([p8, p9, p10])
    .then((res) => console.log('Yang pertama berhasil', res))
    .catch((err) => console.log('yang lain gagal', err));
}
