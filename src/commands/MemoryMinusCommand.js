import { calculator } from '..'

export class MemoryMinus {
    execute(value, currentValue, memoryValue) {
        calculator.memoryValue = `${+memoryValue - +currentValue}`
    }
}
