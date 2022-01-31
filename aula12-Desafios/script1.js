function carregar() {
        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')
        var saudacao = document.getElementById('saudacao')
        var data = new Date()
        var hora = data.getHours()
        var minutos = data.getMinutes()
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
        if (hora >= 6 && hora <= 11) {
                //BOM DIA
                img.src = 'manha.jpg'
                document.body.style.background = '#b4a143'
                saudacao.innerHTML = 'Bom dia!'
        }
        else if (hora >= 12 && hora <= 17) {
                //BOA TARDE
                img.src = 'tarde.jpg'
                document.body.style.background = '#954f11'
                saudacao.innerHTML = 'Boa tarde!'
        }
        else {
                //BOA NOITE
                img.src = 'noite.jpg'
                document.body.style.background = '#141d2c'
                saudacao.innerHTML = 'Boa noite!'
        }
}