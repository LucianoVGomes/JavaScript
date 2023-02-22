/* console.log(typeof Object)

class Produto {}
console.log(typeof Produto)
*/

// Função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}
 imprimirSoma(2, 3)
 imprimirSoma(2)


function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log()