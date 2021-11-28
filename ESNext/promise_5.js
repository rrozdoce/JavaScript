// tratamento de erro dentro do contexto das promises

const { compact } = require("lodash")

function funcionalOuNao(valor, chanceErro) {
   return new Promise((resolve, reject) => {
       
    try{
        
        con.log('temp')
        if(Math.random() < chanceErro){
            reject('Ocorreu um Erro')
        } else {
            resolve(valor)
        }
     } catch(e) {
         reject(e)
     }
   }) 
}

funcionalOuNao('Testando...', 0.5)
 .then(v => `valor: ${v}`)
 .then(
     v => console.log(v),
     err => console.log(`Erro especifico: ${err}`)
 )
 .then(() => console.log('Quase Fim'))
 .catch(err => console.log(`Erro Geral: ${err}`))
 .then(() => console.log('Fim!')) 

// depois do catch nenhum valor vai ser Obtido por isso é comum tratar ele sempre no final