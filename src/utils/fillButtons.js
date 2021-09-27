export const fillButtons = (arr) => {
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
