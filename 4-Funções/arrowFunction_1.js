let dobro = function (a) {
     return 2 * a
}

//arrow function
dobro = (a) => {
  return 2 * a
}

//retorno implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

//arrow
ola = () => 'Olá'
ola = _ => 'Olá' //outro jeito com um unico parametro
console.log(ola())

