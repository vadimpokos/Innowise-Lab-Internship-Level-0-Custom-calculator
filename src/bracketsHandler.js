import { evaluate } from './evaluate'
import { InfixToPostfix } from './parser'

export const handleBrackets = (string) => {
    if (string.includes('(')) {
        const arrFromString = string.split(' ')
        const openIndex = arrFromString.lastIndexOf('(')
        const closeIndex = arrFromString.findIndex(
            (item, index) => item === ')' && index > openIndex
        )
        const stringInBrackets = arrFromString
            .slice(openIndex + 1, closeIndex)
            .join(' ')

        const bracketsResult = evaluate(InfixToPostfix(stringInBrackets))
        const newString = [
            ...arrFromString.slice(0, openIndex),
            `${bracketsResult}`,
            ...arrFromString.slice(closeIndex + 1),
        ].join(' ')
        return handleBrackets(newString)
    } else {
        return string
    }
}
