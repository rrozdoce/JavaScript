// Map nao veio pra substituir o Objeto
// nao aceita repetição nas chaves

const { map } = require("lodash")

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // errado, da undefined
console.log(tecnologias.get('react').framework) // correto

const chavesVariadas = new map([
    [function (){ }, 'Função'],
    [{ }, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.size)
// size mostra quantos elementos estão presentes dentro do map()

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)