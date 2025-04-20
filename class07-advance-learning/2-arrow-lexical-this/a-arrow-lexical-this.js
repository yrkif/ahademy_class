'use strict';

//arrow function doesn't have their own this, to ease the developer which facing a problem when using a normal function

{
  //===example that produce an error===
  // let group = {
  //   title: 'Our Group',
  //   students: ['John', 'Pete', 'Alice'],
  //   showList() {
  //     this.students.forEach(function (student) {
  //       // Error: Cannot read property 'title' of undefined
  //       console.log(this.title + ': ' + student); (*)
  //     });
  //   },
  // };
  // group.showList();
}

//line (*) makes the code error because "this" doesn't refer to an object, but function(student). this will result an output of undefined, and make the code error.
//to fix it, "this" should refer  to the correct object (group = {...}).
//how? change into arrow function

{
  let group = {
    title: 'Our Group',
    students: ['John', 'Pete', 'Alice'],

    showList() {
      this.students.forEach(
        (student) => console.log(this.title + ': ' + student) // arrow function will using its outer lexical environment, so the "this" is owned by showList() function, not forEach function. thus "this" will have its access to the group={...} which showList() is a method of the object.
      );
    },
  };

  group.showList();
}

//=> is similar with .bind(this), the difference is .bind(this) is exclusive to the original object.
//=> only using the outer lexical environment
