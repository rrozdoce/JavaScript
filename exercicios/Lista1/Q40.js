/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A
*/

let notas = [7.5, 9.0, 3.0, 7.7]

function atribuicaoNota(notas = []) {
    for(let i = 0; i <= notas.length; i++){
        if(notas[i] >= 0.0 && notas[i] <= 4.9){
          console.log(`nota ${notas[i]}: Conceito D`)
        }
        if(notas[i] >= 5.0 && notas[i] <= 6.9){
            console.log(`nota ${notas[i]}: Conceito C`)
        }
        if(notas[i] >= 7.0 && notas[i] <= 8.9){
            console.log(`nota ${notas[i]}: Conceito B`)
        }
        if(notas[i] >= 9.0 && notas[i] <= 10.0){
            console.log(`nota ${notas[i]}: Conceito A`)
        }
    }
}

atribuicaoNota(notas)