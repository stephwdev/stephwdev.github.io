const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const screen = document.getElementById("result");
const clearBtn = document.getElementById("btn-clear");
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

screen.textContent = currentResult;

function clear() {
  currentResult = defaultResult;
}

clearBtn.addEventListener("click", clear);
