let valores = [8, 1, 7, 4, 2, 9]
valores.push(6)
valores.sort();
console.log(valores)
console.log(` o vetor tem ${valores.length} posições`)
console.log(`O primeiro valor no vetor é ${valores[0]}`)
let pos = valores.indexOf(7) //conferindo se há e buscando em que posição está um elemento
console.log(`O valor 7 está na posição ${pos}`)
let pos = valores.indexOf (5) //se não houver ele retorna o valor "-1"
console.log(`O valor 5 está na posição ${pos}`)
