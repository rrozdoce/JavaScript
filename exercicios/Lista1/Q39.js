/*
Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

let vetorA = [1, 2, 3, 4, 5, 6]
let vetorB = [7, 8, 9, 10, 11, 12]

function trocarVetor(vetorA = [], vetorB = []) {
    let aux = []
    
    if(vetorA.length == vetorB.length){
    for(let i = 0; i < vetorA.length; i++){
        aux[i] = vetorA[i]
        vetorA[i] = vetorA[i] + vetorB[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
       
    }
    console.log(vetorA)
    console.log(vetorB)
}else{
    console.log('Vetores diferentes!')
}

  
}

trocarVetor(vetorA,vetorB)