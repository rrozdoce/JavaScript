function triangulo(a, b, c) {
    if(a == b && b == c){
        return 'Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }

}

console.log(triangulo(1,2,3));
console.log(triangulo(1,1,3));
console.log(triangulo(1,1,1));