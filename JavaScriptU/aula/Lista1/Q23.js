function aluno(codigo = 12313131,nota = [1, 2, 3]) {
  let maior = 0
  let soma = 0
  let media = 0
  for(let i = 1; i < 3; i++){
      if(nota[i] > maior){
          maior = nota[i] * 4
      }
      if(nota[i] < maior){
          soma+= nota[i] * 3
      }
    
  }
  
  media = maior + soma / 3

 if(media >= 5){
    console.log(`${codigo}`)
     console.log('Aprovado')
 }
 if(media < 5){
     console.log(`${codigo}`)
     console.log('Reprovado')
 }


}

aluno()