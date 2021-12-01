/*) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function imparesEntreValores(valor1, valor2) {
   if(valor1 < valor2){
     for(let i = valor1; i <= valor2; i++){
       if(i % 2 != 0){
           console.log(`${i} é impar`)
       }
     }

   }else{
     for(let i = valor1; i >= valor2; i--){
        if(i % 2 != 0){
          console.log(`${i} é impar`)
        }
     }
   }
    
}

console.log(imparesEntreValores(20, 30))
console.log(imparesEntreValores(30, 20))