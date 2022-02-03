function parimpar (n) {
        if (n % 2 == 0) {
                return 'par' // se a divisão do numero inteiro por 2 for zero, o número é par
        }
        else {
                return 'impar' // se não, é ímpar
        }
}

console.log(parimpar(51)) //escrevendo se é par ou ímpar chamando a função e definindo o número que será testado