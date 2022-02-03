function fatorial(n) {
        let fat = 1 //definindo que ele começará com 1 caso nada seja inserido
        for (let c = n; c > 1; c--) { 
                fat *= c //será multiplicado por ele mesmo -1
        }
        return fat
}

console.log(fatorial(5))