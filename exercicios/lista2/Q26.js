function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos) // fromEntries transforma chave-valor(array) em Objeto
}
    
    function inverter2(objeto) {
        const objetoInvertido = {}
        Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
        valor = 1
        objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })
        return objetoInvertido
}

