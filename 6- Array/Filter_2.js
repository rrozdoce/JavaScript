Array.prototype.filter2 = function(callback) { // como funciona o Filter
  const newArray = []
   for (let i = 0; i < this.length; i++){
      if(callback(this[i], i, this)) {
          newArray.push(this[i])
      }  
   }  
   return newArray
}

const produtos = [ // array com Objetos
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))