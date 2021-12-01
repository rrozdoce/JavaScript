/*
O método split() divide uma String em uma lista ordenada de substrings,
coloca essas substrings em um array e retorna o array. 
A divisão é feita procurando um padrão, 
onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
*/

function contarPalavras(frase) {
    const palavras = frase.split("")
    return palavras.length
}

console.log(contarPalavras("aeiou"))