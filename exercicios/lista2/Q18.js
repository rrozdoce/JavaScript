const arrayDeProtuos = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]


    function despesasTotais(itens) {
        return itens
        .map(item => item.preco)
        .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}
        
console.log(despesasTotais(arrayDeProtuos))

