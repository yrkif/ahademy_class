'use strict';
{
  function getFormattedDate() {
    // Tulis kode di sini

    const now = new Date();
    const monthNames = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    const date = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    return `Hari ini: ${date} ${month} ${year}, pukul ${hour}:${minute}`;
  }

  console.log(getFormattedDate());
  //the result must should show:
  //Hari ini: 10 Maret 2025, pukul 14:30
}

//2. second question
{
  // Buatlah fungsi rekursif bernama factorial(n) yang menghitung faktorial dari n.

  function factorial(n) {
    return n === 1 || n === 0 ? n : n * factorial(n - 1);
  }

  console.log(factorial(5)); // Output: 120
}
