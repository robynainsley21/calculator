//the screen display
let dataEntry = document.querySelector("[data-entry]");

// operator variables
const dataOp = document.querySelectorAll("[data-op]");
const dataCalc = document.querySelector("[data-calc]");
const clear = document.querySelector("[clear]");

let result;

let calcArray = [];

const display = (value) => {
  dataEntry.value = value;
  // calcArray.push(dataEntry.value);
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
  return (num1 / num2).toFixed(2);
};

const modulus = (num1, num2) => {
  return num1 % num2;
};

const calculate = () => {
  let num1 = parseFloat(calcArray[0]);
  let num2 = parseFloat(calcArray[2]);

  //checking if length of array is 3
  if (calcArray.length !== 3) {
    display("Error: Incomplete expression");
  }

  //checks for operator existence
  switch (calcArray[1]) {
    case "+":
      result = add(num1, num2);
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
      display("Error: Invalid operation");
      break;
  }

  calcArray = []
};

//because they are buttons, one needs a loop
dataOp.forEach((operator) => {
  operator.addEventListener("click", () => {
    calcArray.push(dataEntry.value);
    calcArray.push(operator.textContent.trim());
  });
});

//equal sign function
dataCalc.addEventListener("click", () => {
  calcArray.push(dataEntry.value);
  calculate();
});

//clears array after 'del' or 'AC' button is clicked
clear.addEventListener("click", () => {
  dataEntry.value = "";
  calcArray = [];
});
