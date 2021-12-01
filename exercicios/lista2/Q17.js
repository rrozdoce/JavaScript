const { copyFileSync } = require("fs")

const array = [10, 10, 10]


function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

console.log(somarNumeros(array))    