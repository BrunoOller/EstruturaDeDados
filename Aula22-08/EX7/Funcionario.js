class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus() {
        this.salario *= 0.2;
        console.log(`O Funcionário ${this.nome} recebeu um bônus de R$${this.salario}`);
    }
}

class Gerente extends Funcionario {
    calcularBonus() {
        this.salario *= 0.4;
        console.log(`O Gerente ${this.nome} recebeu um bônus de R$${this.salario}`);
    }
}

class Desenvolvedor extends Funcionario {
    calcularBonus() {
        this.salario *= 0.3;
        console.log(`O Desenvolvedor ${this.nome} recebeu um bônus de R$${this.salario}`);
    }
}

module.exports = { Funcionario, Gerente, Desenvolvedor };