function rand([min = 0, max = 1000]) {
    if( min > main) [min,max] = [max,min]
    const valor = Math.random() * (max - min) + min // + min pra deslocar o valor pra dar um valor entre o minimo e o maximo
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
// console.log(rand([,10])) 
// console.log(ran([]))
// console.log(rand())