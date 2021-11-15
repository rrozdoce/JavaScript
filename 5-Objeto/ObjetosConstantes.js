// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' 
// quando ele faz isso, ele nao muda a referencia da constante q no caso é 'pessoa'
// Oque nao pode alterar é a constante pessoa


// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // freeze congela o objeto "pessoa", assim nao conseguindo mais mexer no Objeto

pessoa.nome = 'Maria' // vai ignorar a tentativa de atribuição de nome por conta do freeze
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

// Objeto com freeze desde o inicio
const pessoaConstante = Object.freeze({nome: 'Robson'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)