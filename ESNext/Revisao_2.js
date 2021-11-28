// Arrow Function

const { Cipher } = require("crypto")

// Funções Arrow sao funcoes anonimas, ou seja, nao tem como atribuir nome
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default

function log(texto = 'Node') {
  console.log(texto)
}
// capacidade de emcima de um atributo da funcao voce definir um valor padrão pra ele
// ou seja, se voce passar undefined ou nao atribuir um valor, ele passará um valor padrão

log()
log('Sou mais forte')

// operador rest
// esse Operador tem dois nomes --> spread de espalhar e rest de agrupar
/* ter parametros variados(varios parametros na chamada da funcao) e esses parametros
serão agrupados em um array internamente na função*/

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) 
// note que foi passado parametros espalhados e esse operador agrupou em uma estrutura do tipo array