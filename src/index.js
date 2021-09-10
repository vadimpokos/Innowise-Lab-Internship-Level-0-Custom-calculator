import './styles/style.css'
import { InfixToPostfix } from './parser'
import { evaluate, postfixEval } from './evaluate'

import { leftButtons, rightButtons } from './calcConfig'
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

const calculatorInputHandler = (prevValue, newValue, isOperator) => {
    const stringArr = prevValue.split(' ')
    console.log(stringArr)

    if (
        (!prevValue && isOperator) ||
        (operators.find((item) => item === prevValue.slice(-1)) && isOperator)
    ) {
        console.log('incorrect')
    }
}

const handleBrackets = (string) => {
    if (string.includes('(')) {
        const arrFromString = string.split(' ')
        const openIndex = arrFromString.findIndex((item) => item === '(')
        const closeIndex = arrFromString.findIndex((item) => item === ')')
        console.log(arrFromString.slice(openIndex + 1, closeIndex).join(' '))
    } else {
        console.log(string)
    }
}

document.querySelector('.buttons-container').addEventListener('click', (e) => {
    let input = document.querySelector('.result-display').innerText
    let prev = document.querySelector('.result-display').innerText
    const isOperator = e.target.attributes['data-operator'] ? true : false
    const isBracket = e.target.value === '(' || e.target.value === ')'
    console.log('bracket', isBracket)
    calculatorInputHandler(prev, e.target.value, isOperator)

    console.log(e.target.attributes['data-key'].value)

    switch (e.target.attributes['data-key'].value) {
        case 'equals':
            console.log(input.split(' '))
            console.log(evaluate(InfixToPostfix(input)))
            break
        case '(':
        case ')':
            input += ` ${e.target.value}`
            break
        default:
            e.target.value
                ? isOperator ||
                  input.slice(-1) === '(' ||
                  operators.find((item) => item === input.slice(-1))
                    ? (input += ` ${e.target.value}`)
                    : (input += e.target.value)
                : null
    }

    document.querySelector('.result-display').innerText = input
})

init(createElem(fillButtons(rightButtons)), '.left-buttons')

init(createElem(fillButtons(leftButtons)), '.right-buttons')

// console.log(evaluate(infixToPostfix(['1', '1', '3', '-', '+'])))
// console.log(postfixEval(['37', '3', '+']))
// console.log(InfixToPostfix(['1', '-', '1', '(', '+', '3', ')'].join(' ')))

handleBrackets('1 + ( 1 + 3 )')
