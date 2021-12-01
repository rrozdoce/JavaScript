function contarCaractere(caractereBuscado, frase) {
  let contador = 0
    for (let i = 0; i < frase.length; i++)
      if (frase.charAt(i) === caractereBuscado)
        contador++
         return contador
    }


    function analise(letra, frase) {
        let arrayFrase = frase.split('').reduce((cont = 0, e) => {
            if(e === letra){
                return cont++
            }
        })

        return arrayFrase

    }

    console.log(analise('a','amar amor'))