function conta(a, b) {
    let soma = a + b
    let sub =  a - b
    let multi = a * b
    let div = a/b
    let contaRealizada = `soma = ${soma}, subtração = ${sub},multiplicação = ${multi}, divisão = ${div}`
    return contaRealizada
}

console.log(conta(2,3))

