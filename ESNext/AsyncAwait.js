// com promises

const http = require('http')

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

// Recurso do ES8
// Objetivo de simplificar o uso de promises...

let obterAlunos = async () => { // tirou async, o programa para de funcionar 
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction
obterAlunos()
 .then(alunos => alunos.map(a => a.nome))
 .then(nomes => console.log)
