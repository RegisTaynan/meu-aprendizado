function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] dados incompletos!')
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido!, Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // contagem crescente
            for(let c = i;c < f;c += p) {
                res.innerHTML += `${c}👉`
            }
            res.innerHTML += `🏁`
        } else {
            // contagem regressiva
            for(let x = i;x > f;x -= p) {
                res.innerHTML += `${x}👉`
            }
            res.innerHTML += `🏁`
        }
         
    }
}