let num = document.querySelector('#txtn')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []
function Adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor inválido ou já encontrado na lista')
    }
}
function isNumero(n){
    if(Number(n) >= 1  && Number(n) <= 100){
        return true;
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    }else {
        return false;
    }
}
function Finalizar() {
    if(valores.length == 0) {
        alert('Adiciona Valores antes de Terminar')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
        for(let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ``
        res.innerHTML += `Ao todo, ${total} números cadastrados.`
        res.innerHTML += `<br>O maior valor informado ${maior}.`
        res.innerHTML += `<br>O menor valor infomado ${menor}.`
        res.innerHTML += `<br>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<br>A média dos valores digitados foi ${media}.`
    }
}