function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fAno = document.getElementById('ano')
        var res = document.getElementById('res')
        if (fAno.value.length == 0 || Number(fAno.value) > ano ) {
                window.alert('[ERRO] Verifique os dados e tente novamente.')
        }
        else {
        var fSex = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade == 3) {
                        //bebe
                        img.setAttribute('src', 'bebe-menino.jpeg')
                }
                else if (idade >= 4 && idade <= 10) {
                        //menino
                        img.setAttribute('src', 'menino-pequeno.jpg')
                }
                else if (idade >= 11 && idade <= 20) {
                        //garoto
                        img.setAttribute('src', 'garoto.jpeg')
                }
                else if (idade >= 21 && idade <= 50) {
                        //adulto
                        img.setAttribute('src', 'homem.jpeg')
                }
                else {
                        //idoso
                        img.setAttribute('src', 'idoso.jpeg')
                }
        }
        else if (fSex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade <= 3) {
                        //bebe
                        img.setAttribute('src', 'bebe-menina.jpeg')
                }
                else if (idade >= 4 && idade <= 10) {
                        //menina
                        img.setAttribute('src', 'menina-pequena.jpg')
                }
                else if (idade >= 11 && idade <= 20) {
                        //garota
                        img.setAttribute('src', 'garota.jpeg')
                }
                else if (idade >= 21 && idade <= 50) {
                        //adulta
                        img.setAttribute('src', 'mulher.jpeg')
                }
                else {
                        //idosa
                        img.setAttribute('src', 'idosa.jpeg')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        }
}