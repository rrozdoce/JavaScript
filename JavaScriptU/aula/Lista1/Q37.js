/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function PA(n, a1, r) {
    for(let i = 0; i < n ; i++){
        console.log(a1 + r*i)
    }

    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)
}

function PG(n, a1, r) {
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

PA(11, 12, 16)
console.log("____________\n")
PA(11, 3, 1)