// Json é um formato de dados, o mais usado no mercado para interoperabilidade
// pode ser lido em varias Linguagens diferentes

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse({"a":1,"b":2,"c":3})) formato JSON nao valido!!
//console.log(JSON.parse("{'a':1,'b':2,'c':3}")) formato JSON nao valido!!
console.log(JSON.parse('{ "a":1,"b":2,"c":3 }')) // formato valido
console.log(JSON.parse('{ "a":1,"b": "String","c": true, "d": {}, "e": [] }')) //formato valido
// Qualquer texto dentro de um JSON deve ser delimitado por aspas duplas!