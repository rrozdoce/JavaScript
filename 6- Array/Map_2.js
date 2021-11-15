const carrinho = [
    '{ "nome": "borracha","preco": 3.45 }',
    '{ "nome": "Caderno","preco": 13.90 }',
    '{ "nome": "kit de Lapis","preco": 41.22 }',
    '{ "nome": "Caneta","preco": 7.50 }',

]

//Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json) // JSON.parse() transforma um JSON em Objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

