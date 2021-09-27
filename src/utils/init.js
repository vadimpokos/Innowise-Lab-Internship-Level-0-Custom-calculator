export const init = (arr, place) => {
    arr.forEach((item) => document.querySelector(place).append(item))
}
