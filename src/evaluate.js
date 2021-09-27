const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    X: (x, y) => x * y,
    '/': (x, y) => x / y,
}

export const evaluate = (expr) => {
    const stack = []

    expr.split(' ').forEach((token) => {
        if (token in operators) {
            const [y, x] = [stack.pop(), stack.pop()]
            stack.push(operators[token](x, y))
        } else {
            stack.push(parseFloat(token))
        }
    })

    return stack.pop()
}

export function postfixEval(postfixArray) {
    const stack = []

    for (let element of postfixArray) {
        if (isNaN(element)) {
            const x = stack.pop()
            const y = stack.pop()
            if (element == '+') {
                stack.push(y + x)
            } else if (element == '-') {
                stack.push(y - x)
            } else if (element == 'X') {
                stack.push(y * x)
            } else if (element == '/') {
                stack.push(y / x)
            } else if (element === '^') {
                stack.push(Math.pow(y, x))
            }
        } else {
            stack.push(parseFloat(element))
        }
    }

    let returnValue = null
    while (stack.length > 0) {
        console.log(stack)
        const element = stack.pop()
        if (isNaN(element)) {
            continue
        } else {
            returnValue = element
        }
    }
    return returnValue
}
