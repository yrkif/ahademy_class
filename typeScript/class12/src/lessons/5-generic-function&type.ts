//contoh 1
{
  interface ApiResponse<T> {
    success: boolean;
    data: T;
  }

  function handleResponse<T>(res: ApiResponse<T>) {
    if (res.success) {
      console.log('Data', res.data);
    } else {
      console.log('Faile to fetch data');
    }
  }

  handleResponse<{ name: string }>({
    success: true,
    data: { name: 'budi' },
  });
}

//contoh 2
{
  type FormData<T> = {
    payload: T;
    timestamp: number;
  };

  function submitForm<T>(form: FormData<T>): void {
    console.log('Submitting: ', form.payload);
    console.log('at: ', form.timestamp);
  }

  submitForm<{ email: string }>({
    payload: { email: 'fikry.ma@gmail.com' },
    timestamp: Date.now(),
  });
}

//contoh 3: function + constraint + generic interface
{
  interface HasId {
    id: string;
  }

  interface DBEntity<T extends HasId> {
    data: T;
    createdAt: Date;
  }

  function saveToDB<T extends HasId>(entity: DBEntity<T>) {
    console.log(`Saving ${entity.data.id} to DB...`);
  }

  saveToDB({
    data: { id: '123', name: 'item' },
    createdAt: new Date(),
  });
}
