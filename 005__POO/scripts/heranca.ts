// Classe pai
class Registration  {
    name: string;
    email: string;
    birthDate: Date;

    constructor(name: string, email: string, birthDate: Date) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
    }
}

// Classe filha
class Client extends Registration {
    cpf: string;

    constructor(name: string, email: string, birthDate: Date, cpf: string) {
        super(name, email, birthDate);
        this.cpf = cpf;
    }
}

const joao = new Client("João", "joao@email.com", new Date("2000-01-01"), "123.456.789-00");

console.log(joao);