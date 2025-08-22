class Carro {
    constructor(modelo, ano, velocidade) {
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`${this.modelo} ${this.ano} acelerou! chegando a ${this.velocidade} KM/H`);
    }

    frear() {
        this.velocidade -= 5;
        console.log(`${this.modelo} ${this.ano} freou! voltando a ${this.velocidade} KM/H`);
    }
}

module.exports = Carro;