// While é usado quando voce nao tem ideia do numero de elementos 

 function getInteiro(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
 }

 let opcao = 0

 while(opcao != -1){
    opcao = getInteiro(-1,10)
    console.log(`Opcao escolhida foi: ${opcao}.`)

 }

 console.log('Até a proxima!')