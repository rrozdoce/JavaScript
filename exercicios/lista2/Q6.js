const { type } = require("os")

const func = valor => {
    if(typeof valor === 'boolean'){
        return false
    }else if(typeof valor === 'number'){
        return valor * (-1)
    }else{
        return `booleano ou número esperados, mas o parâmetro é do  tipo ${typeof valor}`
    }
}

console.log(func(2))
console.log(func(true))
console.log(func('Oi'))