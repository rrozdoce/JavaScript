/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

// metodo 1:
function filtrar(array, numero) {
   return array.filter(numeros => {
       const quantidadeDeDigitos = String(numeros).length
        return quantidadeDeDigitos === numero
   })
}

console.log(filtrar([5, 9, 1, 125, 11], 1))


// metodo 2:
function filtrar2(numero, quantidadeDeje) {
    let resultado = []
 for(numero of numero) {
     const quantidadeDeDigitos = String(numero).length

     if(quantidadeDeDigitos === quantidadeDeje)
     resultado.push(numero)
 }
 return resultado
}

console.log(filtrar2([5, 9, 1, 125, 11], 1))