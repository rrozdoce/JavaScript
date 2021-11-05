
function baskara(a, b, c) {
    let valor = [1]
    let conta  = (b * b) - (4 * a * c);
    if(conta < 0){
      console.log("Delta menor que zero");
    }
    else if(conta > 0){
        valor[0] = (-b + conta)/2 * a;
        valor[1] = (-b - conta)/ 2 * a;
        for(let i = 0; i <= 2; i++){
            console.log(valor[i]);
        }
    }
    else if(conta == 0){
        valor[0] = -b/2*a;
        console.log(valor);
    }else{
        console.log("Valor invalido!");
    }
}

baskara(1, 3, 2);
baskara(3, 1, 2);