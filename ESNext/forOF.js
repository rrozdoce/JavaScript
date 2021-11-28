// enquanto For in intera em cima de indice
// For of intera em cima de valores
// pode usar para interar em cima de Map(), Set(), Array, string, Objeto

const { captureRejectionSymbol } = require("events")

for( let letra of 'Cod3er'){
    console.log(letra) // valores
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma){
    console.log(i) // indice
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', {abordado: false}]
])

for ( let assunto of assuntosMap){
    console.log(assunto)
}

for ( let chave of assuntosMap.keys()){
   console.log(chave) 
}

for ( let valor of assuntosMap.values()){
    console.log(valor) // 
}

// destructuring
for ( let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

// tambem funciona com set
const s = new Set(['a', 'b', 'c'])
for (let letra of s){
    console.log(letra)
}