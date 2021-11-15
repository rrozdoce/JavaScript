//não utilizando a sintaxe de classes
var pessoa = {
    nome: 'Gabriela',
    sobrenome: 'Ribeiro',
}

//utilizando a sintaxe de classes
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

let gabriela = new Pessoa ('Gabriela', 'Ribeiro')
let Felipe = new Pessoa ('Felipe', 'Echeverria')

console.log(gabriela)
console.log(Felipe)