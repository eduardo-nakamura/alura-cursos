// funcao tocar som
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    console.log(elemento)
    elemento ? elemento.play() : alert('Not Found')
    
}

// Guardar Botoes
const listaTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaTeclas.length; contador++){
    const tecla = listaTeclas[contador]
    const intrumento = tecla.classList[1]
    const idAudio = `#som_${intrumento}`    
    
    tecla.onclick = function() {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
          tecla.classList.add('ativa');
        }
    }
     
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
