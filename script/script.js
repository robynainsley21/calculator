//the screen display
let dataEntry = document.querySelector('[data-entry]')

// operators
const dataAdd = document.querySelector('[data-add]')
const dataSubtract = document.querySelector('[data-subtract]')
const dataMultiply = document.querySelector('[data-multiply]') 
const dataDivide = document.querySelector('[data-divide]')
const dataModulus = document.querySelector('[data-modulus]')

const display = (value) => {
    dataEntry.value = value
}