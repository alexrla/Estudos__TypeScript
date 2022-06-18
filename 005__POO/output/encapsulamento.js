"use strict";
class Vehicle {
    color;
    constructor(color) {
        this.color = color;
    }
    openTheDoor() {
        return false;
    }
}
const car = new Vehicle("Branco");
console.log(car.color);
car.color = "Preto";
console.log(car.color);
console.log(car.openTheDoor());
class Residence {
    color;
    address;
    constructor(color, address) {
        this.color = color;
        this.address = address;
    }
    playIntercom() {
        return "Interfone tocado!";
    }
}
class House extends Residence {
    enterTheHouse() {
        return this.answerTheIntercom("Oi, quem é?");
    }
    answerTheIntercom(mensagem) {
        return mensagem;
    }
}
const myHouse = new House("Branco", { rua: "Rua dos Bobos", numero: 0 });
console.log(myHouse.playIntercom());
console.log(myHouse.enterTheHouse());
class Bank {
    bankSafeAmount = 10000;
    bankSafeDebit(amount) {
        if (amount <= this.bankSafeAmount) {
            this.bankSafeAmount -= amount;
        }
        else {
            return "O cofre não possui a quantidade de dinheiro necessária!";
        }
        return `Saque de ${amount} reais, realizado com sucesso!`;
    }
    cashOutBocaDoCaixa(amount) {
        return this.bankSafeDebit(amount);
    }
    cashOutCaixaEletronico(amount) {
        return this.bankSafeDebit(amount);
    }
}
const myBank = new Bank();
console.log(myBank.cashOutCaixaEletronico(100));
class Bank24Hour extends Bank {
    cashOut(amount) {
        return this.cashOutBocaDoCaixa(amount);
    }
}
const myBank24Hour = new Bank24Hour();
console.log(myBank24Hour.cashOut(100));
class Documents {
    value = "12365444789-01";
    #number = 35;
    showDocuments() {
        return this.#number;
    }
}
class CNPJ extends Documents {
    #number = 50;
    showCNPJ() {
        return this.#number;
    }
}
const rg = new Documents();
console.log(rg.showDocuments());
const cnpj = new CNPJ();
console.log(cnpj.showCNPJ());
class User {
    id = "123123abc234";
    name = "Joao";
    #password = "abc123";
    dataCadastro = new Date("2020-01-01");
}
const user = new User();
console.log(user.id);
//# sourceMappingURL=encapsulamento.js.map