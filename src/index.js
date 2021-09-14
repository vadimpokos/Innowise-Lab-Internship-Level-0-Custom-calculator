import './styles/style.css'

import { leftButtons, rightButtons } from './calcConfig'
import { Calculator, CalculateCommand, Insert } from './calculator'
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

document.querySelector('.buttons-container').addEventListener('click', (e) => {
    const isOperator = e.target.attributes['data-operator'] ? true : false
    const isBracket = e.target.value === '(' || e.target.value === ')'
    switch (e.target.attributes['data-key'].value) {
        case 'equals':
            calculator.executeCommand(new CalculateCommand(input))
            document.querySelector('.result-display').innerText =
                calculator.value
            break
        case '(':
        case ')':
            input += ` ${e.target.value}`
            calculator.executeCommand(new Insert(input))
            calculator.value = input
            document.querySelector('.result-display').innerText =
                calculator.value
            break
        case 'undo':
            calculator.undo()
            document.querySelector('.result-display').innerText =
                calculator.value
            break
        default:
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
            calculator.executeCommand(new Insert(input))

            document.querySelector('.result-display').innerText =
                calculator.value
    }
})

init(createElem(fillButtons(rightButtons)), '.left-buttons')

init(createElem(fillButtons(leftButtons)), '.right-buttons')
