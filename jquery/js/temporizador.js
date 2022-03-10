(function($) {
    $.fn.temporizador = function (opcoes) {
      const opcoesFinais = $.extend({
          mensagem: 'Em Breve!',
          horario: '23:59:59'
      }, opcoes)

      const horaDezena = $('<span class:"Digito">').html('0')
      const horaUnidade = $('<span class:"Digito">').html('0')
      const minutoDezena = $('<span class:"Digito">').html('0')
      const minutoUnidade = $('<span class:"Digito">').html('0')
      const segundoDezena = $('<span class:"Digito">').html('0')
      const segundoUnidade = $('<span class:"Digito">').html('0')

      const separadorHora = $('<span class:"separador">').html(':')
      const separadorMinuto = $('<span class:"separador">').html(':')
      const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
      
      $(this).addClass('temporizador')
      $(this).append(horaDezena, horaUnidade, separadorHora,
        minutoDezena, minutoUnidade, separadorMinuto,
        segundoDezena, segundoUnidade, mensagem
        )

        return this
    }
})(jQuery)