function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}hrs`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde.
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Boa Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}

