// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero : 1000
    }
}

//destructuring
//uma forma de voce tirar varios atributos dentro de um objeto e atribuir a suas respectivas variaveis
const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome,bemHumorada = true} = pessoa // sobrenome e bemhumorada nao foi definidos
console.log(sobrenome,bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num}} = pessoa