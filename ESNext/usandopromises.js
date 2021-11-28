// com promises

const http = require('http')
const { get } = require('lodash')
const { consumers } = require('stream')

const getTurma = letra => { // nao precisa da callback
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url,  res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                // é muito importante q quando voce usa promisse
                // realizar o tratamento de erro!
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        }) 
    })
}

/* let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
 .then(turmas => [].concat(...turmas))
 .then(alunos => alunos.map(alunos => alunos.nome))
 .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message)) // testando uma turma q nao existe