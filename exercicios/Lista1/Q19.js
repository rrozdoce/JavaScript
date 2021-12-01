function mercado(codigo) {
    switch(codigo){
        case 100:
          console.log('Cachorro-Quente\n','Preço:','R$3,00')
         break
        case 200:
         console.log('Hambúrguer Simples\n','Preço:','R$4,00');
         break
        case 300:
         console.log('Cheeseburguer\n','Preço:','R$5,50');
         break
        case 400:
         console.log('Bauru\n','Preço:','R$7,50');
         break
        case 500:
         console.log('Refrigerante \n','Preço:','R$3,50');
         break
        case 600:
         console.log('Suco\n','Preço:','R$2,80');
         break
        default:
         console.log('produto não existente')
        break
    }
}

mercado(100)
mercado(200)
mercado(300)
mercado(400)
mercado(500)
mercado(600)