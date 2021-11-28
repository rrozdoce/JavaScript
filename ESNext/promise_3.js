
function gerarNumeros(min, max) {
    if(min > max) {
        [max, min] = [min, max]
        // processo de destructuring, ou seja, ler os produtos de dentro de uma estrutura
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeros(1, 60)
 .then(num => num * 10)
 .then(numx10 => `O numero gerado foi ${numx10}`)
 .then(console.log)