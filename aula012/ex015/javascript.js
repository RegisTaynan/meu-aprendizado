function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Data Inválida.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos.`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem.'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homemcriança.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            }
        
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulhercriança.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulta
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}