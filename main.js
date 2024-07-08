let x = ""
let y = ""
let operator = ""
let displayValue = "0"
let operatorFlag = false;


const acButton = document.querySelector("#ac-btn")
const sevenButton = document.querySelector("#seven-btn")
const eightButton = document.querySelector("#eight-btn")
const nineButton = document.querySelector("#nine-btn")
const fourButton = document.querySelector("#four-btn")
const fiveButton = document.querySelector("#five-btn")
const sixButton = document.querySelector("#six-btn")
const oneButton = document.querySelector("#one-btn")
const twoButton = document.querySelector("#two-btn")
const threeButton = document.querySelector("#three-btn")
const zeroButton = document.querySelector("#zero-btn")

const display = document.querySelector(".display")
display.textContent = displayValue;

function addButtonListeners() {
  acButton.addEventListener("click", () => {

    // no matter what just zero out the display
    display.textContent = "0"
    displayValue = display.textContent
  })

  sevenButton.addEventListener("click", () => {
    console.log(displayValue)
    console.log(display.textContent)
    if (displayValue === "0") {
      display.textContent = "7"
      displayValue = display.textContent

    } else {
      display.textContent += "7"
      displayValue = display.textContent
    }
    console.log("after")
    console.log(displayValue)
    console.log(display.textContent)

  })

  eightButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "8"
      displayValue = display.textContent
    } else {
      display.textContent += "8"
      displayValue = display.textContent
    }
  })

  nineButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "9"
      displayValue = display.textContent
    } else {
      display.textContent += "9"
      displayValue = display.textContent
    }
  })

  fourButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "4"
      displayValue = display.textContent
    } else {
      display.textContent += "4"
      displayValue = display.textContent
    }
  })

  fiveButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "5"
      displayValue = display.textContent
    } else {
      display.textContent += "5"
      displayValue = display.textContent
    }
  })

  sixButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "6"
      displayValue = display.textContent
    } else {
      display.textContent += "6"
      displayValue = display.textContent
    }
  })

  oneButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "1"
      displayValue = display.textContent
    } else {
      display.textContent += "1"
      displayValue = display.textContent
    }
  })

  twoButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "2"
      displayValue = display.textContent
    } else {
      display.textContent += "2"
      displayValue = display.textContent
    }
  })

  threeButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "3"
      displayValue = display.textContent
    } else {
      display.textContent += "3"
      displayValue = display.textContent
    }
  })

  zeroButton.addEventListener("click", () => {
    if (displayValue === "0") {
      display.textContent = "0"
      displayValue = display.textContent
    } else {
      display.textContent += "0"
      displayValue = display.textContent
    }
  })
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(firstNumber, secondNumber, operator) {
  // calls the correct function
}

addButtonListeners();


