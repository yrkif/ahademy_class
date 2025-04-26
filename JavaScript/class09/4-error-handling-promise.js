'use strict';

// Promise.resolve('langkah awal')
//   .then((res) => {
//     console.log(res);
//     return 'langkah ke 2';
//   })
//   .then((res) => {
//     console.log(res);
//     throw new Error('gagal dilangkah ke 3');
//   })
//   .then((res) => {
//     console.log(res); //never run
//   })
//   .catch((err) => {
//     console.log('tertangkap error di chain', err.message);
//   });

//   Promise.reject('Website error')
//     .catch((err)=>{
//       console.log('Error is catched', err)
//     })
//     .finally(()=>{
//       console.log('Process has done')
//     })

function process() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject('Gagal proses login');
      } else {
        resolve('berhasil proses login');
      }
    }, 1000);
  });
}

process()
  .then((res) => {
    console.log('process berhasil', res);
  })
  .catch((err) => {
    console.log('tangkap errornya', err);
  })
  .finally(() => {
    console.log('proses selesai');
  });
