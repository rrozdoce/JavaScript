/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/
function concatenar(...args) {
    resposta = []
    for(let i = 0; i < arguments.length; i++){
        resposta = resposta.concat(arguments[i])
    }
    return resposta
}

console.log(concatenar([1, 2, 3, 5, 7],['Daniel','Mateus','Mugi']))
console.log(concatenar([2.2, 3.4, 5.5, 7.7],['Daniel','Mateus','Mugi']))