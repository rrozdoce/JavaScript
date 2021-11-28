// tratamento de erro Async/Await


function gerarNumeros(min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
        // processo de destructuring, ou seja, ler os produtos de dentro de uma estrutura
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
       if(numerosProibidos.includes(aleatorio)) {
          reject('Numero repetido')
       } else{

          resolve(aleatorio)
       }

    })
}

 async function gerarMegaSena(qtdeNumeros, tentativas = 1) { 
     // rejeitar uma promise dentro de uma função assincrona    
    try {
  
         const numeros = []
         for(let _ of Array(qtdeNumeros).fill())  {
              numeros.push(await gerarNumeros(1, 60, numeros))
         }

         return numeros

    } catch(e) {
        if(tentativas > 10){
            throw "Não deu certo!"
        } else {
            return gerarNumeros(qtdeNumeros, tentativas + 1)

        }
        
     }

 }

 gerarMegaSena(8)
  .then(console.log)
  .catch(console.log)