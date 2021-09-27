import { calculator } from '..'

export class MemoryPlus {
    execute(value, currentValue, memoryValue) {
        calculator.memoryValue = `${+memoryValue + +currentValue}`
    }
}
