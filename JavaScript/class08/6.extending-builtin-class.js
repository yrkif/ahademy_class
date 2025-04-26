'use stricti';
{
  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }

  let arr = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr.isEmpty());

  let filteredArr = arr.filter((item) => item >= 10);
  console.log(filteredArr);
  console.log(filteredArr.isEmpty());
  console.log(arr.constructor === PowerArray);
}

{
  class PowerArray extends Array {
    double() {
      return this.map((item) => item * 2);
    }
  }

  const arr = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr.double());
}

//extends Array using custom object
{
  class ArrayCustomObjects extends Array {
    selectById(id) {
      return this.find((item) => item.id === id);
    }
  }

  const arrCustomObjects = new ArrayCustomObjects(
    { id: 1, name: 'john' },
    { id: 2, name: 'james' },
    { id: 3, name: 'robert' }
  );

  const selectedObject = arrCustomObjects.selectById(3);
  console.log(selectedObject);
}
