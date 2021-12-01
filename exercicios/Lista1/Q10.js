function verificarNumeroInteiro(numero) {
    if(numero % 3 === 0){
        return true
    }else{
        return false
    }
}

console.log(verificarNumeroInteiro(5))
console.log(verificarNumeroInteiro(3))