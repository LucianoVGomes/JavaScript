// Função em JS é first-class object (Citizens)
// Higher-order function

// Criar de forma literal

function fun1 () {}

// Armezenar em uma variavel
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

//Passa função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})