// ecmascript --> nome Oficial da linguagem JavaScript

// let e const 

{ 
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String

const produto = 'Ipad'
console.log(`${produto} é caro`)

// DESTRUCTURING
// Destructuring --> forma de voce tirar de dentro de uma Estrutura Algo
// seja um Array, Objeto, String, voce pode desestruturar a coisa a partir do 
// operador destructuring

const[l, e, ...tras] = 'Cod3r' 
// --> letra 'C' vai ser atribuida para 'l', 'o' para 'e' e resto para 'tras'
console.log(l, e, tras)

const [x,/* espaço vazio*/ ,y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i , nome)