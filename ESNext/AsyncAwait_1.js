// node nao suporta usar 'await' diretamente dentro de um arquivo

const { copyFileSync } = require("fs")
const { compact } = require("lodash")

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
       setTimeout(() => resolve(), tempo)
    })
}



/* esperarPor(2000)
 .then(() => console.log('Executando promise 1.'))
 .then(esperarPor)
 .then(() => console.log('Executando promise 2.'))
 .then(esperarPor)
 .then(() => console.log('Executando promise 3.')) */
  
 function retornarValor() {
     return new Promise(resolve => {
         setTimeout(() => resolve(10),5000)
     })
 }

 // para que a promise seja resolvida sem usar o metodo 'then'
 // seu quero q ele espera a promise ser resolvida para assim
 // ir pra proxima linha coloca 'await'
 async function executar() { // essa função vai devolver uma promise, pois é 'Async'
    let valor = await retornarValorRapido() 

     await esperarPor(1500)
     console.log(`Async/Await ${valor}...`)

     await esperarPor(1500)
     console.log(`Async/Await ${valor + 1}...`)
     
     await esperarPor(1500)
     console.log(`Async/Await ${valor + 2}...`)

     return valor + 3
    }

    async function executarDeVerdade() {
       const valor = await executar() // consigo esperar pq estou dentro de uma função assincrona
       console.log(valor) 
       // para realmente pegar um valor, precisa chamar o 'then'
    }


// quando voce vai sair do assincrono e entra no sincrono voce tem que acessar o valor a partir do 'then'

//const v = executar() nao pode

 executar()
  .then(console.log)