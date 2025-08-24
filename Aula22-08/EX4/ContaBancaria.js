class ContaBancaria {
    #saldo = 0;
    
    depositar(valor) {
        this.#saldo += valor;
        console.log(`Foi depositado mais R$ ${valor}`);
    }
    
    sacar(valor) {
        this.#saldo -= valor;
        console.log(`Foi sacado R$ ${valor}`);
    }
    
    verSaldo() {
        return this.#saldo;
    }
}

module.exports = ContaBancaria;