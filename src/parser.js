function push_stack(stackArr, ele) {
    stackArr[stackArr.length] = ele
}

function pop_stack(stackArr) {
    const _temp = stackArr[stackArr.length - 1]
    delete stackArr[stackArr.length - 1]
    stackArr.length--
    return _temp
}

function isOperand(who) {
    return !isOperator(who) ? true : false
}

function isOperator(who) {
    return who == '+' || who == '-' || who == 'X' || who == '/' ? true : false
}

function topStack(stackArr) {
    return stackArr[stackArr.length - 1]
}

function isEmpty(stackArr) {
    return stackArr.length == 0 ? true : false
}

/* Check for Precedence */
function prcd(char1, char2) {
    let char1_index = ''
    let char2_index = ''
    const _def_prcd = '-+X/'
    for (let i = 0; i < _def_prcd.length; i++) {
        if (char1 == _def_prcd.charAt(i)) char1_index = i
        if (char2 == _def_prcd.charAt(i)) char2_index = i
    }
    if ((char1_index == 0 || char1_index == 1) && char2_index > 1) return false
    else return true
}

export function InfixToPostfix(infixStr) {
    const postfixStr = []
    const stackArr = []
    let postfixPtr = 0
    infixStr = infixStr.split(' ')
    for (let i = 0; i < infixStr.length; i++) {
        if (isOperand(infixStr[i])) {
            postfixStr[postfixPtr] = infixStr[i]
            postfixPtr++
        } else {
            while (
                !isEmpty(stackArr) &&
                prcd(topStack(stackArr), infixStr[i])
            ) {
                postfixStr[postfixPtr] = topStack(stackArr)
                pop_stack(stackArr)
                postfixPtr++
            }
            push_stack(stackArr, infixStr[i])
        }
    }
    while (!isEmpty(stackArr)) {
        postfixStr[postfixStr.length] = topStack(stackArr)
        pop_stack(stackArr)
    }
    let returnVal = ''
    for (var i = 0; i < postfixStr.length; i++) {
        returnVal += ` ${postfixStr[i]}`
    }
    console.log(returnVal.trim())
    return returnVal.trim()
}
