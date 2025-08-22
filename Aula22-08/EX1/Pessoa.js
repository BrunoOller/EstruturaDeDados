class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Permite que essa classe seja usada em outros arquivos.
module.exports = Pessoa;