'use strict';

// Optional chaining is a feature in JavaScript that allows you to access properties of an object without having to check if the object is null or undefined.
// It is a way to safely access deeply nested properties without having to check each level of the object.
// Optional chaining is done using the `?.` operator.
// If the property exists, it will return the value of the property.
// If the property does not exist, it will return undefined instead of throwing an error.
// This is useful when working with objects that may not have all the properties you expect.

//1. non-existing property problem
{
  let user = {};
  // console.log(user.address.street); // error

  //this happen because the address property is not defined in the user object.
  // This will throw an error because the address property is undefined.
  // The error will be "Cannot read property 'street' of undefined".

  console.log(user?.address?.street); // undefined
  //this will not throw an error because we are using optional chaining.
  // The optional chaining operator will return undefined instead of throwing an error.
}
