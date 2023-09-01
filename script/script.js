const clearScreen = document.body.querySelector("#ac");
const carrot = document.body.querySelector("#carrot");
const division = document.body.querySelector("#division");
const pie = document.body.querySelector("#pie");
const minus = document.body.querySelector("#minus");
const add = document.body.querySelector("#plus");
const multiply = document.body.querySelector("#multiply");
const zero = document.body.querySelector("#zero");
const one = document.body.querySelector("#one");
const two = document.body.querySelector("#two");
const three = document.body.querySelector("#three");
const four = document.body.querySelector("#four");
const five = document.body.querySelector("#five");
const six = document.body.querySelector("#six");
const seven = document.body.querySelector("#seven");
const eight = document.body.querySelector("#eight");
const nine = document.body.querySelector("#nine");
const dot = document.body.querySelector("#dot");
const cancel = document.body.querySelector("#cancel");
const display = document.body.querySelector("#display");
const displayOutput = document.body.querySelector("#display-output");
const result = document.body.querySelector("#equals");

//storing textContents
let arr = [];

//operators

//minus
minus.addEventListener("click", function (textContent) {
  const container = display.textContent;
  if (
    container.endsWith("*") !== true &&
    container.endsWith("/") !== true &&
    container.endsWith("+") !== true &&
    container.endsWith("-") !== true &&
    container.endsWith(".") === false
  ) {
    const minus = textContent.target.innerText;
    arr.push(minus);
    displayScreen();
  }
});
//pie
pie.addEventListener("click", function (textContent) {
  const container = display.textContent;
  if (container.endsWith("3.14") !== true) {
    const pie = Math.PI.toFixed(2);
    arr.push(pie);
    displayScreen();
  }
});
//plus
add.addEventListener("click", function (textContent) {
  const container = display.textContent;
  if (
    container.endsWith("*") !== true &&
    container.endsWith("/") !== true &&
    container.endsWith("+") !== true &&
    container.endsWith("-") !== true &&
    container.endsWith(".") === false
  ) {
    const add = textContent.target.innerText;
    arr.push(add);
    displayScreen();
  }
});
//division
division.addEventListener("click", function (textContent) {
  const container = display.textContent;
  if (
    container.endsWith("*") !== true &&
    container.endsWith("/") !== true &&
    container.endsWith("+") !== true &&
    container.endsWith("-") !== true &&
    container !== "0" &&
    container.endsWith(".") === false
  ) {
    const division = "/";
    arr.push(division);
    displayScreen();
  }
});
//multiplication
multiply.addEventListener("click", function (textContent) {
  const container = display.textContent;
  if (
    container.endsWith("*") !== true &&
    container.endsWith("/") !== true &&
    container.endsWith("+") !== true &&
    container.endsWith("-") !== true &&
    container !== "0" &&
    container.endsWith(".") === false
  ) {
    const multiply = "*";
    arr.push(multiply);
    displayScreen();
  }
});

//clear screen
clearScreen.addEventListener("click", resetScreen);

//cancel last digit
cancel.addEventListener("click", function () {
  arr.pop();
  displayScreen();
});

//Displaying numbers on screen
//dot
dot.addEventListener("click", function (textContent) {
  const container = display.textContent;
  if (
    container.includes(".") === false ||
    container.endsWith("+") === true ||
    container.endsWith("-") === true ||
    container.endsWith("*") === true ||
    container.endsWith("/") === true
  ) {
    const dot = textContent.target.innerText;
    arr.push(dot);
    displayScreen();
  }
});

//carrot

carrot.addEventListener("click", function (textContent) {
  const container = display.textContent;
  if (
    container.endsWith("*") !== true &&
    container.endsWith("/") !== true &&
    container.endsWith("+") !== true &&
    container.endsWith("-") !== true &&
    container !== "0" &&
    container.endsWith(".") === false
  ) {
    arr.push("**");
    displayScreen();
  }
});

//number zero
zero.addEventListener("click", function (textContent) {
  const zero = textContent.target.innerText;
  arr.push(zero);
  displayScreen();
});
//number one
one.addEventListener("click", function (textContent) {
  const one = textContent.target.innerText;
  arr.push(one);
  displayScreen();
});

//number two
two.addEventListener("click", function (textContent) {
  const two = textContent.target.innerText;
  arr.push(two);
  displayScreen();
});
//number three
three.addEventListener("click", function (textContent) {
  const three = textContent.target.innerText;
  arr.push(three);
  displayScreen();
});
//number four
four.addEventListener("click", function (textContent) {
  const four = textContent.target.innerText;
  arr.push(four);
  displayScreen();
});
//number five
five.addEventListener("click", function (textContent) {
  const five = textContent.target.innerText;
  arr.push(five);
  displayScreen();
});
//number six
six.addEventListener("click", function (textContent) {
  const six = textContent.target.innerText;
  arr.push(six);
  displayScreen();
});
//number seven
seven.addEventListener("click", function (textContent) {
  const seven = textContent.target.innerText;
  arr.push(seven);
  displayScreen();
});
//number eight
eight.addEventListener("click", function (textContent) {
  const eight = textContent.target.innerText;
  arr.push(eight);
  displayScreen();
});
//number nine
nine.addEventListener("click", function (textContent) {
  const nine = textContent.target.innerText;
  arr.push(nine);
  displayScreen();
});

//clear screen
function resetScreen(textContent) {
  arr = [];
  display.textContent = 0;
  displayOutput.textContent = "";
}

//show screen
function displayScreen() {
  display.textContent = arr.toString().replaceAll(",", "");
}

//calculate result and display

function calcResult(e) {
  e.preventDefault();
  try {
    const answer = eval(display.textContent);
    displayOutput.textContent = answer;
  } catch (error) {
    displayOutput.textContent = `Format Error`;
  }
  // return;
}

result.addEventListener("click", calcResult);
