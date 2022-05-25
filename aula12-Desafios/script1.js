function carregar()
        var agora = new Date()
        var hora = agora.getHours()
        var minutos = agora.getMinutes()
        var info = document.querySelector('div#msg')
        var saudacao = document.querySelector('div#saudacao')
        info.innerHTML = (`Agora são ${hora} horas e ${minutos} minutos.`)
        if (hora >= 6 && hora <= 11 && minutos <= 59) {

        }