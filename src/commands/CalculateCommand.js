import { calculator } from "..";
import { evaluate } from "../utils/evaluate";
import { InfixToPostfix } from "../utils/parser";
import { functionHandler } from "../utils/functionHandler";
import { handleBrackets } from "../utils/bracketsHandler";

export class CalculateCommand {
    execute(value, currentValue, memoryValue) {
        
        calculator.value = `${evaluate(
            InfixToPostfix(functionHandler(handleBrackets(value)))
        )}`
                calculator.app.innerText = calculator.value
                calculator.currentValue = calculator.getCurrentValue(calculator.value)
                    ? calculator.getCurrentValue(calculator.value)
                    : calculator.currentValue
                    calculator.pushToHistory(this)
    }
}