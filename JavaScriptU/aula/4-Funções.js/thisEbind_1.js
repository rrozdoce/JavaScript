const pessoa = {
    saudacao: 'Bom dia',
    falar(){
      console.log(this.saudacao) // sem o this, vai dar erro pq o codigo nao chama pra onde voce ta apontando
    }
}

pessoa.falar()
const falar  = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // .bind() = passa um objeto no qual voce quer q seja resolvido o this
falarDePessoa()