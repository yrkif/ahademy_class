'use stict';

//1.first question
{
  let car = {
    brand: 'Toyota',
    model: 'Avanza',
    year: 2022,
  };

  console.log(car.brand); // Toyota
  console.log(car.year); // 2022

  const car2 = car;
  car2.model = 'Innova';
  console.log(car.model); // Avanza
}

//2.second question
{
  let person = {
    name: 'budi',
    introduce() {
      console.log('halo, nama saya ' + this.name);
    },
  };
  person.introduce();
}

//3.third question
{
  function User(name, address) {
    this.name = name;
    this.address = address;
  }

  let user1 = new User('Ali', { city: 'Jakarta', street: 'Jalan Merdeka' });
  let user2 = new User('Budi');

  console.log(user1.address?.city?.street); // Jakarta
  console.log(user2.address?.city); // undefined
}

//4.fourth question

{
  let message = 'javascript itu seru!';

  console.log(message.toUpperCase()); // JAVASCRIPT ITU SERU!
  console.log(message.slice(-5)); // seru!
  console.log(message.length); // 20
}
