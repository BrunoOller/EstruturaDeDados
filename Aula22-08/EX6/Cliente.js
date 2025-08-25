class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    mostrarDados() {
        console.log(`Olá, meu nome é ${this.nome} e moro na ${this.endereco.rua}, no bairro ${this.endereco.bairro}`);
    }
}

module.exports = Cliente;