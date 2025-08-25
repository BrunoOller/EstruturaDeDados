const { Funcionario, Gerente, Desenvolvedor } = require("./Funcionario");

const funcionario = new Funcionario("Gustavo", 1200);
const gerente = new Gerente("Geraldo", 2700);
const dev = new Desenvolvedor("Joao", 2000);

funcionario.calcularBonus();
gerente.calcularBonus();
dev.calcularBonus();