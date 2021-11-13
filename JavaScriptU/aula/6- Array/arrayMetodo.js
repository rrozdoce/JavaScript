const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa']
pilotos.pop() //massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover
/*
O método slice() retorna uma cópia de parte de um array a partir de um subarray
criado entre as posições início e fim (fim não é necessário) de um array original.
 O Array original não é modificado.
*/

//adicionar 
pilotos.splice(2, 0, 'Bottas','Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
// slice() pega um novo array a partir do indice colocado nos colchetes
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai até o indice 4, mas sem incluir o indice 4
console.log(algunsPilotos2)