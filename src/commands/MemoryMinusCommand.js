export class MemoryMinus {
    constructor(calculator) {
        this.calculator = calculator
    }

    execute(value, currentValue, memoryValue) {
        this.calculator.memoryValue = `${+memoryValue - +currentValue}`
    }
}
