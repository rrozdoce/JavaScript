const valores  = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores.length) //length mostra qts elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())// tira o ultima valor do array
delete valores[0] //tira o primeiro elemento do array
console.log(valores)

console.log(typeof valores) //array é objeto em JS