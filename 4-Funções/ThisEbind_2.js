function pessoa() {
    this.idade = 0
 
   
    const self = this
    setInterval(function(){ // setInterval : dispara uma outra funcao a partir de um determinado intervalo que voce passou
      self.idade++
      console.log(self.idade)
    }/*.bind(this)*/,1000) //bind vai amarrar
}

new pessoa