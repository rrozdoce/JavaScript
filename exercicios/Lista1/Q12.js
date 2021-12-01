function fatorial(num) {
     if(num < 0){
         return 1
     }else{
       return num * (num - 1)
     }

}

console.log(fatorial(-1))
console.log(fatorial(10))
console.log(fatorial(3))