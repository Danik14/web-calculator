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

function operator(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function clearDisplay(display) {
  display.innerHTML = "";
}

const display = document.getElementById("window");
const btnClear = document.getElementById("clear");

let display_arr = ["123"];
display.innerHTML = display_arr[0];
btnClear.addEventListener("click", () => clearDisplay(display));

console.log(operator(20, 4, "/"));
