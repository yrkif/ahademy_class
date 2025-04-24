'use strict';

//1. first question
{
  //Buat array bernama `numbers` yang berisi angka **1 hingga 5**.
  let numbers = [1, 2, 3, 4, 5];

  // 1. Cetak elemen kedua dari array.
  console.log(numbers[1]);

  // 2. Tambahkan angka **6** ke akhir array.
  numbers.push(6);
  console.log(numbers);
  // 3. Hapus angka pertama dari array dan cetak array yang tersisa.
  numbers.shift();
  console.log(numbers);
}

//2. question
{
  let names = ['Ali', 'Budi', 'Citra', 'Dina', 'Eka'];

  //Gunakan metode array untuk:
  // 1. Membuat array baru yang hanya berisi nama yang memiliki lebih dari **4 huruf**.

  let longnames = names.filter((name) => name.length > 4);
  console.log(longnames);

  // 2. Mengubah semua nama menjadi huruf kecil.
  let lowercaseNames = names.map((name) => name.toLowerCase());
  console.log(lowercaseNames);

  // 3. Mengecek apakah ada nama `"Budi"` di dalam array.
  console.log(names.includes('Budi'));
}
