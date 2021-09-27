export class Memory {
    constructor(calculator) {
        this.calculator = calculator
    }

    execute(value, currentValue, memoryValue) {
        this.calculator.memoryValue = currentValue
    }
}
