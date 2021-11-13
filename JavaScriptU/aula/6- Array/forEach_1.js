// forEach Simplesmente percorre o array, o resto é por conta sua!

const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice){ // o proprio array é passado como terceiro parametro
    console.log(`${indice + 1}) ${nome}`) // existe só 3 parametros
}) 

console.log("----------------------")

aprovados.forEach(nome => console.log(nome))

console.log("----------------------")

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
