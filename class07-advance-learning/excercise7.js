'use strict';

//1. call()
{
  //Buat function introduce yang menggunakan call() untuk memperkenalkan diri.
}

//2. apply()
{
  //Gunakan apply() untuk mengambil nilai maksimum dari sebuah array.
}

//3. bind()
{
  // Gunakan bind() untuk membuat method sayHello yang tetap mengacu ke this tertentu.
}

//4.arrow func
{
  //Buat function biasa dan arrow function yang mengakses this, lalu bandingkan outputnya
}

//5.add method to prototype
{
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
  };

  const cat = new Animal('Cat');
  cat.speak(); // Output: Cat makes a noise.

  //Tambahkan method run() ke prototype Animal.
}

//6. prototype inheritance
{
  //Buat objek Car yang mewarisi dari Vehicle.
}

//7. inheritance using construction function
{
  // Buat Student yang mewarisi dari Person
}

//8. simple decorators
{
  // Buat decorator timeLogger yang mencatat waktu eksekusi function.
}

//9. forwarding calls with apply()
{
  //Buat decorator validateNumbers yang memastikan hanya angka yang diterima oleh function matematika
}
