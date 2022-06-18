"use strict";
class Registration {
    name;
    email;
    birthDate;
    constructor(name, email, birthDate) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
    }
}
class Client extends Registration {
    cpf;
    constructor(name, email, birthDate, cpf) {
        super(name, email, birthDate);
        this.cpf = cpf;
    }
}
const joao = new Client("João", "joao@email.com", new Date("2000-01-01"), "123.456.789-00");
console.log(joao);
//# sourceMappingURL=heranca.js.map