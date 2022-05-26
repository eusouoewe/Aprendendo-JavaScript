function carregar() {
        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        var minuto = data.getMinutes()
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
        if (hora >= 6 && hora < 12 && minuto <=59) {
                img.src = 'manha.jpg'
                saudacao.innerHTML = ('Bom dia!')
        }
        else if (hora >= 12 && hora < 18 && minuto <= 59) {
                img.src = 'tarde.jpg'
                saudacao.innerHTML = ('Boa tarde!')
        }
        else {
                img.src = 'noite.jpg'
                saudacao.innerHTML = ('Boa noite!')
        }
}