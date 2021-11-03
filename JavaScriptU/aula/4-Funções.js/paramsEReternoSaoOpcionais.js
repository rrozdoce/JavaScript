function area(largura,altura) {
    const area = largura * altura
     if(area > 20){
         console.log(`Valor acima do permitido: ${area}m2`)
     } else {
         return area
     }
}

console.log(area(2,2))
console.log(area(2)) //undefined, assim retorna not a number
console.log(area())
console.log(area(2, 3, 17, 22, 44)) // só vai pegar os dois primeiros e ignorar o resto, nao da erro
console.log(area(5, 5))