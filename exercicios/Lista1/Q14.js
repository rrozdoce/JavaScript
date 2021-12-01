let fruta1 = 'Maçã'
let fruta2 = 'Kiwi'
let fruta3 = 'Melancia'
let fruta4 = 'arroz'

function analiseFruta(fruta) {
    switch(fruta){
        case 'Maçã':
          console.log('Não vendemos esta fruta aqui.')
         break
        case 'Kiwi':
          console.log("Estamos com escassez de kiwis.")
         break
        case 'Melancia':
            console.log("Aqui está, são 3 reais o quilo.")
         break

        default:
          console.log(Error)
        break
    }
}

analiseFruta(fruta1)
analiseFruta(fruta2)
analiseFruta(fruta3)
analiseFruta(fruta4)