'use strict';

{
  class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  }

  let coffeeMachine = new CoffeeMachine();

  // Tidak bisa mengakses properti private dari luar kelas
  coffeeMachine.#fixWaterAmount(123); // Error
  coffeeMachine.#waterLimit = 1000; // Error
}
