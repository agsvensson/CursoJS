function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res') // ou var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) { // se o ano for 0 ou maior do que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {      // se este botão estiver marcado...
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'mulher.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'idosa.png')
            }
        } else if (fsex[1].checked) {   // se este botão estiver marcado...
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'homem.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // adiciona um elemento depois da frase acima.
    }

}