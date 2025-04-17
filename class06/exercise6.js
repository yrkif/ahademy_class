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

//3. third question
{
  function outer() {
    let message = 'Hello';

    function inner() {
      console.log(message);
    }

    return inner;
  }

  let sayHello = outer();
  sayHello();

  // Jelaskan mengapa fungsi `inner()` tetap bisa mengakses variabel `message`, meskipun `outer()` sudah selesai dieksekusi.
  //because inner() is a closure, it retain the access to the lexical environment (where the message variable exist) even after the outer() has executed. when sayHello() is called, the javascript look up the message through the scope of chain to find the variable stored in the chain.
}
