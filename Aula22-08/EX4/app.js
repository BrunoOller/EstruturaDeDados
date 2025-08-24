const ContaBancaria = require("./ContaBancaria");

const meuSaldo = new ContaBancaria;

meuSaldo.depositar(100);
meuSaldo.depositar(150);
meuSaldo.sacar(50);
console.log("Seu saldo: R$", meuSaldo.verSaldo());