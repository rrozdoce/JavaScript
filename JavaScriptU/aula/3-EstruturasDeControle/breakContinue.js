const nums = [1, 2, 3, 4, 5, 6 ,7 , 8, 9, 10]

for( let x in nums){
    if(x == 5){
     break // interrompe o laço e sai para a proxima sentença de codigo fora do laço corrente
    }
    console.log(`${x} =${nums[x]}`)
}

console.log('_______________\n')

for( let y in nums){
    if( y == 5){
     continue // interrompe a repetição atual e vai direto para a proxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('_______________\n')

externo: //rotulo
for (let a in nums){
   for( b in nums){
       if(a == 2 && b == 3){
           break externo // com rotulo voce consegue dar um break no laço mais externo
       }
       console.log(`Par = ${a},${b}`)
   }
}

console.log('Fim!')