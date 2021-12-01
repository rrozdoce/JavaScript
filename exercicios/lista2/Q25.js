const { includes } = require("lodash")

let arrayString  =  ["programação", "mobile", "profissional"]

function buscarPalavrasSemelhantes(inicio, palavras) {

    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes('pro',arrayString))

function buscarPalavrasSemelhantes2(inicio, palavras) {
    const resultado = []
     for (let palavra of palavras)
      if (palavra.includes(inicio))
       resultado.push(palavra)
        return resultado
}

console.log(buscarPalavrasSemelhantes2('pro',arrayString))