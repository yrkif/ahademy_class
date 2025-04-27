'use strict';

{
  // function getData() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => resolve('getting the data is successfull'), 2000);
  //   });
  // }
  // async function retrievingData() {
  //   console.log('retrieving data ...');
  //   const data = await getData();
  //   console.log('the result: ', data);
  // }
  // retrievingData();
}

{
  // function fetchData(error = false) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (error) reject('fail to fetch the data');
  //       else resolve('fetching data is done');
  //     }, 1000);
  //   });
  // }
  // async function process() {
  //   try {
  //     const res = await fetchData();
  //     console.log('the result, ', res);
  //   } catch (error) {
  //     console.log('there is an error, ', error);
  //   } finally {
  //     console.log('process has done');
  //   }
  // }
  // process();
}

{
  function loginUser(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin') resolve('Login Berhasil');
        else reject('Username saah');
      }, 1000);
    });
  }
  function ambilDataUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('data user lengkap');
      }, 1500);
    });
  }
  async function runApp() {
    try {
      const login = await loginUser('admin');
      console.log(login);
      const data = await ambilDataUser();
      console.log(data);
    } catch (error) {
      console.log('Error, ', error);
    }
  }
  runApp();
}

{
  function getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User: Budi');
      }, 1000);
    });
  }

  function getPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Post: 5 posts ditemukan');
      }, 1200);
    });
  }

  function getComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('comments: 10 komentar ditemukan');
      }, 1500);
    });
  }

  async function loadData() {
    console.log('loading semua data');
    try {
      const [user, posts, comments] = await Promise.all([
        getUser(),
        getPosts(),
        getComments(),
      ]);
      console.log(user);
      console.log(posts);
      console.log(comments);
    } catch (error) {
      console.log('Error saat loading data', error);
    } finally {
      console.log('semua proses load data selesai');
    }
  }

  loadData();
}
