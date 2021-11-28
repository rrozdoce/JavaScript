// quando voce precisa chamar varias promises ao msm tempo
// e voce quer só chamar o then quando todas as promesas forem resolvidas

const { TIMEOUT } = require("dns")
const { functions } = require("lodash")

function gerarNumeros(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
        // processo de destructuring, ou seja, ler os produtos de dentro de uma estrutura
    }

    return new Promise(resolve => {
        setTimeout(function(){

            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeros(1, 60, 4000),
        gerarNumeros(1, 60, 1000),
        gerarNumeros(1, 60, 500),
        gerarNumeros(1, 60, 3000),
        gerarNumeros(1, 60, 100),
        gerarNumeros(1, 60, 1500),
    ])
}

console.time('promise')
gerarVariosNumeros()
 .then(numeros => console.log(numeros))
 .then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
 })