import { evaluate } from '../utils/evaluate'
import { InfixToPostfix } from '../utils/parser'
import { functionHandler } from '../utils/functionHandler'
import { handleBrackets } from '../utils/bracketsHandler'

export class CalculateCommand {
    constructor(calculator) {
        this.calculator = calculator
    }

    execute(value, currentValue, memoryValue) {
        console.log(this)
        this.calculator.value = `${evaluate(
            InfixToPostfix(functionHandler(handleBrackets(value)))
        )}`
        this.calculator.app.innerText = this.calculator.value
        this.calculator.currentValue = this.calculator.getCurrentValue(
            this.calculator.value
        )
            ? this.calculator.getCurrentValue(this.calculator.value)
            : this.calculator.currentValue
        this.calculator.pushToHistory()
    }
}
