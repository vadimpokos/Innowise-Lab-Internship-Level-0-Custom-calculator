import { evaluate } from './utils/evaluate'
import { InfixToPostfix } from './utils/parser'
import { handleBrackets } from './utils/bracketsHandler'
import { functionHandler } from './utils/functionHandler'

test('sum test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('1 + 1'))))
    ).toBe(2)
})

test('minus test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('2 - 1'))))
    ).toBe(1)
})

test('multiply test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('5 X 3'))))
    ).toBe(15)
})

test('divide test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('20 / 10'))))
    ).toBe(2)
})

test('10x test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('5 10x'))))
    ).toBe(100000)
})

test('pow test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('5 ^ 5'))))
    ).toBe(3125)
})

test('root test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('9 root 2'))))
    ).toBe(3)
})

test('1/x test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('5 1/x'))))
    ).toBe(0.2)
})

test('ln test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('64 ln'))))
    ).toBe(4.1588830833596715)
})

test('log10 test', () => {
    expect(
        evaluate(InfixToPostfix(functionHandler(handleBrackets('10 log10'))))
    ).toBe(1)
})

test('expression test', () => {
    expect(
        evaluate(
            InfixToPostfix(
                functionHandler(handleBrackets('5 + ( 5 + 6 ^ 3 ) - 9'))
            )
        )
    ).toBe(217)
})
