function criaProduto(paramNome, paramPreco){ 
    return { nome: paramNome,
             preco: paramPreco,
             calculaDesconto: function(){ 
                 //10% de desconto
                 return this.preco * 0.1;
                } 
            }; 
} 
var produto1 = criaProduto("Blusa", 120);
var produto2 = criaProduto("Calça", 300); 
produto1.calculaDesconto(); //12 
produto2.calculaDesconto(); //30


function Carro(VelocidadeMaxima = 200, delta = 5) {
    // atributo privada
    let VelocidadeAtual = 0;
    // metodo publico
    this.acelerar = function () {
        if ( VelocidadeAtual + delta <= VelocidadeMaxima){
            VelocidadeAtual +=delta;
        }else {
            VelocidadeAtual = VelocidadeMaxima;
        }
    }  
    
    // metodo publico
    this.getVelocidadeAtual = function () {
        return VelocidadeAtual;
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual);

const ferrari = new Carro(350, 20);