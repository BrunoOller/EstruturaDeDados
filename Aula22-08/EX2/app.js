const Carro = require("./Carro");

const carro1 = new Carro("Mustang", 2020, 110);
const carro2 = new Carro("Camaro", 2023, 105);

carro1.acelerar();
carro2.acelerar();
carro1.acelerar();
carro2.acelerar();
carro1.frear();
carro2.frear();