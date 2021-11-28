// encapsular  uma chamada de read file dentro de uma promise

const fs = require('fs')

const path = require('path')



function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_,conteudo) {
          resolve(conteudo.toString())
        })
        console.log('depois de resolver')
    })
}

const caminho = path.join(__dirname, 'dados.txt') // ler o arquivo dados.txt

lerArquivo(caminho)
.then(conteudo => conteudo.split('\n')) // vai quebrar em linhas separadas
.then(linhas => console.log(linhas[1])) // vai imprimir a linha 2
.then(conteudo => `O valor final é: ${conteudo}`)
.then(console.log)