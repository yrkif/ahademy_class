'use strict';

{
  class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
      return value;
    }

    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  }

  let coffeeMachine = new CoffeeMachine();

  // Tidak bisa mengakses properti private dari luar kelas
  // coffeeMachine.#fixWaterAmount(123); // Error
  // coffeeMachine.#waterLimit = 1000; // Error

  coffeeMachine.setWaterAmount(150);
}

//we can use getter setter to access private fields more elegantly
{
  class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
      return value;
    }

    get waterLimit() {
      return this.#waterLimit;
    }

    set waterLimit(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  }

  let coffeeMachine = new CoffeeMachine();

  coffeeMachine.waterLimit = 180;
  console.log(coffeeMachine.waterLimit);
}
