function calculadora(numero1,numero2,modo) {
    switch(modo){
        case '+':
         return numero1 + numero2
        break

        case '*':
         return numero1 * numero2
        break

        case '-':
          return numero1 - numero2
        break

        case '/':
          return numero1 / numero2
        break

        default:
           return 'opção invalida'
        break
    }
}

console.log(calculadora(1, 2, '+'))
console.log(calculadora(2, 1, '*'))
console.log(calculadora(2, 1, '-'))
console.log(calculadora(2, 1, '/'))
console.log(calculadora(2, 1, 'é'))