import { evaluate } from './evaluate'
import { InfixToPostfix } from './parser'
import { handleBrackets } from './bracketsHandler'

export class Calculator {
    constructor(initialValue, app) {
        this.value = initialValue
        this.currentValue = initialValue
        this.memoryValue = initialValue
        this.pendingFunction = null
        this.secondFunctionArg = initialValue
        this.app = app
        this.history = []
    }
    executeCommand(command) {
        const commandName = command.__proto__.constructor.name
        switch (commandName) {
            case 'Insert':
            case 'CalculateCommand':
                this.value = command.execute(this.value)
                this.app.innerText = this.value
                this.currentValue = this.getCurrentValue(this.value)
                    ? this.getCurrentValue(this.value)
                    : this.currentValue

                console.log('Value: ' + this.value)
                console.log('currentValue: ' + this.currentValue)
                console.log('Memory value: ' + this.memoryValue)
                console.log('App value: ' + this.app.innerText)
                console.log(this.history)
                break
            case 'Pow2':
            case 'Pow3':
            case 'EpowX':
            case 'TenPowX':
            case 'OneDivideX':
            case 'SqrtX':
            case 'CbRtX':
            case 'Ln':
            case 'Log10':
                const arrFromValue = this.value.split(' ')
                this.currentValue = command.execute(this.currentValue)
                this.value = this.getCurrentValue(this.value)
                    ? [
                          ...arrFromValue.slice(0, arrFromValue.length - 1),
                          this.currentValue,
                      ].join(' ')
                    : [...arrFromValue, this.currentValue].join(' ')
                console.log(this.value)
                break
            case 'PowY':
                this.pendingFunction = command.execute(commandName)
                console.log(this.pendingFunction)
                break
            case 'InsertSecondFuncArg':
                this.secondFunctionArg = command.execute(commandName)
                break
            default:
                break
        }
        this.history.push({
            name: command,
            value: this.value,
            currentValue: this.currentValue,
            pendingFunction: this.pendingFunction,
            secondFunctionArg: this.secondFunctionArg,
        })
    }
    undo() {
        this.history.pop()
        if (this.history.length > 0) {
            this.value = this.history[this.history.length - 1].value
            this.currentValue =
                this.history[this.history.length - 1].currentValue
            console.log(this.history)
        } else {
            this.value = '0'
            console.log('Commands history is empty')
        }
        this.app.innerText = this.value
    }
    getCurrentValue(value) {
        const lastValue = value.split(' ')[value.split(' ').length - 1]
        return isNaN(+lastValue) ? false : lastValue
    }
}

export class CalculateCommand {
    execute(value) {
        return `${evaluate(InfixToPostfix(handleBrackets(value)))}`
    }
}

export class Insert {
    execute(value) {
        return value
    }
}

export class Pow2 {
    execute(value) {
        return `${Math.pow(value, 2)}`
    }
}

export class Pow3 {
    execute(value) {
        return `${Math.pow(value, 3)}`
    }
}

export class EpowX {
    execute(value) {
        return `${Math.pow(2.71828, value)}`
    }
}

export class TenPowX {
    execute(value) {
        return `${Math.pow(10, value)}`
    }
}

export class OneDivideX {
    execute(value) {
        return `${1 / value}`
    }
}

export class SqrtX {
    execute(value) {
        return `${Math.sqrt(value)}`
    }
}

export class CbRtX {
    execute(value) {
        return `${Math.cbrt(value)}`
    }
}

export class Ln {
    execute(value) {
        return `${Math.log(value)}`
    }
}

export class Log10 {
    execute(value) {
        return `${Math.log10(value)}`
    }
}

export class PowY {
    execute(value) {
        return value
    }
}

export class CalculatePowY {
    execute(firstValue, secondValue) {
        return `${Math.pow(firstValue, secondValue)}`
    }
}

export class InsertSecondFuncArg {
    execute(value) {
        return value
    }
}
