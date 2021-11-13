/*
--> reduce() <---
O valor de retorno da sua função reducer é atribuída ao acumulador.
O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array,
que por fim, se tornará o valor resultante, único, final.
*/

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Pedro', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)