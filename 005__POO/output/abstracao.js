"use strict";
class Notifications {
}
class Email extends Notifications {
    send(user) {
        console.log(`Enviando email para ${user.email}...`);
        return true;
    }
}
class SMS extends Notifications {
    send(user) {
        console.log(`Enviando SMS para ${user.phoneNumber}...`);
        return true;
    }
}
new Email().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999" });
new SMS().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999" });
//# sourceMappingURL=abstracao.js.map