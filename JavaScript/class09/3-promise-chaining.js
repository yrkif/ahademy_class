'use strict';

function login(username) {
  return new Promise((resolve, reject) => {
    console.log('Proses login berlangsung ...');
    setTimeout(() => {
      if (username === 'admin') {
        resolve('Login berhasil');
      } else {
        reject('Username tidak dikenal');
      }
    }, 1500);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    console.log('Mengambil data user...');
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data user berhasil diambil');
      } else {
        reject('Gagal mengambil data user');
      }
    }, 1000);
  });
}

function showDashboard() {
  return new Promise((resolve)=>{
    console.log('Menampilkan dashboard user')
    setTimeout(()=>{
      resolve('Dashboard siap ditampilkan')
    },1000)
  })
}

login('admin');
  .then((res) => {
    console.log(res)
    return getUserData()
  })
  .then((res)=>{
    console.log(res)
    return showDashboard()
  })
  .catch((err)=>{
    console.log('error terjadi ditengah proses',err)
  })
