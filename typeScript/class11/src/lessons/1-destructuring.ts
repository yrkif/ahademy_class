{
  // function printNameAndAge(name= 'john', option?: { debugMode: Boolean }) {
  //   console.log(name, option);
  // }
  // printNameAndAge('budi', { debugMode: true });
}

//better way to write the type for a long syntax
{
  // type option = { debugMode?: Boolean; themeMode?: Boolean };
  // function printNameAndAge2(
  //   name:string = 'john',
  //   { debugMode, themeMode }: option = {}
  // ) {
  //   console.log(name, debugMode, themeMode);
  // }
  // printNameAndAge2('budi');
}

//most used technique
{
  type PrintNameAndAgeFunc = (
    name: string,
    options?: { debugMode?: boolean; indentLevel?: number }
  ) => void;

  const printNameAndAge8: PrintNameAndAgeFunc = function (
    name,
    { debugMode, indentLevel } = {}
  ) {
    console.log(name, debugMode, indentLevel);
  };

  printNameAndAge8;
}
