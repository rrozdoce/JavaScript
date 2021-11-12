// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'} // o avó tem como protótipo o Object.prototype
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0) 
/* senao achar em filho, ele procura em pai, senão, em avó,
 senao em Object.prototype, senão, retorna undefined */

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
/*
no caso de filho.attr3, attr3 ja tem em filho, assim, acontece
o efeito de sombreamento e assim retorna o valor q esta em filho 
*/


// exemplo mais complexo:
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) {
          this.velAtual += delta   
        } else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo = 'F40',
    velMax: 324, // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())