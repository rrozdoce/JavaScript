function Area(base, altura) {
    let area = base * altura /2 
    return area.toFixed(2).replace('.',',')
}

console.log(Area(10, 2))
console.log(Area(9.25, 13.1))