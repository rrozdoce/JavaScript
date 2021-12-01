/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function mediaAritmetica(vetor = []) {
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
      soma+=vetor[i]
    }

   return soma / vetor.length
    
}

console.log(mediaAritmetica([7, 8, 9]))