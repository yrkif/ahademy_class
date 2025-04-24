//first question
{
  let names = ['Alice', 'Bob', 'Charlie'];

  //   1. Tipe data apa yang secara otomatis (inference) diberikan oleh TypeScript pada variabel `names`?
  // --> string

  // 2. Ubah deklarasi `names` menjadi eksplisit menggunakan tipe array string.
  // let names: string[] = ['Alice', 'Bob', 'Charlie'];
}

//second question
{
  //1. Apa kelebihan dan kekurangan dari penggunaan tipe any?
  // --> advantage: flexible, can be used for any types.
  // --> disadvantage: less safe, more difficult to understand, prone to runtime error

  //2. Ubah tipe data menjadi tipe objek yang memiliki properti name bertipe string dan age bertipe number.

  type dataType = number | string | { name?: string; age?: number };

  let data: dataType;

  data = 5;
  data = 'hello';
  data = { name: 'John', age: 30 };
}

//third question
{
  //1. Apa perbedaan utama antara type dan interface?
  //--> type use '=' in the syntax. interface doesn't use '='
  //--> for inheritance-type, type using '&', interface using 'extends'
  //--> type support union (|), interface doesn't support it.
  //2. Dari dua definisi di atas, apakah keduanya bisa digunakan untuk mendeklarasikan parameter fungsi seperti di bawah ini? Jelaskan.
  //--> both of them can be used to declare the 'user' type
  //--> but, type used in the greetUser parameter is 'UserType', therefore the interface 'UserInterface' doesn't match with the parameter and not able to be used. 'UserInterface' can be used if the parameter is changed into 'UserInterface'
}

//fourth question
{
  // 1. Apa arti tanda `?` pada parameter `author`?
  //-->optional,  means the function 'printMessage()' can run without any input in 'author' variable
  // 2. Apa arti dari tipe `void` pada fungsi ini?
  //--> 'void' means return nothing in a function. Commonly used for 'console.log' or 'return' nothing.
  // 3. Apa yang akan terjadi jika fungsi dipanggil seperti ini: `printMessage("Welcome!")`?
  //--> only message that shown in the output. author will shown 'undefined'
  //--> Welcome! - undefined
}
