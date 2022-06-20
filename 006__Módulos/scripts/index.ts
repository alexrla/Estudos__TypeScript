import { DataBase } from './classes/DataBase';
import showMessage from './functions/showMessage';
import Email from './notification/classes/Email';
import SMS from './notification/classes/SMS';

// DataBase()
const connectionDataBase = DataBase.factory({
    typeDataBase: DataBase.TYPE_MYSQL,
    password: "123456",
    user: "root",
    ip: DataBase.LOCAL,
});

console.log(connectionDataBase);

// showMessage()
showMessage("Hello World!");
console.log(showMessage("Hello World!"));

showMessage(100);
showMessage({url: "www.google.com"});

// Email e SMS
new Email().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999"});
new SMS().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999"});