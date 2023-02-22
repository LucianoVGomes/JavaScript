const saudacao = 'Opa' // contexto léxico

function exec() {
    const saudacao = 'Falaa' // Contexto Léxico
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'vini',
    idade: 22,
    peso: 90,
    endereço: {
        Logradouro: 'Rua São Gonçalo',
        numero: 183
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)