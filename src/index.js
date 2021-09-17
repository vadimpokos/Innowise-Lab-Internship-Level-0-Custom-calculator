import './styles/style.css'

import { leftButtons, rightButtons } from './calcConfig'
import {
    Calculator,
    CalculateCommand,
    Insert,
    Pow3,
    EpowX,
    TenPowX,
    OneDivideX,
    Pow2,
    SqrtX,
    CbRtX,
    Ln,
    Log10,
    PowY,
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

let input = document.querySelector('.result-display').innerText
let secondFunctionArgInput = '0'

document.querySelector('.buttons-container').addEventListener('click', (e) => {
    const isOperator = e.target.attributes['data-operator'] ? true : false
    switch (e.target.attributes['data-key'].value) {
        case 'equals':
            calculator.executeCommand(new CalculateCommand())
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
            calculator.executeCommand(new Pow2())
            break
        case 'xpow3':
            calculator.executeCommand(new Pow3())
            break
        case 'epowx':
            calculator.executeCommand(new EpowX())
            break
        case '10powx':
            calculator.executeCommand(new TenPowX())
            break
        case '1/x':
            calculator.executeCommand(new OneDivideX())
            break
        case 'sqrtx':
            calculator.executeCommand(new SqrtX())
            break
        case 'cubertx':
            calculator.executeCommand(new CbRtX())
            break
        case 'ln':
            calculator.executeCommand(new Ln())
            break
        case 'log10':
            calculator.executeCommand(new Log10())
            break
        case 'xpowy':
            calculator.executeCommand(new PowY())
            break
        default:
            console.log(calculator.pendingFunction)

            if (e.target.value) {
                input = calculator.value
                isOperator ||
                input.slice(-1) === '(' ||
                operators.find((item) => item === input.slice(-1))
                    ? (input += ` ${e.target.value}`)
                    : (input += e.target.value)
            } else {
                null
            }
            calculator.value = input
            calculator.executeCommand(new Insert())
    }
    document.querySelector('.result-display').innerText = calculator.value
})

init(createElem(fillButtons(rightButtons)), '.left-buttons')

init(createElem(fillButtons(leftButtons)), '.right-buttons')
