function aumento(plano,salario) {
    switch(plano){
        case 'A':
         return salario + (salario * 0.10)
        break
        case 'B':
         return salario + (salario * 0.15)
        break
        case 'C':
            return salario + (salario * 0.20)
        break
        default:
         return 'plano invalido'
        break
    }
}

console.log(aumento('A',2000))
console.log(aumento('B',2000))
console.log(aumento('C',2000))
console.log(aumento('D',2000))