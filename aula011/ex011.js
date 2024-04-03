var idade = 98
console.log(`vc tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade >= 16) {
        console.log('voto opcional')
} else if (idade => 19 || idade <70) {
        console.log('o seu voto é obrigatorio.')
}