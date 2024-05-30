var Agora =new Date()
var hora = Agora.getHours()
console.log(`Agora são exatamente ${hora}hrs.`)
if (hora > 6) {
    console.log('Bom dia!')
} if (hora > 12) {
    console.log('Boa tarde!')
} if (hora > 18 && hora < 23) {
    console.log('Boa noite')
} if (hora >= 0 && hora < 6) {
    console.log('boa madrugrada')
}