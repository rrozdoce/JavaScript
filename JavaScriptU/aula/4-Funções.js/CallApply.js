function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
    nome : 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
console.log(getPreco()) // da NaN
console.log(produto.getPreco())

const carro = {preco : 49990, desc : 0.20}

//Call
console.log(getPreco.call(carro));
//Apply
console.log(getPreco.apply(carro));

// a diferença é a passagem dos parametros

console.log(getPreco.call(carro,0.17, '$'))
console.log(getPreco.apply(carro,[0.17, '$'])) // array
