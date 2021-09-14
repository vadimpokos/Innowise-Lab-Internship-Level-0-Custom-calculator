import { evaluate } from './evaluate'
import { InfixToPostfix } from './parser'
import { handleBrackets } from './bracketsHandler'

export class Calculator {
    constructor(initialValue, app) {
        this.value = initialValue
        this.memoryValue = initialValue
        this.app = app
        this.history = []
    }
    executeCommand(command) {
        this.value = command.execute(this.value)
        this.app.innerText = this.value
        this.history.push({
            name: command,
            currentValue: this.value,
        })
        console.log('Current value: ' + this.value)
        console.log('Memory value: ' + this.memoryValue)
        console.log('App value: ' + this.app.innerText)
        console.log(this.history)
    }
    undo() {
        this.history.pop()
        if (this.history.length > 0) {
            this.value = this.history[this.history.length - 1].currentValue
            console.log(this.history)
        } else {
            this.value = '0'
            console.log('Commands history is empty')
        }
        this.app.innerText = this.value
    }
}

export class CalculateCommand {
    execute(value) {
        return `${evaluate(InfixToPostfix(handleBrackets(value)))}`
    }
}

export class Insert {
    execute(value) {
        console.log(value)
        return value
    }
}
