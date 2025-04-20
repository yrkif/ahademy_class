{
    var age = 30;
    var name_1 = 'john';
    age = 20;
    var isAdmin = true;
    var address = void 0;
    address = 'Indonesia';
    console.log(name_1, age, isAdmin, address);
}
//literal types - cannot be reassigned
{
    var car = 'BMW'; //type inference, not recomended. it's not quite safe
    var wheel = 4;
    // car = 2; //error like before, but it is type inference (not explicitly assign a type, but implicity through its value-type)
    console.log(car, wheel);
    //other literal types
    var phone = 'samsung';
    // phone = 'Xiaomi'; //error, phone is literally assigned to 'samsung'
}
