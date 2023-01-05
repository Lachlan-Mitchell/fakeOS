let openCalculator = document.querySelector("#calculator-open");
let closeCalculator = document.querySelector("#calculator-close");
let calculatorPopup = document.querySelector("#calculator")

const handleOpenCalculator  = () => {
  calculatorPopup.classList.add("open-popup");
}
const handleCloseCaluclator  = () => {
  calculatorPopup.classList.remove("open-popup");
}

openCalculator.addEventListener("click", handleOpenCalculator);
closeCalculator.addEventListener("click", handleCloseCaluclator);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
  }

  clearAll(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  clearEntry(){
    this.currentOperand = ''
  }
  backspace(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  appendNumber(number){
    if(!this.previousOperand){
      this.previousOperand = ''
    }
    if(!this.currentOperand){
      this.currentOperand = ''
    }
    if (number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== ''){
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  specialOperation(special){
    let specialComputation
    const current = parseFloat(this.currentOperand)
    const prev = parseFloat(this.previousOperand)
    let operation = this.operation
    this.special = special
    if(isNaN(current)) return
    switch (this.special) {
      case '+/-':
        specialComputation = current * -1
        break;
      case 'sqrt':
        specialComputation = Math.sqrt(current)
        break;
      case '1/x':
        specialComputation = 1 / current
        break;
      case '%':
        if(isNaN(prev)) return
        if(operation === '+'){
          specialComputation = prev + ((current / 100) * prev)
        } else if (operation === '-'){
            specialComputation = prev - ((current / 100) * prev)
        } else if (operation === '*'){
          specialComputation = prev * ((current / 100) * prev)
        } else if (operation === '*'){
          specialComputation = prev * ((current / 100) * prev)
        } else if (operation === '/'){
          specialComputation = prev / ((current / 100) * prev)
        } else {
          return;
        }
        break;
    } 
    this.currentOperand = specialComputation
    this.operation = undefined
    this.previousOperand = ''

  }

  compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current)) return
    switch (this.operation){
      case '+':
        computation = prev + current
        break;
      case '-':
        computation = prev - current
        break;
      case '*':
        computation = prev * current
        break;
      case '/':
        computation = prev / current
        break;
        default:
          return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number){
    const stringNumber = number.toString()
    const intergerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let intergerDisplay
    if(isNaN(intergerDigits)) {
      intergerDisplay = ''
    } else {
      intergerDisplay = intergerDigits.toLocaleString('en', {
        maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${intergerDisplay}.${decimalDigits}`
    } else {
      return intergerDisplay
    }
  }

  updateDisplay(){
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
    if(this.operation) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
    
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const eqaulsButton = document.querySelector('[data-equals]');
const backspaceButton = document.querySelector('[data-backspace]');
const clearEntryButton = document.querySelector('[data-clearEntry]');
const clearAllButton = document.querySelector('[data-clearAll]');
const specialOperationButtons = document.querySelectorAll('[data-specialOperation]')
const previousOperandTextElement = document.querySelector('[data-previousOperand]');
const currentOperandTextElement = document.querySelector('[data-currentOperand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

eqaulsButton.addEventListener("click", button => {
  calculator.compute()
  calculator.updateDisplay()
})

clearAllButton.addEventListener("click", button => {
  calculator.clearAll()
  calculator.updateDisplay()
})

clearEntryButton.addEventListener("click", button => {
  calculator.clearEntry()
  calculator.updateDisplay()
})

backspaceButton.addEventListener("click", button => {
  calculator.backspace()
  calculator.updateDisplay()
})

specialOperationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.specialOperation(button.innerText)
    calculator.updateDisplay()
  })
})
