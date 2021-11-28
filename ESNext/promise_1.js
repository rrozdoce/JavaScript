// promise é algo que voce vai resolver no futuro]

const { functions } = require("lodash")

let a = 1
console.log(a)
                             // geralmente é chamada de resolve
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
/*     cumprirPromessa({   // para passar mais de um parametro, usa-se Objeto ou array
          x: 1,
          y: 2
    }) */
})

function primeiroElemento(array) {
     return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

// a promise é uma função e o 'p' é um Objeto

// then tbm vai receber uma função como parametro

const letraMinuscula = letra => letra.toLowerCase()

p

 .then(primeiroElemento) // o parametro é exatamente o valor q foi cumprido
 .then(primeiraLetra) 
 .then(letraMinuscula)
 .then(console.log(letraMinuscula))