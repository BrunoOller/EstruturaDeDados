class Carro {
    velocidade = 0;

    acelerar() {
        this.velocidade += 50;
        console.log(`O carro acelerou! Velocidade atual: ${this.velocidade}`);
    }

    frear() {
        this.velocidade -= 10;
        console.log(`O carro freou! Velocidade atual: ${this.velocidade}`);
    }
}

class Moto {
    velocidade = 0;

    acelerarMoto() {
        this.velocidade += 50;
        console.log(`A moto acelerou! Velocidade atual: ${this.velocidade}`);
    }

    frearMoto() {
        this.velocidade -= 10;
        console.log(`A moto freou! Velocidade atual: ${this.velocidade}`);
    }

    empinar() {
        console.log("A moto empinou! Maneiro!");
    }
}

module.exports = { Carro, Moto };