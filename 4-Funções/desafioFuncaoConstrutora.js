function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar();

/*
O operador 'new' cria uma instancia de um tipo de objeto definido pelo usuário ou de um dos tipos nativos (built-in) que possuem uma função construtora.
*/
