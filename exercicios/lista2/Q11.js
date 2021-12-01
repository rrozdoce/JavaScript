function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento= elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
    }
    