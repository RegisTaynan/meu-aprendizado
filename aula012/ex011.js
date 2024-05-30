var idade = 36
console.log(`vc tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota.')
} else if (idade < 18) {
        console.log('voto opcional.')
} else if (idade < 67) {
        console.log('o seu voto é obrigatorio.')
} else{
        console.log('seu voto é opcional')
}