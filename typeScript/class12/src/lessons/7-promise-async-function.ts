//contoh 1

const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

fetchData().then((result) => {
  console.log(result);
});

async function getData() {
  const result = await fetchData();
  console.log('Async result: ', result);
}

getData();

//contoh 2: error handling, promise

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('error', err);
  });

//async-await
async function safeGetData() {
  try {
    const data = await fetchData();
    console.log('Data dari async ', data);
  } catch (error) {
    console.log('caught error, ', error);
  }
}

safeGetData();

//PROMISE + GENERIC FUNCTION

function fetchItem<T>(item: T): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(item);
    }, 1000);
  });
}

fetchItem<number>(42).then((res) => console.log('result, ', res));

//ASYNC AWAIT

async function getName(): Promise<string> {
  return 'Henry';
}

getName().then((name) => console.log('Name: ', name));

//combine with promise.all
async function fetchMultiple() {
  const [a, b] = await Promise.all([
    fetchItem<number>(1),
    fetchItem<string>('hello'),
  ]);
  console.log('Multi:', a, b);
}

fetchMultiple();
