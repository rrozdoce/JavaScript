function Sorteio(numero) {
  let sorteio = Math.floor(Math.random() * (10 - 1)) + 1

  if(numero === sorteio) {
      return `Parabens, numero sorteado ${sorteio}`
  } else{
      return `Que pena, o numero sorteado foi ${sorteio}`
  }
}

console.log(Sorteio(1))
console.log(Sorteio(2))
console.log(Sorteio(3))
console.log(Sorteio(4))
console.log(Sorteio(5))
console.log(Sorteio(6))
console.log(Sorteio(7))
console.log(Sorteio(8))
console.log(Sorteio(9))
console.log(Sorteio(10))