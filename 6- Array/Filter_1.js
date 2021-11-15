/*
filter() chama a função callback fornecida, uma vez para cada elemento do array,
e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou  um valor que seja convertido para true.
O callback é chamado apenas para índices do array que possuem valores atribuídos; 
Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. 
Elementos do array que não passaram no teste do callback são simplesmente ignorados,
e não são incluídos no novo array.
*/



const produtos = [ // array com Objetos
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p) {
    return  p.preco > 2500 // aparece no array final só aqueles produtos com preco acima de 2500
    // return false --> isso quer dizer q pra cada elemento percorrido pelo array no qual é uma lista de produtos, ele nao vai estar presente no array final
    // return true --> vai estar todos no array final
}))


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
