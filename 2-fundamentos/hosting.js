// Hosting é um comportamento padrao Javascript de mover a declaração para o topo

console.log('a =',a)
var a = 2 //hosting
console.log('a =',a)

console.log('b =', b)
let b = 2
console.log('b =',b)