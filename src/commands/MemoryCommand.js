import { calculator } from '..'

export class Memory {
    execute(value, currentValue, memoryValue) {
        calculator.memoryValue = currentValue
    }
}
