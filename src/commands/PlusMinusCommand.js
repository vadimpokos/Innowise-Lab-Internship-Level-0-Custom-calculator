import { calculator } from '..'

export class PlusMinus {
    execute(value, currentValue, memoryValue) {
        const arrFromValue = calculator.value.split(' ')

        const currentValueIndex = calculator.getIndexOfCurrentValue()
        calculator.currentValue = value > 0 ? -value : Math.abs(value)
        calculator.value = [
            ...arrFromValue.slice(0, currentValueIndex),
            calculator.currentValue,
            ...arrFromValue.slice(currentValueIndex + 1),
        ].join(' ')
        calculator.pushToHistory(this)
    }
}
