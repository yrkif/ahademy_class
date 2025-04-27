{
  interface Box<T> {
    value: T;
  }

  const numberBox: Box<number> = { value: 100 };

  console.log(numberBox.value);
}

{
  type Pair<A, B> = {
    first: A;
    second: B;
  };

  const pair1: Pair<string, number> = { first: 'level', second: 100 };
  console.log(pair1);
}

{
  interface ApiResponse<T> {
    success: boolean;
    data: T;
  }

  const userResponse: ApiResponse<{ name: string }> = {
    success: true,
    data: { name: 'budi' },
  };

  console.log(userResponse.data.name);
}
