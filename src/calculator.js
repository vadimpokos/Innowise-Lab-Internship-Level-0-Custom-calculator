

export class Calculator {
    constructor(initialValue, app) {
        this.value = initialValue
        this.currentValue = initialValue
        this.memoryValue = initialValue
        this.app = app
        this.history = []
    }
    executeCommand(command) {
        command.execute(this.value, this.currentValue, this.memoryValue)
       
    }

    pushToHistory(command) {
        this.history.push({
            name: command,
            value: this.value,
            currentValue: this.currentValue,
                memoryValue: this.memoryValue,
        })
    }

    undo() {
        this.history.pop()
        if (this.history.length > 0) {
            this.value = this.history[this.history.length - 1].value
            this.currentValue =
                this.history[this.history.length - 1].currentValue
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















