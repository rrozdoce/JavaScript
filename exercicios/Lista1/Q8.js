let stringPontuacao = "30, 40, 50, 60, 70, 0, 20"

function avaliadorDePontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ") 
    let record = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    for(let i = 1; i <= pontuacoes.length;i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            record++
        }else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }

    }

    return [ record, piorJogo];

}

console.log(avaliadorDePontuacoes(stringPontuacao));