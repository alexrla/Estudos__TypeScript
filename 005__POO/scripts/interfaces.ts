// Implementando interfaces nas classes  
// Uma classe pode implementar mais de uma interface

interface IEmail    {
    name: string;
    email: string;
}

interface IPhoneNumber    {
    name: string;
    phoneNumber: string;
}

interface IMyUserTwo   {
    name: string;
    email: string;
    phoneNumber: string;
}

interface INotifications {
    send(): boolean;
} 

// Todas as classes que descendem de INotifications devem implementar o método send (seguir esse padrão)
abstract class NotificationsTwo implements INotifications {
    abstract send(): boolean;
}

class EmailTwo extends NotificationsTwo implements INotifications, IEmail {
    name: string;
    email: string;

    constructor(user: IMyUserTwo) {
        super();
        this.name = user.name;
        this.email = user.email;
    }

    send(): boolean {
        console.log(`Enviando email para ${this.email}...`);
        return true;
    }
}

class SMSTwo extends NotificationsTwo implements INotifications, IPhoneNumber {
    name: string;
    phoneNumber: string;
    
    constructor(user: IMyUserTwo) {
        super();
        this.name = user.name;
        this.phoneNumber = user.phoneNumber;
    }

    send(): boolean {
        console.log(`Enviando SMS para ${this.phoneNumber}...`);
        return true;
    }
}

new EmailTwo({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999"}).send();
new SMSTwo({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999"}).send();