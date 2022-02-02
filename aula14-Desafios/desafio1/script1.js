function contar() {
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var res = document.getElementById("res");
    //se algum valor não for inserido mostrará erro
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando passo 1")
            p = 1
        }
        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` \u{1F449}${c}`
            }
        }
        else { // contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{1F449}${c}`
            }
        }
        res.innerHTML += `\u{1F6A9}`
    }
}