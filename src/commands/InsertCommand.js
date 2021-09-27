export class Insert {
    constructor(calculator) {
        this.calculator = calculator
    }

    execute(value, currentValue, memoryValue) {
        this.calculator.value = value
        this.calculator.app.innerText = this.calculator.value
        this.calculator.currentValue = this.calculator.getCurrentValue(
            this.calculator.value
        )
            ? this.calculator.getCurrentValue(this.calculator.value)
            : this.calculator.currentValue
        this.calculator.pushToHistory()
    }
}
