// Map serve pra fazer uma transformação no Array
// for com proprósito
// Mapear um Array pra um Array de msm tamanho, porém com os dados transformados
// ex dobro do elemento Array = [1, 2, 3] --> map --> Array2 = [2, 4, 6]
// voce pode ter um map que pega um Objeto e transforma em uma numero
// pegar um Array com varios JSONs e transformar isso num array de Objetos
// se Array Original tem 6 elementos, o resultado do map gerará um Array com 6 elementos!, com dados transformados

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)