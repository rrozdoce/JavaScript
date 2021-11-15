const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt retorna a letra q esta no indice 4
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) // codigo relacionado a tabela unicode do indice 3
console.log(escola.indexOf('3')) //retorna o 3

console.log(escola.substring(1)) //retorna a letra da string
console.log(escola.substring(0,3)) //retorna a letra da string até tal

console.log('escola'.concat(escola).concat("!")) //juntar string
console.log(escola.replace(3,'e')) //substituir
console.log(escola.replace(/\w/g,'e')) //substitui tudo por 'e'

console.log('Ana,Maria,Pedro'.split(","))