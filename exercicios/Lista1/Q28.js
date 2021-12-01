/*
 Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function calculo(numeros = []) {
    let quantidade_pares = 0
    let quantidade_impares = 0
    for(let i = 1; i <= numeros.length; i++){
      if(numeros[i] % 2 == 0){
          quantidade_pares++
      }else{
          quantidade_impares++
      }
    } 
    console.log(`Quantidade de pares: ${quantidade_pares}`)
    console.log(`Quantidade de impares: ${quantidade_impares}`)
}

calculo([1, 3, 4, 6, 9, 11])