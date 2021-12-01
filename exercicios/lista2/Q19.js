let array = [1, 2, 3, 4, 5]

function Media(elemento) {
    let somatorio =  elemento.reduce((soma = 0, e) => soma + e)
    return somatorio / array.length
}

console.log(Media(array))