function calcularMaior(num1, num2){
    if(typeof num1 == 'string' || typeof num2 == 'string'){
        return false
    }else if(num1 >= num2){
        return true
    }
    else{
        return false
    }
}


const Maior = (num1, num2) => calcularMaior(num1, num2)

console.log(Maior(2,1))
console.log(Maior(0,0))
console.log(Maior(0,2))
console.log(Maior(0,"0"))