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

acButton.addEventListener("click", () => {
  display.textContent = 0
})

sevenButton.addEventListener("click", () => {
  display.textContent = 7
})

eightButton.addEventListener("click", () => {
  display.textContent = 8
})

nineButton.addEventListener("click", () => {
  display.textContent = 7
})

fourButton.addEventListener("click", () => {
  display.textContent = 4
})

fiveButton.addEventListener("click", () => {
  display.textContent = 5
})

sixButton.addEventListener("click", () => {
  display.textContent = 6
})

oneButton.addEventListener("click", () => {
  display.textContent = 1
})

twoButton.addEventListener("click", () => {
  display.textContent = 2
})

threeButton.addEventListener("click", () => {
  display.textContent = 3
})

zeroButton.addEventListener("click", () => {
  display.textContent = 0
})

