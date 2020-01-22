
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<h1>A hora atual é ${hora} horas e ${minuto} minutos.</h1>`

    if (hora >= 6 && hora < 12) {
        
        img.src = '../site1/fotos/fotomanha.png'
        img.alt = 'Foto de uma xícara com plano de fundo do dia'
        document.body.style.background = '#e2cd9f'

    } else if(hora >= 12 && hora < 18) {
        
        img.src = '../site1/fotos/fototarde.png'
        img.alt = 'foto do pôr do sol'

        document.body.style.background = '#b8846f'

    } else {

        img.src = '../site1/fotos/fotonoite.png'
        img.alt = 'Foto de um ceu estrelado '

        document.body.style.background = '#515154'

    }
}