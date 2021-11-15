console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
   return this.split('').reverse() 
}

console.log('Escola Cod3r'.reverse())


Array.prototype.fist = function () {
   return this[0]
}

console.log([1, 2, 3, 4, 5].fist())
console.log(['a','b','c'].fist())

String.prototype.toString = function () { 
   // nao recomendado fazer, pois pode dar alguma defeito, pois ta substituindo uma funcao ja existente 
   return 'Lascou Tudo' 
}

console.log('Escola Cod3r'.reverse())