import './styles/style.css'

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
        console.log(element.classList.contains('dark'))
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

document.querySelector('.buttons-container').addEventListener('click', (e) => {
    let input = document.querySelector('.result-display').innerText
    let prev = document.querySelector('.result-display').innerText
    const isOperator = e.target.attributes['data-operator'] ? true : false
    calculatorInputHandler(prev, e.target.value, isOperator)
    e.target.value
        ? isOperator || operators.find((item) => item === input.slice(-1))
            ? (input += ` ${e.target.value}`)
            : (input += e.target.value)
        : null

    document.querySelector('.result-display').innerText = input
    console.log(e)
})

init(createElem(fillButtons(rightButtons)), '.left-buttons')

init(createElem(fillButtons(leftButtons)), '.right-buttons')
