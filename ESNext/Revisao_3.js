// ES8: Object.values/Object.entries
// Object.values -->Pega os valores de um Objeto
/* Object.entries --> vai te dar chave-valor, um array de outros array 
e essa funcao vai nos dar uma matriz*/

const { values } = require("lodash")

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // Object.keys <-- versao antiga
console.log(Object.entries(obj)) // array de arrays(Matriz)

// Melhorias na notação literal de Objetos
const nome = 'Carla'
const pessoa = {
    nome,
    ola() { // nao precisa mais colocar a palavra function
      return 'Oi gente!'
    }  
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal { // sintaxe de classe para ter herança
    falar() {
        return 'Au au!'
    }
}
// para criar Objetos a partir de uma classe, usamos a palavra reservada 'New'
/* da mesma forma que a partir de uma funcao construtora 
voce pode criar novas instancias usando o operador 'New'*/

console.log(new Cachorro().falar())