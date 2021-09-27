export class AllClear {
    constructor(calculator) {
        this.calculator = calculator
    }

    execute(value, currentValue, memoryValue) {
        this.calculator.value = '0'
        this.calculator.currentValue = '0'
        this.calculator.history = []
        this.calculator.memoryValue = '0'
    }
}
