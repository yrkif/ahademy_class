// Define a Operation type for arithmetic operations (addition, subtraction, multiplication, division)
type Operation = {
  add: string;
  subtract: string;
  multiply: string;
  divide: string;
};

//Create a BaseInput type for base input (here you must make operation key and value is the type of Operation )
type BaseInput = {
  operation: keyof Operation;
};

//Create a NumbersInput type for numbers input (here you must make numbers key and value is an array of numbers)
type NumbersInput = {
  numbers: number[];
};

//Create an intersection type combining BaseInput and NumbersInput
type InputType = NumbersInput & BaseInput;

//Create a calculate function to perform arithmetic operations that:
// Uses parameter destructuring
// Checks if the input is not empty
// Performs addition, subtraction, multiplication, and division operations
// Returns error message if the operation is invalid

function calculate({ operation, numbers }: InputType): number {
  if (numbers.length === 0) {
    throw Error('No numbers provided.');
  }

  switch (operation) {
    case 'add':
      return numbers.reduce((sum, n) => sum + n, 0);
    case 'subtract':
      return numbers.slice(1).reduce((dif, n) => dif - n, numbers[0]);
    case 'multiply':
      return numbers.reduce((mult, n) => mult * n, 1);
    case 'divide':
      if (numbers.slice(1).some((n) => n === 0)) {
        throw Error('Invalid operation');
      }
      return numbers.slice(1).reduce((div, n) => div / n, numbers[0]);
    default:
      throw Error('Invalid operation!');
  }
}

// Addition
const additionResult = calculate({
  operation: 'add',
  numbers: [1, 2, 3],
});
console.log(`Addition: 1 + 2 + 3 = ${additionResult}`);

// Subtraction
const subtractionResult = calculate({
  operation: 'subtract',
  numbers: [10, 2, 3],
});
console.log(`Subtraction: 10 - 2 - 3 = ${subtractionResult}`);

// Multiplication
const multiplicationResult = calculate({
  operation: 'multiply',
  numbers: [2, 3, 4],
});
console.log(`Multiplication: 2 * 3 * 4 = ${multiplicationResult}`);

// Division
const divisionResult = calculate({
  operation: 'divide',
  numbers: [20, 2, 2],
});
console.log(`Division: 20 / 2 / 2 = ${divisionResult}`);

// Don't delete code bellow and this code must be at the bottom of the file
export { calculate };
