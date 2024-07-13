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
const moduloButton = document.querySelector("#modulo-button")
const decimalButton = document.querySelector("#decimal-button")

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
    acButton.blur()
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
        display.textContent = "-" + display.textContent
        displayValue = display.textContent
        y = displayValue
      }
    }
  })

  decimalButton.addEventListener("click", () => {
    if (displayValue === "0" || startsWithOperator(display.textContent)) {
      display.textContent = "0."
      displayValue = display.textContent
      if (operatorFlag) {
        y = displayValue
      }
    } else {
      if (!display.textContent.includes(".")) {
        display.textContent += "."
        displayValue = display.textContent
        if (operatorFlag) {
          y = displayValue
        }
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

  moduloButton.addEventListener("click", () => {
    if (calculationAsFirstValue) {
      x = calculationAsFirstValue
    } else {
      x = displayValue
    }
    if (displayValue !== "0") {
      display.textContent = "%"
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
  return (+a + +b)
}

function subtract(a, b) {
  return (+a - +b)
}

function multiply(a, b) {
  return (+a * +b)
}

function divide(a, b) {
  return +a / +b
}

function modulo(a, b) {
  return +a % +b
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "/":
      if (secondNumber === "0") {
        display.textContent = "nice try :)"
        break;
      } else {
        display.textContent = divide(firstNumber, secondNumber).toString().substring(0, 9)
        calculationAsFirstValue = display.textContent
        displayValue = display.textContent
        break;
      }
    case "*":
      console.log(firstNumber, secondNumber)
      display.textContent = parseFloat(multiply(firstNumber, secondNumber).toString().substring(0, 9))
      displayValue = display.textContent
      calculationAsFirstValue = display.textContent
      console.log(display.textContent)
      break;
    case "-":
      display.textContent = parseFloat(subtract(firstNumber, secondNumber).toString().substring(0, 9))
      displayValue = display.textContent
      calculationAsFirstValue = display.textContent
      break;
    case "+":
      display.textContent = parseFloat(add(firstNumber, secondNumber).toString().substring(0, 9))
      displayValue = display.textContent
      calculationAsFirstValue = display.textContent
      break;
    case "%":
      display.textContent = parseFloat(modulo(firstNumber, secondNumber).toString().substring(0, 9))
      displayValue = display.textContent
      calculationAsFirstValue = display.textContent
      break;
    default:
      break;
  }
}

function startsWithOperator(content) {
  if (content.startsWith("/") || content.startsWith("*") || content.startsWith("-") || content.startsWith("+") || content.startsWith("%")) {
    return true
  }
}



addButtonListeners();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Backspace":
      // Do something for "down arrow" key press.
      display.textContent = display.textContent.substring(0, display.textContent.length - 1)
      if (display.textContent.length === 0) {
        display.textContent = "0"
        displayValue = "0"
      }
      break;
    case "7":
      // Do something for "down arrow" key press.
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
      break;
    case "8":
      // Do something for "up arrow" key press.
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
      break;
    case "9":
      // Do something for "left arrow" key press.
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
      break;
    case "4":
      // Do something for "right arrow" key press.
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
      break;
    case "5":
      // Do something for "enter" or "return" key press.
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
      break;
    case "6":
      // Do something for "space" key press.
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
      break;
    case "1":
      // Do something for "esc" key press.
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
      break;
    case "2":
      // Do something for "esc" key press.
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
      break;
    case "3":
      // Do something for "esc" key press.
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
      break;
    case "0":
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
      break;
    case ".":
      if (displayValue === "0" || startsWithOperator(display.textContent)) {
        display.textContent = "0."
        displayValue = display.textContent
        if (operatorFlag) {
          y = displayValue
        }
      } else {
        if (!display.textContent.includes(".")) {
          display.textContent += "."
          displayValue = display.textContent
          if (operatorFlag) {
            y = displayValue
          }
        }
      }
      break;
    case "/":
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
      break;
    case "*":

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

      console.log(x)
      console.log(y)
      break;
    case "-":
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

      break;
    case "+":
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
      break;
    case "%":
      if (calculationAsFirstValue) {
        x = calculationAsFirstValue
      } else {
        x = displayValue
      }
      if (displayValue !== "0") {
        display.textContent = "%"
        operator = display.textContent
        operatorFlag = true
      }
      break;
    case "Enter":
      operate(x, y, operator)
      console.log(x, y)
      operatorFlag = false
      break;

    default:
      return; // Quit when this doesn't handle the key event.
  }
})

