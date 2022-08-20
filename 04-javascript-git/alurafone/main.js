
const listaTeclas = document.querySelectorAll('input[type="button"]');
let number = ''
for (let contador = 0; contador < listaTeclas.length; contador++) {
  const tecla = listaTeclas[contador]
  tecla.onclick = function () {
    number += tecla.value
    document.querySelector('.screen').value = number;    
  }

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add('ativa');
    }
  }


  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
