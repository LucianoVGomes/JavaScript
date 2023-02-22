function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('NoteBook', 2199.79))
console.log(criarProduto('iPad', 1199.99))