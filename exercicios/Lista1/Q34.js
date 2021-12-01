/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/
function string(string1, string2) {
    let contido = true;
    for(let i = 0; i < string1.lenght; i++){
        let letrasString1 = string1.charAt(i).toLowerCase()
     for(let i = 0; i < string2.lenght; i++){
         let letrasString2 = string1.charAt(i).toLowerCase()
         if(letrasString1 == letrasString2){
             contido = true
             break
         }else{
             contido = false
         }
     }
     if(!contido){
         return contido
     }
    }
    return contido
}

console.log(string('ABC','CBA'))
console.log(string('ABC','IJF'))