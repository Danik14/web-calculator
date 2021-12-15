function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      display.innerHTML = add(a, b);
      break;
    case "-":
      display.innerHTML = substract(a, b);
      break;
    case "*":
      display.innerHTML = multiply(a, b);
      break;
    case "/":
      display.innerHTML = divide(a, b);
      break;
  }
}

function clearDisplay() {
  display.innerHTML = "";
}

function appendDisplay(display, number) {
  display.innerHTML = display.innerHTML + number;
}

function appendNumber(number) {
  number = parseInt(number);
  equation.push(number);
  clearDisplay();
  console.log(equation);
}

function defineOperator(op) {
  operator = op;
  console.log(operator);
}

const display = document.getElementById("window");
const btnClear = document.getElementById("clear");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const equality = document.getElementById("equal");
let equation = [];
let operator;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    appendDisplay(display, e.target.innerHTML);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    appendNumber(display.innerHTML);
    defineOperator(e.target.innerHTML);
  });
}

equality.addEventListener("click", () => {
  operate(equation[0], parseInt(display.innerHTML), operator);
  equation.pop();
  equation.pop();
});

btnClear.addEventListener("click", () => clearDisplay());

console.log(operators);
