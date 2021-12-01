// metodo 1:

function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior
     numeros.forEach( (numero, indice) => {
     if( numero > numeros[indiceDoMaior] )
      indiceDoMaior = indice
  })
      numeros.splice(indiceDoMaior, 1)
      segundoMaior = numeros[0]
      numeros.forEach(numero => {
    if(numero > segundoMaior)
     segundoMaior = numero
   })
 return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
// metodo 2:

function segundoMaior2(numeros) {
    const maiorNumero = Math.max(...numeros)
     numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
      return segundoMaior
}

console.log(segundoMaior2([12, 16, 1, 5]))


//metodo 3:

function segundoMaior3(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
      return segundoMaior
}

console.log(segundoMaior3([12, 16, 1, 5]))
