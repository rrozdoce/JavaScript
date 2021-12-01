function conta(numero) {
    numero = `R$ ${numero.toFixed(2).toString().replace(".",",")}`
    console.log(numero);
}
conta(0.1 + 0.2);