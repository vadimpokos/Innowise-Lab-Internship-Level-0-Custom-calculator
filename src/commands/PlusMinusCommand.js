export class PlusMinus {
    constructor(calculator) {
        this.calculator = calculator
    }

    execute(value, currentValue, memoryValue) {
        const arrFromValue = this.calculator.value.split(' ')

        const currentValueIndex = this.calculator.getIndexOfCurrentValue()
        this.calculator.currentValue = value > 0 ? -value : Math.abs(value)
        this.calculator.value = [
            ...arrFromValue.slice(0, currentValueIndex),
            this.calculator.currentValue,
            ...arrFromValue.slice(currentValueIndex + 1),
        ].join(' ')
        this.calculator.pushToHistory()
    }
}
