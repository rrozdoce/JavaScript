let contador = 1

while(contador <= 10) {
  console.log(`contador = ${contador}`)
  contador++
}

console.log('__________________\n') 

for(let i = 1; i <= 10; i++){
   console.log(`contador = ${i}`)
}

console.log('__________________\n')

const notas = [6.7,7.4,9.8,8.1,7.7]

for(let i = 0; i < notas.length; i++){ // length vai contar quantos vetores tem 
  console.log(`nota = ${notas[i]}`)
}