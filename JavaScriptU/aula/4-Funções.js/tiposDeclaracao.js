// function declaration
/* tem acesso antes msm da linha ter sido declarada,
pq o sistema le esse tipo de funcao antes da execução do codigo*/

function soma(x, y){
    return x + y;
}
// function expression

const sub = function(x, y){
    return x - y;
}

// named function expression

const mult = function mult(x, y){
    return x * y;
}

console.log(soma(2,3))
console.log(sub(2,3))
console.log(mult(2,3))