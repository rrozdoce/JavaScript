const func = num => {
    let resultado = ''
    for(let i = 0; i < num; i++){
        resultado+= '+'
    }

    return resultado
}

console.log(func(2))
console.log(func(4))