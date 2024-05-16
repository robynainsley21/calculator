//the screen display
let dataEntry = document.querySelector("[data-entry]");

//number value
// let number = document.querySelector("[number]");

// operator variable
const dataOp = document.querySelectorAll("[data-op]");

const dataCalc = document.querySelector('[data-calc]')
const clear = document.querySelector('[clear]')

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

const ;

const calculate = () => {
    console.log(dataOp.value)
    let num1 = parseFloat(calcArray[0])
    let num2 = parseFloat(calcArray[2])
  switch (dataOp.value) {
    case "+":
      result = add(num1, num2 );
      display(result);
      break;
    case "-":
      result = subtract(num1, num2);
      display(result);
      break;
    case "*":
      result = multiply(num1, num2);
      display(result);
      break;
    case "/":
      result = divide(num1, num2);
      display(result);
      break;
    case "%":
      result = modulus(num1, num2);
      display(result);
      break;
    default:
      display('Error')
      break;
  }
};

//because they are buttons, one needs a loop
dataOp.forEach(operator => {
  operator.addEventListener('click', () => {
    calcArray.push(dataEntry.value)
    calcArray.push(operator.value)
  })
})

dataCalc.addEventListener('click', () => {
  calcArray.push(dataEntry.value)
  calculate()
})

clear.addEventListener('click', () => {
  dataEntry.value = "";
  calcArray = [];
})