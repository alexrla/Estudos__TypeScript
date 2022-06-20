"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("./classes/DataBase");
const showMessage_1 = __importDefault(require("./functions/showMessage"));
const Email_1 = __importDefault(require("./notification/classes/Email"));
const SMS_1 = __importDefault(require("./notification/classes/SMS"));
const connectionDataBase = DataBase_1.DataBase.factory({
    typeDataBase: DataBase_1.DataBase.TYPE_MYSQL,
    password: "123456",
    user: "root",
    ip: DataBase_1.DataBase.LOCAL,
});
console.log(connectionDataBase);
(0, showMessage_1.default)("Hello World!");
console.log((0, showMessage_1.default)("Hello World!"));
(0, showMessage_1.default)(100);
(0, showMessage_1.default)({ url: "www.google.com" });
new Email_1.default().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999" });
new SMS_1.default().send({ name: "Joao", email: "joao@email.com", phoneNumber: "11 99999-9999" });
//# sourceMappingURL=index.js.map