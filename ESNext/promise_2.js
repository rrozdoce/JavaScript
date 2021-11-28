
// vai ter situações no mundo real q precisamos colocar uma callback dentro da outra

/* setTimeout(function() {
       console.log('Executanto callback')
   
   setTimeout(function() {
        console.log('Executanto callback')
       
       setTimeout(function() {
         console.log('Executanto callback')

      },2000) 
   },2000)
}, 2000) // 2 mil milisegundos --> 2 segundos */

// com promise é muito mais facil de compor varias chamadas
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
       setTimeout(() => {
          console.log('Executando promise.')
          resolve('Vishh')
       }, tempo);
    })
}

let p = esperarPor(3000)
.then(texto => console.log(texto))
.then(esperarPor)