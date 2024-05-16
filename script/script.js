//the screen display
let dataEntry = document.querySelector("[data-entry]");

//number value
let number = document.querySelector("[number]");

// operator variables
// const dataAdd = document.querySelector('[data-add]')
// const dataSubtract = document.querySelector('[data-subtract]')
// const dataMultiply = document.querySelector('[data-multiply]')
// const dataDivide = document.querySelector('[data-divide]')
// const dataModulus = document.querySelector('[data-modulus]')
const dataOp = document.querySelector("[data-op]");

let result;

let calcArray = [];

const display = (value) => {
  dataEntry.value = value;
  calcArray.push(dataEntry.value);
  console.log(calcArray);
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const modulus = (num1, num2) => {
  return num1 % num2;
};

const clearScreen = () => {
  dataEntry.value = "";
  calcArray = [];
};

const calculate = () => {
    console.log(dataOp.value)
  switch (dataOp.value) {
    case "+":
      result = add(calcArray[0], calcArray[2]);
      display(result);
      break;
    case "-":
      result = subtract(calcArray[0], calcArray[2]);
      display(result);
      break;
    case "*":
      result = multiply(calcArray[0], calcArray[2]);
      display(result);
      break;
    case "/":
      result = divide(calcArray[0], calcArray[2]);
      display(result);
      break;
    case "%":
      result = modulus(calcArray[0], calcArray[2]);
      display(result);
      break;
    default:
      break;
  }
};

//give each button a value, parse it in as an argument in the calculate function
