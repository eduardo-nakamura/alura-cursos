function openMenu() {
    document.getElementById("container-nav").classList.add('ativa'); 
}

document.getElementById('container-nav').onclick = function(e) {    
    if(e.target != document.getElementById('list-nav')) {    
        document.getElementById("container-nav").classList.remove('ativa');       
    } 
}