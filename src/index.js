import './styles/style.css'
import { RIGHT_BUTTONS, LEFT_BUTTONS } from './constants/calcConfig'
import { Calculator } from './calculator'
import { Memory } from './commands/MemoryCommand'
import { MemoryMinus } from './commands/MemoryMinusCommand'
import { MemoryPlus } from './commands/MemoryPlusCommand'
import { MemoryRead } from './commands/MemoryReadCommand'
import { PlusMinus } from './commands/PlusMinusCommand'
import { AllClear } from './commands/AllClearCommand'
import { CalculateCommand } from './commands/CalculateCommand'
import { Insert } from './commands/InsertCommand'
import { fillButtons } from './utils/fillButtons'
import { OPERATORS } from './constants/operators'
import { createElem } from './utils/createElem'
import { init } from './utils/init'

document.querySelector('.result-display').innerText = '0'

export const calculator = new Calculator(
    document.querySelector('.result-display').innerText,
    document.querySelector('.result-display')
)

document.querySelector('.buttons-container').addEventListener('click', (e) => {
    let input = document.querySelector('.result-display').innerText
    const isOperator = e.target.attributes['data-operator'] ? true : false
    switch (e.target.attributes['data-key'].value) {
        case 'equals':
            calculator.executeCommand(new CalculateCommand())
            break
        case 'plusMinus':
            calculator.executeCommand(new PlusMinus())
            break
        case '(':
        case ')':
            input = calculator.value
            input += ` ${e.target.value}`
            calculator.executeCommand(new Insert())
            calculator.value = input
            break
        case 'undo':
            calculator.undo()
            break
        case 'xpow2':
            input = calculator.value
            input += ' ^ 2'
            calculator.executeCommand(new Insert())
            calculator.value = input
            break
        case 'xpow3':
            input = calculator.value
            input += ' ^ 3'
            calculator.executeCommand(new Insert())
            calculator.value = input
            break
        case 'sqrtx':
            input = calculator.value
            input += ' root 2'
            calculator.executeCommand(new Insert())
            calculator.value = input
            break
        case 'cubertx':
            input = calculator.value
            input += ' root 3'
            calculator.executeCommand(new Insert())
            calculator.value = input
            break
        case 'AC':
            calculator.executeCommand(new AllClear())
            break
        case 'mc':
            calculator.executeCommand(new Memory())
            break
        case 'm+':
            calculator.executeCommand(new MemoryPlus())
            break
        case 'm-':
            calculator.executeCommand(new MemoryMinus())
            break
        case 'mr':
            calculator.executeCommand(new MemoryRead())
            break
        case '^':
        case 'root':
        case 'ex':
        case '10x':
        case 'ln':
        case 'log10':
        case '%':
        case '1/x':
            input = calculator.value
            input += ` ${e.target.attributes['data-key'].value}`
            calculator.executeCommand(new Insert())
            calculator.value = input
            break
        default:
            if (e.target.value) {
                input = calculator.value
                if (
                    isNaN(+input.split(' ')[input.split(' ').length - 2]) &&
                    input.split(' ')[input.split(' ').length - 2] !== ')' &&
                    input.slice(-1) === '-' &&
                    !isNaN(+e.target.value)
                ) {
                    input += e.target.value
                } else if (
                    isOperator ||
                    input.slice(-1) === '(' ||
                    input.slice(-1) === '^' ||
                    input.slice(-1) === 't' ||
                    OPERATORS.find((item) => item === input.slice(-1))
                ) {
                    input += ` ${e.target.value}`
                } else {
                    input += e.target.value
                }
            } else {
                null
            }
            calculator.value = input
            calculator.executeCommand(new Insert())
    }
    if (
        calculator.value === 'NaN' ||
        calculator.value === 'Infinity' ||
        calculator.value === '-Infinity'
    ) {
        document.querySelector('.result-display').innerText = 'Incorrect input'
    } else {
        document.querySelector('.result-display').innerText = calculator.value
    }
})

init(createElem(fillButtons(LEFT_BUTTONS)), '.left-buttons')

init(createElem(fillButtons(RIGHT_BUTTONS)), '.right-buttons')
