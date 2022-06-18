"use strict";
class NotificationsTwo {
}
class EmailTwo extends NotificationsTwo {
    name;
    email;
    constructor(user) {
        super();
        this.name = user.name;
        this.email = user.email;
    }
    send() {
        console.log(`Enviando email para ${this.email}...`);
        return true;
    }
}
class SMSTwo extends NotificationsTwo {
    name;
    phoneNumber;
    constructor(user) {
        super();
        this.name = user.name;
        this.phoneNumber = user.phoneNumber;
    }
    send() {
        console.log(`Enviando SMS para ${this.phoneNumber}...`);
        return true;
    }
}
new EmailTwo({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999" }).send();
new SMSTwo({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999" }).send();
//# sourceMappingURL=interfaces.js.map