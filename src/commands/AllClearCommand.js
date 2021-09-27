import { calculator } from '..'

export class AllClear {
    execute(value, currentValue, memoryValue) {
        calculator.value = '0'
        calculator.currentValue = '0'
        calculator.history = []
        calculator.memoryValue = '0'
    }
}
