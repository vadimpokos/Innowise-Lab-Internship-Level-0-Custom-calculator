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
    console.log(e.target.attributes['data-key'].value)
})

init(createElem(fillButtons(rightButtons)), '.left-buttons')

init(createElem(fillButtons(leftButtons)), '.right-buttons')

// ///////////////

const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
}

let evaluate = (expr) => {
    let stack = []

    expr.split(' ').forEach((token) => {
        if (token in operators) {
            let [y, x] = [stack.pop(), stack.pop()]
            stack.push(operators[token](x, y))
        } else {
            stack.push(parseFloat(token))
        }
    })

    return stack.pop()
}

function infixToPostfix(infix) {
    const presedences = ['-', '+', '*', '/']

    var opsStack = [],
        postfix = []

    for (let token of infix) {
        if ('number' === typeof +token && !isNaN(+token)) {
            postfix.push(token)
            continue
        }
        let topOfStack = opsStack[opsStack.length - 1]
        if (!opsStack.length || topOfStack == '(') {
            opsStack.push(token)
            continue
        }
        if (token == '(') {
            opsStack.push(token)
            continue
        }
        // Step 4
        if (token == ')') {
            while (opsStack.length) {
                let op = opsStack.pop()
                if (op == '(') break
                postfix.push(op)
            }
            continue
        }
        // Step 5
        let prevPresedence = presedences.indexOf(topOfStack),
            currPresedence = presedences.indexOf(token)
        while (currPresedence < prevPresedence) {
            let op = opsStack.pop()
            postfix.push(op)
            prevPresedence = presedences.indexOf(opsStack[opsStack.length - 1])
        }
        opsStack.push(token)
    }
    // Step 6
    while (opsStack.length) {
        let op = opsStack.pop()
        if (op == '(') break
        postfix.push(op)
    }

    return postfix.join(' ')
}

console.log(infixToPostfix(['2', '+', '2', '*', '(', '2', '+', '2', ')']))
console.log(
    evaluate(infixToPostfix(['2', '+', '2', '*', '(', '2', '+', '2', ')']))
)
