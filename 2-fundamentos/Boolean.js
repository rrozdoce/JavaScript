let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')

console.log(!!3) //true
console.log(!!-1) //true
console.log(!!' ') //true
console.log(!![]) //true
console.log(!!'texto') //true
console.log(!!{}) //true
console.log(!!Infinity) //true
console.log(!!(isAtivo = true)) //true

console.log('os falsos...')

console.log(!!0) //false
console.log(!!'') //false
console.log(!!null) //false
console.log(!!NaN) //fasle
console.log(!!undefined) //fasle
console.log(!!(isAtivo = false)) //fasle

console.log('pra finalizar....')
console.log(!!('' || null || 0 || ' '))

let nome = '' // se tiver um nome sera imprimido o nome

console.log(nome || 'desconhecido')