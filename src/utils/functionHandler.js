export const functionHandler = (string) => {
    const arr = string.split(' ')
    const funcName = arr.find(
        (item) =>
            item === '^' ||
            item === 'root' ||
            item === 'ex' ||
            item === '10x' ||
            item === 'ln' ||
            item === 'log10' ||
            item === '%' ||
            item === '1/x'
    )

    if (funcName) {
        const symbolIndex = arr.findIndex((item) => item === funcName)
        let funcResult = ''
        let newString = ''
        switch (funcName) {
            case '^':
                funcResult = Math.pow(
                    arr[symbolIndex - 1],
                    arr[symbolIndex + 1]
                )
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 2),
                ].join(' ')
                break
            case 'root':
                funcResult = Math.pow(
                    arr[symbolIndex - 1],
                    1 / arr[symbolIndex + 1]
                )
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 2),
                ].join(' ')
                break
            case 'ex':
                funcResult = Math.pow(2.71828, arr[symbolIndex - 1])
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 1),
                ].join(' ')
                break
            case '10x':
                funcResult = Math.pow(10, arr[symbolIndex - 1])
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 1),
                ].join(' ')
                break
            case 'ln':
                funcResult = Math.log(arr[symbolIndex - 1])
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 1),
                ].join(' ')
                break
            case 'log10':
                funcResult = Math.log10(arr[symbolIndex - 1])
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 1),
                ].join(' ')
                break
            case '%':
                funcResult = arr[symbolIndex - 1] / 100
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 1),
                ].join(' ')
                break
            case '1/x':
                funcResult = 1 / arr[symbolIndex - 1]
                newString = [
                    ...arr.slice(0, symbolIndex - 1),
                    `${funcResult}`,
                    ...arr.slice(symbolIndex + 1),
                ].join(' ')
                break
            default:
                break
        }

        return functionHandler(newString)
    } else {
        return string
    }
}
