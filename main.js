let x = ""
let y = ""
let operator = ""
let displayValue = "0"
let operatorFlag = false;
let calculationAsFirstValue = "";
let minusToggle = ""


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

const divideButton = document.querySelector("#divide-button")
const multiplyButton = document.querySelector("#multiply-button")
const subtractButton = document.querySelector("#subtract-button")
const addButton = document.querySelector("#add-button")
const equalsButton = document.querySelector("#equals-button")
const minusButton = document.querySelector("#minus-button")

const display = document.querySelector(".display")
display.textContent = displayValue;

function addButtonListeners() {
  acButton.addEventListener("click", () => {

    // no matter what just zero out the display to start
    display.textContent = "0"
    displayValue = display.textContent
    x = ""
    y = ""
    operator = ""
    calculationAsFirstValue = ""
  })

  sevenButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "7"
      displayValue = display.textContent

      if (operatorFlag) {
        y = displayValue
      }

    } else {
      display.textContent += "7"
      displayValue = display.textContent

      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  eightButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "8"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "8"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  nineButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "9"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "9"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  fourButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "4"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "4"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  fiveButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "5"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "5"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  sixButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "6"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "6"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  oneButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "1"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "1"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  twoButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "2"
      displayValue = display.textContent

      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "2"
      displayValue = display.textContent

      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  threeButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "3"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "3"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  zeroButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "0"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      display.textContent += "0"
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    }
  })

  minusButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      // do nothing
    } else {
      if (!minusToggle) {
        console.log('hi')
        display.textContent = "-" + display.textContent
        displayValue = display.textContent
      }
    }
  })

  divideButton.addEventListener("click", () => {
    if (calculationAsFirstValue) {
      x = calculationAsFirstValue
    } else {
      x = displayValue
    }
    if (displayValue !== "0") {
      display.textContent = "/"
      operator = display.textContent
      operatorFlag = true
    }
  })

  multiplyButton.addEventListener("click", () => {
    if (calculationAsFirstValue) {
      x = calculationAsFirstValue
    } else {
      x = displayValue
    }
    if (displayValue !== "0") {
      display.textContent = "*"
      operator = display.textContent
      operatorFlag = true
    }
  })

  subtractButton.addEventListener("click", () => {
    if (calculationAsFirstValue) {
      x = calculationAsFirstValue
    } else {
      x = displayValue
    }
    if (displayValue !== "0") {
      display.textContent = "-"
      operator = display.textContent
      operatorFlag = true
    }
  })

  addButton.addEventListener("click", () => {
    if (calculationAsFirstValue) {
      x = calculationAsFirstValue
    } else {
      x = displayValue
    }
    if (displayValue !== "0") {
      display.textContent = "+"
      operator = display.textContent
      operatorFlag = true
    }
  })

  equalsButton.addEventListener("click", () => {
    // call operation
    operate(x, y, operator)
    operatorFlag = false
  })


}

function add(a, b) {
  return +a + +b
}

function subtract(a, b) {
  return +a - +b
}

function multiply(a, b) {
  return +a * +b
}

function divide(a, b) {
  return +a / +b
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "/":
      console.log(firstNumber, secondNumber, operator)
      console.log(typeof secondNumber)
      if (secondNumber === "0") {
        console.log('hi')
        display.textContent = "nice try :)"
        break;
      } else {
        display.textContent = divide(firstNumber, secondNumber).toString().substring(0, 9)
        calculationAsFirstValue = display.textContent
        break;
      }

    case "*":
      display.textContent = multiply(firstNumber, secondNumber).toString().substring(0, 9)
      calculationAsFirstValue = display.textContent
      break;
    case "-":
      display.textContent = subtract(firstNumber, secondNumber).toString().substring(0, 9)
      calculationAsFirstValue = display.textContent
      break;
    case "+":
      display.textContent = add(firstNumber, secondNumber).toString().substring(0, 9)
      calculationAsFirstValue = display.textContent
      break;

    default:
      break;
  }
}

function startsWithOperator(content) {
  if (content.startsWith("/") || content.startsWith("*") || content.startsWith("-") || content.startsWith("+")) {
    return true
  }
}

addButtonListeners();


