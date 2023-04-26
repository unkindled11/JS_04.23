let queue = [];
let input = 0;

function calculateQueue(value) {
  if (input !== 0) {
    input = parseFloat(input);

    addToQueue(input);
  }
  let answer = value[0];
  let dividedByZero = 0;
  for (let i = 2; i < value.length; i = i + 2) {
    switch (queue[i - 1]) {
      case "+":
        answer += value[i];
        break;
      case "-":
        answer -= value[i];
        break;
      case "/":
        if (value[i] === 0) dividedByZero = 1;
        else answer = answer / value[i];

        break;
      case "*":
        answer = answer * value[i];
        break;
      case "+-":
        answer = answer * 1;
        break;
    }
  }

  answer = answer.toFixed(10);
  answer = parseFloat(answer);
  if (dividedByZero === 1) {
    clearAll();
    document.querySelector(".answer").innerHTML = "ERROR";
  } else {
    document.querySelector(".answer").innerHTML = answer;
    input = answer;
    queue = [];
  }
}

function invertion() {
  number = document.querySelector(".answer").innerHTML;
  answer = number * -1;
  document.querySelector(".answer").innerHTML = answer;
  input = answer;
  if (isNaN(number)) {
    clearAll();
  }
}

function del() {
  number = document.querySelector(".answer").innerHTML;
  answer = number
    .substring(0, number.length - 1)
    .querySelector(".answer").innerHTML = answer;
  input = answer;
  if (number.length == 1) {
    clearAll();
  }
}

function addToQueue(input) {
  queue.push(input);
}
function clearAll() {
  queue = [];
  input = 0;
  document.querySelector(".answer").innerHTML = "0";
}
function numericButton(arg) {
  if (
    document.querySelector(".answer").innerHTML === "ERROR" ||
    (document.querySelector(".answer").innerHTML == "0" && arg != ".")
  ) {
    document.querySelector(".answer").innerHTML = "";
  }

  if (!(arg === ".") || !input.match(/[.]/)) {
    input += arg;
    document.querySelector(".answer").innerHTML += arg;
  }
}
function operatorButton(arg) {
  if (input !== 0 && input !== "-") {
    input = parseFloat(input);
    addToQueue(input);
    addToQueue(arg);
    document.querySelector(".answer").innerHTML += arg;
    input = 0;
  }
  if (arg == "-" && isNaN(queue[0]) && input !== "-") {
    input = "-";

    document.querySelector(".answer").innerHTML = "-";
  }
}
