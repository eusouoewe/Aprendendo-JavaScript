var numero = document.getElementById('number')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
let valores = []

function isNumber(n) {
        if (Number(n) >= 1 && Number(n) <= 100){
                return true
        } else {
                return false
        }
}

function inLista(n, l) {
        if(l.indexOf(Number(n)) != -1) {
                return true
        } else {
                return false
        }
}

function adicionar() {
        if(isNumber(numero.value) &&  !inLista(numero.value, valores)) {
                valores.push(Number(numero.value))
                let item = document.createElement('option')
                item.text = `Valor ${numero.value} adicionado.`
                lista.appendChild(item)
                res.innerHTML = ''
        } else {
                window.alert('Este número já foi adicionado ou é inválido.')
        }
        numero.value = ''
        numero.focus()
}

function calcular() {
        if (valores.length == 0) {
                window.alert('Insira dados antes de finalizar!')
        } else {
                let total = valores.length
                let maior = valores[0]
                let menor = valores [0]
                let soma = 0
                let media = 0
                for (let pos in valores) {
                        soma += valores[pos]
                        media += valores[pos] / valores.length
                        if (valores[pos] > maior) {
                                maior = valores[pos]
                        }
                        if (valores[pos] < menor) {
                                menor = valores[pos]
                        }
                }
                res.innerHTML = ''
                res.innerHTML += `<p>Ao todo temos ${total} valores cadastrados.</p>`
                res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
                res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
                res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
                res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`
        }
}