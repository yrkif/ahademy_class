'use strict';

//try...catch
{
  try {
    //code
  } catch (err) {
    // error handling
  }
}

{
  try {
    console.log('start execute try');
    lalala;
    console.log('end of try execution (will not be printed');
  } catch (err) {
    console.log('there is an error here');
  }
}

{
  setTimeout(function () {
    try {
      noSuchVariable;
    } catch (err) {
      console.log('error is catched here');
    }
  }, 1000);
}

{
  try {
    lalala; // error, variabel tidak terdefinisi!
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

    // Juga bisa menunjukkan error secara keseluruhan
    console.log(err); // ReferenceError: lalala is not defined
  }
}

//real implementation
{
  let json = '{bad json}';

  try {
    let user = JSON.parse(json);
    console.log(user.name);
  } catch (err) {
    console.log('sorry your data has an error, we will try to reload it again');
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  }
}

{
  let json = '{"age:30"}';

  try {
    let user = JSON.parse(json);
    if (!user.name) {
      throw new SyntaxError('incomplete data: no name');
    }
    console.log(user.name);
  } catch (err) {
    console.log('JSON error: ' + err.message);
  }
}

{
  try {
    console.log('try');
    if (confirm('Buat error?')) BAD_CODE();
  } catch (err) {
    console.log('catch');
  } finally {
    console.log('finally');
  }
  //Blok finally sering digunakan ketika kita memulai suatu proses dan ingin memastikan bahwa proses tersebut selesai, apapun hasil akhirnya.
}
