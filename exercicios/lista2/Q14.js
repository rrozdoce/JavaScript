// Retornar um Array de Arrays

const obj = {
   nome: 'Felipe',
   idade: 18
}

const obj2 = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}

const arrowArraydeArrays = obj => { return Object.entries(obj)}
console.log(arrowArraydeArrays(obj))
console.log(arrowArraydeArrays(obj2))