import { OPERATORS } from "../constants/operators";

export const createElem = (arr) => {
    const elems = arr.map((item) => {
        const element = document.createElement(item.type)
        if (OPERATORS.find((operator) => operator === item.properties.value)) {
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