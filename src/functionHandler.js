const functionHandler = (string) => {
    const arr = string.split(' ')
    const funcName = arr.find((item) => item === 'pow' || item === 'root')
    console.log(funcName)

    if (funcName) {
        const symbolIndex = arr.findIndex((item) => item === funcName)
        let funcResult = ''
        switch (funcName) {
            case 'pow':
                funcResult = Math.pow(
                    arr[symbolIndex - 1],
                    arr[symbolIndex + 1]
                )
                break
            case 'root':
                funcResult = Math.pow(
                    arr[symbolIndex - 1],
                    1 / arr[symbolIndex + 1]
                )
                break
            default:
                break
        }
        const newString = [
            ...arr.slice(0, symbolIndex - 1),
            `${funcResult}`,
            ...arr.slice(symbolIndex + 2),
        ].join(' ')
        return functionHandler(newString)
    } else {
        return string
    }
}

console.log(functionHandler('9 root 2'))
