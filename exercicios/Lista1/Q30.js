function maiorEmenor(numeros = []) {
    let maior
    let menor
      for(let i = 1; i <= numeros.length; i++){
        
      if(maior === undefined && menor === undefined){
         maior = numeros[i]
         menor = numeros[i]       
      }else {
          if(numeros[i] >= maior){
              maior = numeros[i]
          }
          if(numeros[i] < menor){
              menor = numeros[i]
          }
      }
    }
    return [maior, menor]
}

console.log(maiorEmenor([1, 2, 5, 9]))