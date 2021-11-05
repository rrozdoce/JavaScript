/*
 Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/


function sacarDinheiro(valorNota) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorDaNota = calcularNota(valorNota);

    while(valorNota >= valorDaNota){
        switch (valorDaNota){
            case 100:
              valorNota -= 100
              nota100++
             break
            case 50:
              valorNota -= 50
              nota50++
             break
            case 10:
              valorNota -= 10
              nota10++
             break
            case 5:
              valorNota -= 5
              nota5++
             break
            case 1:
              valorNota -= 1
              nota1++
             break
        }

        valorDaNota = calcularNota(valorNota)
    }

    return resultado(nota100,nota50,nota10,nota5,nota1)

}

function calcularNota(saque) {
    if(saque >= 100){
        return 100
    }else if(saque >= 50){
        return 50
    }else if(saque >= 10){
        return 10
    }else if(saque >= 5){
        return 5
    }else if(saque >= 1){
        return 1
    }
}

function resultado(nota100,nota50,nota10,nota5,nota1) {
    let resultadoU = ''
    if(nota100 > 0){
        resultadoU += `${nota100} nota(s) de R$ 100. `
    }
    if(nota50 > 0){
        resultadoU += `${nota50} nota(s) de R$ 50. `
    }
    if(nota10 > 0){
        resultadoU += `${nota10} nota(s) de R$ 10. `
    }
    if(nota5 > 0){
        resultadoU += `${nota5} nota(s) de R$ 5. `
    }
    if(nota1 > 0){
        resultadoU += `${nota1} nota(s) de R$ 1. `
    }

    return resultadoU
}

console.log(sacarDinheiro(150))