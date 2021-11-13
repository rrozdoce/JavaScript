// Simulando um Array a partir de um Objeto

const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperties(quaseArray, 'toString',{
    value: function() {
        return Object.value(this) 
    },
    Enumerable: false //nao enumerada
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)