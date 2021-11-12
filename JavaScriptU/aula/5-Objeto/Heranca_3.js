const pai = {nome: 'pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
   nome: {value: 'Bia', writable: false, enumerable: true} 
   // se tivesse colocar enumerable false, o atributo nome nao iria aparecer na saida/terminal
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    //console.log(key)
    filha2.hasOwnProperty(key) ?
     console.log(key) : console.log(`Por Herança: ${key}`)
     // pertence ao proprio objeto?, verificar se uma determinada propriedade pertence ou nao ao Objeto.
}