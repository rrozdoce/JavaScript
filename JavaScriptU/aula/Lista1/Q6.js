function JurosSimples(capitalInicial,taxaDeJuros,tempoDeAplicacao) {
    return capitalInicial * taxaDeJuros * tempoDeAplicacao;
    
}

function JurosComposto(capitalInicial,taxaDeJuros,tempoDeAplicacao) {
    return capitalInicial * Math.pow(1 + taxaDeJuros,tempoDeAplicacao);
}

console.log(JurosSimples(100, 10/100, 2));
console.log(JurosComposto(100, 10/100, 2));