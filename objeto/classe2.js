class avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
        
    }
}
class pai extends avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}
class Filho extends pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho 
console.log(filho)