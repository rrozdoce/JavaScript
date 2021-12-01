function verMes(mes){
   if(mes == 1){
       return 'Janeiro'
   }else if(mes == 2){
       return 'Feverreiro'
   }else if(mes == 3){
       return 'Março'
   }else if(mes == 4){
       return 'Abril'
   }else if(mes == 5){
       return 'Maio'
   }else if(mes == 6){
       return 'Junho'
   }else if(mes == 7){
       return 'Julho'
   }else if(mes == 8){
       return 'Agosto'
   }else if(mes == 9){
       return 'Setembro'
   }else if(mes == 10){
       return 'Outubro'
   }else if(mes == 11){
       return 'Novembro'
   }else if(mes == 12){
       return 'Dezembro'
   }else {
       return 'Mes invalido!'
   }
}

const calcularMes = mes => verMes(mes)

console.log(calcularMes(2))
console.log(calcularMes(12))
console.log(calcularMes(6))
console.log(calcularMes(-1))
console.log(calcularMes(13))