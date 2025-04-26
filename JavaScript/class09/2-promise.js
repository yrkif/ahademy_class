'use strict';

//basic syntax
{
  let promise = new Promise(function (resolve, reject) {});
}

{
  // let promise = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve('selesai'), 1000);
  // });
}

// using then, catch, finally
{
  // promise.then(
  //   function (result) {
  //     /* handles successful result*/
  //   },
  //   function (error) {
  //     /*handles error*/
  //   }
  // );
  //example of then --> handling success function, optional for fail function
  // let promise = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve('selesai'), 1000);
  // });
  // promise.then(
  //   (result) => console.log(result),
  //   (error) => console.log(error)
  // );
}
//example catch --> only handling error.
{
  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => reject(new Error('terjadi kesalahan'), 1000));
  // });
  // promise.catch(console.log);
}

//example finally --> run code cleanup after promise completed, without considering succeess or fail.
{
  // new Promise((resolve, reject) => {
  //   setTimeout(() => resolve('selesai'), 1000);
  // })
  //   .finally(() => console.log('promise selesai'))
  //   .then((result) => console.log(result));
}

//practice asynchronus
{
  const janji = new Promise((resolve, reject) => {
    const sukses = true;

    setTimeout(() => {
      if (sukses) {
        resolve('data berhasil dimuat');
      } else {
        reject('gagal ambil data');
      }
    }, 2000);
  });

  console.log('mulai...');

  janji
    .then((hasil) => {
      console.log('berhasil ambil data', hasil);
    })
    .catch((err) => console.log('error saat ambil data:', err));

  console.log('code setelah promise dibuat');

  //case gagal

  const promiseError = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('server error: gagal ambil data');
    }, 1000);
  });

  promiseError
    .then((res) => {
      console.log('sukse ambil data', res);
    })
    .catch((err) => {
      console.log('terjadi error', err);
    });
}

//fetch API
{
  function fakeFetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 2, name: 'fikry' });
      }, 2000);
    });
  }

  console.log('mulai ambil data');
  fakeFetchData()
    .then((data) => {
      console.log('data diterima', data);
    })
    .catch((err) => {
      console.log('err.message');
    });
}
