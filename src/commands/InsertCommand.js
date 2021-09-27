import { calculator } from "..";

export class Insert {
  
    execute(value, currentValue, memoryValue) {
        calculator.value = value
                calculator.app.innerText = calculator.value
                calculator.currentValue = calculator.getCurrentValue(calculator.value)
                    ? calculator.getCurrentValue(calculator.value)
                    : calculator.currentValue
        calculator.pushToHistory(this)
    }
}