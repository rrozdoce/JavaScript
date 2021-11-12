const sequencia = {
    _valor: 1,
    get valor() {return this._valor++},
    set valor(valor) {
      if(valor > this.valor){
          this._valor = valor
      }
    } 
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // nao ira atribuir pq 900 é menor q o anterior, ou seja, 1000
console.log(sequencia.valor, sequencia.valor)