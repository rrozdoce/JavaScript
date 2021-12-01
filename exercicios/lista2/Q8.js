/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

const func = (num1, num2) => {
    let soma = 0

    for (let i = 0; i < num2; i++){
       soma+=num1
    }

    return soma
}

console.log(func(5, 5))
console.log(func(0, 7))