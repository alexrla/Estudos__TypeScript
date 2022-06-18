interface IMyUser   {
    name: string;
    email: string;
    phoneNumber: string;
}

// Criando uma classe abstrata
abstract class Notifications  {
    // Um método abstrato, não pode ser implementado
    abstract send(user: IMyUser): boolean;
}

class Email extends Notifications {
    send(user: IMyUser): boolean {
        console.log(`Enviando email para ${user.email}...`);
        return true;
    }
}

class SMS extends Notifications {
    send(user: IMyUser): boolean {
        console.log(`Enviando SMS para ${user.phoneNumber}...`);
        return true;
    }
}

new Email().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999"});
new SMS().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999"});