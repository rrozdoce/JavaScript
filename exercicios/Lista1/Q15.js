function revendaCarro(carro) {
    switch(carro){
        case 'hatch':
           console.log('Compra efetuada com sucesso')
         break
        case 'sedan':
        case 'motocicletas':
        case 'caminhonetes':
           console.log('Tem certeza que não prefere este modelo?')
         break
        default:
           console.log('Não trabalhamos com este tipo de automóvel aqui')
         break
    }
}

revendaCarro('hatch')
revendaCarro('sedan')
revendaCarro('motocicletas')
revendaCarro('caminhonetes')
revendaCarro('corola')