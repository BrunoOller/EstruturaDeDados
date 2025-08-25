const Endereco = require("./Endereco");
const Cliente = require("./Cliente");

const endereco = new Endereco("Rua Antônio Pizzo", "Habitacional");
const cliente = new Cliente("Bruno", endereco);

cliente.mostrarDados();