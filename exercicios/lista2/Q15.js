let array = [10, 70, 22, 43]


const ParIndicePares = numero => {
    return numero.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

       return numeroPar && indicePar
    })
}

console.log(ParIndicePares(array))