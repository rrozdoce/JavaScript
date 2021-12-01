let array = [10, 5, 35, 65]

function menorNumero(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
                                             // anterior menor que o atual? se sim, anterior = atual
 }

 console.log(menorNumero(array))