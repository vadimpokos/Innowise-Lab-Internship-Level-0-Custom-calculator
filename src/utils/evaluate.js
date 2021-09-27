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


