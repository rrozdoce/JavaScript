 /*
'Object.preventExtensions' --> previne que seu objeto seja extendido,
ou seja, nao sera capaz de adicionar mais atributos
*/

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = 'Borracha' 
// no caso, essa funcao previne de adicionar mais coisas, porém nao de modificar
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
// 'sela' o Objeto, nao consegue adiconar mais atributos nem excluir, porém pode modificar os atributos
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valor constantes
