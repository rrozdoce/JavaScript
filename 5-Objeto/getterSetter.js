/*
O getter, com a sintaxe get é associado a uma função que será chamada quando a propriedade em questão
for acessada e solicitada de forma dinâmica. 
É possível utilizá-la para retornar o status de uma variável interna, sem utilizar métodos de forma 
explícita. Da seguinte forma:
*/
/*
Geralmente usados junto com os getters, os setters são utilizados para definirem valores para
uma propriedade específica.
*/





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