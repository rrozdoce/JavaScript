/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function calculoCrescimento(altura = [], taxa = []){

    if(altura[0] == altura[1]){
      if(taxa[0] > taxa[1]){
          return 'A criança 1 ultrapassará a Criança 2 em 1 ano'
      }else if(taxa[0] < taxa[1]){
          return 'A criança 2 ultrapassará a Criança 1 em 1 ano' 
      }else{
          return 'Ambas tem a mesma altura e taxa de crescimento'
      }
    }else{
     if(altura[0] > altura[1]){
         if(taxa[0] >= taxa[1]){
             return 'A criança menor nao vai passar a maior'
         }else{
             return `A criança menor irá passar a maior em ${tempo(altura,taxa)} anos`
         }
     }else{
         if(taxa[1] >= taxa[0]){
             return 'A crianca menor nao irá passar a maior'
         }else{
             return `A criança menor irá passar a maior em ${tempo(altura,taxa)} anos`
        }
     }
   }
}

function tempo(altura = [],taxa = []) {
    let anos = 0
    
    while(altura[0] < altura[1]){
        altura[0] += taxa[0]
        altura[1] += taxa[1]
        anos++
    }

   return anos
}

console.log(calculoCrescimento([170,130],[2, 4]));
console.log(calculoCrescimento([160,190],[6, 2]));