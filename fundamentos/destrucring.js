// desestruturar 

const pessoa = {
    nome: 'vini',
    idade: 22,
    peso: 90,
    endereço: {
        Logradouro: 'Rua São Gonçalo',
        numero: 183
    }
}
const {nome, idade } = pessoa 
console.log(nome, idade)

const {nome: n, idade: i} = pessoa 
console.log(n, i)