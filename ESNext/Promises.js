// Promesas
// voce usa promise quando voce quer ter algum tipo
// de processamento assincrono
// a promessa foi cumprida ou a promessa foi rejeitada
// caso o arquivo seja obetido de forma bem sucedida, a callback é chamada
// caso contrario, por algum tipo de erro, a callback de erro é chamada

const { resolve } = require("path/posix");

function falarDepoisDe(segundos, frase) {
    return new Promise ((resolve, reject) => {     
        //resolve será chamado quando a promessa for atendida
        // reject rejeita o atendimento da promessa

        setTimeout(() => {
            resolve (frase) // promise aceita somente um unico parametro
        }, segundos * 1000);

    })
}

// encadiamento de funções
falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))// then é chamada quando voce resolve a promise  
  .catch(e => console.log(e)) //tratar o erro, caso seja reject
