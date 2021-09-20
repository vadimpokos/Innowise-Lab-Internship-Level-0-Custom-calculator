import './styles/style.css'

import { leftButtons, rightButtons } from './calcConfig'
import {
    Calculator,
    CalculateCommand,
    Insert,
    PlusMinus,
    AllClear,
    MemoryPlus,
    Memory,
    MemoryMinus,
    MemoryRead,
} from './calculator'
const operators = ['+', '-', '/', 'X']

const fillButtons = (arr) => {
    return arr.map((item) => {
        return {
            type: 'input',
            properties: {
                type: 'button',
                value: item.value,
                className: `${item.className} calc-button`,
            },
            dataAttributes: {
                [`data-key`]: item.dataKey,
            },
        }
    })
}

const createElem = (arr) => {
    const elems = arr.map((item) => {
        const element = document.createElement(item.type)
        if (operators.find((operator) => operator === item.properties.value)) {
            element.setAttribute('data-operator', 'true')
        }

        Object.entries(item.properties || {}).forEach(([key, value]) => {
            element[key] = value
        })
        Object.entries(item.dataAttributes || {}).forEach(([key, value]) => {
            element.setAttribute(key, value)
        })
        return element
    })
    return elems
}

const init = (arr, place) => {
    arr.forEach((item) => document.querySelector(place).append(item))
}

document.querySelector('.result-display').innerText = '0'

const calculator = new Calculator(
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
                console.log(input.split(' ').slice(1, -2))
                if (
                    isNaN(+input.split(' ')[input.split(' ').length - 2]) &&
                    input.slice(-1) === '-' &&
                    !isNaN(+e.target.value)
                ) {
                    input += e.target.value
                } else if (
                    isOperator ||
                    input.slice(-1) === '(' ||
                    input.slice(-1) === '^' ||
                    input.slice(-1) === 't' ||
                    operators.find((item) => item === input.slice(-1))
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

init(createElem(fillButtons(rightButtons)), '.left-buttons')

init(createElem(fillButtons(leftButtons)), '.right-buttons')
