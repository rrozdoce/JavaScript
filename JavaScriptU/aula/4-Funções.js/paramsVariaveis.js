function soma() {   
    let soma = 0
    for(i in arguments){ // pega o indice de cada um dos elementos
      soma+= arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c')) // tera zero do inicio pq o i começa no 0
