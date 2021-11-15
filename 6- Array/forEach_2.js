// forEach Simplesmente percorre o array, o resto é por conta sua!

Array.prototype.forEach2 = function(callback) { // criando forEach a partir de um Array function prototype/protótipo
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this)  
  }
}
    

const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome, indice){ 
    console.log(`${indice + 1}) ${nome}`) 
}) 