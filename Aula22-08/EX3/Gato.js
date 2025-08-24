const Animal = require("./Animal");

class Gato extends Animal {
    falar() {
        console.log("Miau miau");
    }
}

module.exports = Gato;