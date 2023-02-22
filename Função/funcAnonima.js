const soma = function (x, y) {
    return x + y 
}

const imprirmirResultado = function ( a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprirmirResultado(3, 4)
imprirmirResultado(3, 4, soma)
imprirmirResultado(3, 4, function(x, y){
    return x - y
})
imprirmirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('opa')
    }
}

pessoa.falar()