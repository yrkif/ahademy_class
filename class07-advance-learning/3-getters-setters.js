'use strict';

//1.example one: get the data
{
  let employee = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
  };

  // Mengatur fullName akan mengubah firstName dan lastName
  employee.fullName = 'Jane Smith';

  console.log(employee.firstName); // Output: Jane
  console.log(employee.lastName); // Output: Smith
}

//2. example two: data validation
{
  let employee = {
    firstName: 'John',
    lastName: 'Doe',
    _age: 30, // Nama properti diawali dengan "_" untuk menunjukkan bahwa ini adalah properti internal

    get age() {
      return this._age;
    },

    set age(value) {
      if (value < 0) {
        console.log('Age cannot be negative!');
      } else {
        this._age = value;
      }
    },
  };

  // Coba mengatur age ke nilai negatif
  employee.age = -5; // Output: Age cannot be negative!

  // Mengatur age ke nilai yang valid
  employee.age = 35;

  console.log(employee.age); // Output: 35
}
