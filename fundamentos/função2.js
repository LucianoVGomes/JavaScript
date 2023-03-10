// Armazenando uma funçao dentro de uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Função Arrow

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a- b
console.log(subtracao(2, 3))