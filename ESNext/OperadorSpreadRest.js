// Operador ... rest(juntar)/spread(espalhar)
// Esse operador pode ser usado como rest pra juntar e spread pra espalhar
// Usar rest com parametro de funcao

// usar spread com Objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario } 
// spread, pega todos os atributos dentro de um Objeto e espalhar em outro Objeto
console.log(clone)

// usar Spread com Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal) // Spread
