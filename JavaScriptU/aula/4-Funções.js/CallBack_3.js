//Exemplo de callback no browser
//toda vez q clicar na pagina/body a funcao ira disparar 'o evento ocorreu'.
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
}