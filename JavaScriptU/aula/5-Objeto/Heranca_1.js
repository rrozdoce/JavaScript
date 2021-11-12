/*
 É um principio da OO(Orientada Objetos) que faz com que voce receba do seu 'pai'
 atributos e comportamentos e reuse o codigo, ou seja,
 o Objetivo da herança é nao precisar da CTRL C + CTRL V.
 copiar os atributos de um objeto e colar em outro 
 */
// atributo prototype só esta disponivel em uma função

const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // retorna true,por padrão ele aponta pra Object.prototype
console.log(volvo.__proto__ === Object.prototype) // retorna true
console.log(Object.prototype.__proto__) // retorna null

function MeuObjeto(){}

console.log(typeof Object, typeof MeuObjeto)
console.log()