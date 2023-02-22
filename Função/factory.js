/*const prod1 = {
    nome: '...'
    preco: 45
}

const prod2 = {
    nome: '...'
    preco: 4556
}*/

//factory simples

function criarPessoa() {
    return {
        nome: 'ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())