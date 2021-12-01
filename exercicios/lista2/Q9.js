/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

const func = (n, cont) => {
    let array = []
    for (let i = 0; i < cont; i++){
        array.push(n)
    }
    return array
}
console.log(func(7, 3))