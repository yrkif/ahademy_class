let name: any = 'john';

name = 30;
name = true;
name = () => {};

//it is strongly not recomended, since any type remove the type safety of typeScript
//other than that, it will confuse the auto-complete github copilot
//when any is used? --> when the data API is coming from internet, we do not know the type of data.
