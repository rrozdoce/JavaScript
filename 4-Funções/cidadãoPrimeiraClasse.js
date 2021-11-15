// Oque é função?
// Função em JS é First-Class Object (Citizens)
// High-order function

//criar de forma literal
function func1() {}
  
// caso voce nao chame explicitamente o return, toda funcao javascript retorna undefined

// armazenar em uma variavel
const func2 = function () {}

// armazenar em um array
const array = [function(a, b){return a + b}, func1, func2]
console.log(array[0](2,3))

// armazenar em um atributo de Objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// passar uma função como param
function run(fun){
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
   return function (c) {
       console.log(a + b + c)
   }
}

soma(2, 3)(4)

//outra maneira
const cincoMais = soma(2, 3)
cincoMais(4)