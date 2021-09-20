import { evaluate } from './evaluate'
import { InfixToPostfix } from './parser'
import { handleBrackets } from './bracketsHandler'
import { functionHandler } from './functionHandler'

export class Calculator {
    constructor(initialValue, app) {
        this.value = initialValue
        this.currentValue = initialValue
        this.memoryValue = initialValue
        this.app = app
        this.history = []
    }
    executeCommand(command) {
        const commandName = command.__proto__.constructor.name
        const arrFromValue = this.value.split(' ')
        switch (commandName) {
            case 'Insert':
            case 'CalculateCommand':
                this.value = command.execute(this.value)
                this.app.innerText = this.value
                this.currentValue = this.getCurrentValue(this.value)
                    ? this.getCurrentValue(this.value)
                    : this.currentValue
                break
            case 'PlusMinus':
                const currentValueIndex = this.getIndexOfCurrentValue()
                this.currentValue = command.execute(this.currentValue)
                this.value = [
                    ...arrFromValue.slice(0, currentValueIndex),
                    this.currentValue,
                    ...arrFromValue.slice(currentValueIndex + 1),
                ].join(' ')
                break
            case 'AllClear':
                this.value = '0'
                this.currentValue = '0'
                this.history = []
                this.memoryValue = '0'
                break
            case 'Memory':
                this.memoryValue = command.execute(this.currentValue)
                break
            case 'MemoryPlus':
            case 'MemoryMinus':
                this.memoryValue = command.execute(
                    this.memoryValue,
                    this.currentValue
                )
                break
            case 'MemoryRead':
                this.value = command.execute(this.memoryValue)
                break
        }
        if (commandName.indexOf('Memory') === -1) {
            this.history.push({
                name: command,
                value: this.value,
                currentValue: this.currentValue,
                memoryValue: this.memoryValue,
            })
        }
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

    getIndexOfCurrentValue() {
        const arrFromValue = this.value.split(' ')
        return arrFromValue.lastIndexOf(this.currentValue)
    }
}

export class PlusMinus {
    execute(value) {
        if (value > 0) {
            return -value
        } else if (value < 0) {
            return Math.abs(value)
        } else {
            return value
        }
    }
}

export class AllClear {
    execute() {
        return null
    }
}

export class Memory {
    execute(value) {
        return value
    }
}

export class MemoryPlus {
    execute(value1, value2) {
        return `${+value1 + +value2}`
    }
}

export class MemoryMinus {
    execute(value1, value2) {
        return `${+value1 - +value2}`
    }
}

export class MemoryRead {
    execute(value) {
        return value
    }
}

export class CalculateCommand {
    execute(value) {
        return `${evaluate(
            InfixToPostfix(functionHandler(handleBrackets(value)))
        )}`
    }
}

export class Insert {
    execute(value) {
        return value
    }
}
