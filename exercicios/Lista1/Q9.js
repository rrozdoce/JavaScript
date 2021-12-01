function Escola(nota) {
    let notaCorrigida = arredondar(nota);
    if(notaCorrigida >= 40){
      console.log(`Voce foi aprovado, nota: ${notaCorrigida}`)
    }else{
      console.log(`Voce foi reprovado, nota: ${notaCorrigida}`)
    }
     
}

function arredondar(nota) {
    if(nota % 5 > 2){
        return  nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

Escola(85);
Escola(29);