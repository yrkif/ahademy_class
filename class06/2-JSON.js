'use strict';

//1.JSON.stringify
{
  let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null,
  };

  let json = JSON.stringify(student);

  console.log(typeof json); // string
  console.log(json);
}

//property ignorance in JSON.stringify
{
  let user = {
    sayHi() {
      // function/method diabaikan
      console.log('Hello');
    },
    [Symbol('id')]: 123, // key & value in symbolic diabaikan
    something: undefined, // an undifined value of a property diabaikan
  };

  console.log(JSON.stringify(user)); // {}
}
ß;

//2.JSON Parse - convert back string JSON to object
{
  let json =
    '{"name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';

  let user = JSON.parse(json);

  console.log(user.friends[1]); // 1
}
