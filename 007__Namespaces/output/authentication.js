// Criando um namespace
var Authentication;
(function (Authentication) {
    var LoginRegister = /** @class */ (function () {
        function LoginRegister() {
        }
        LoginRegister.prototype.login = function (user) {
            return user;
        };
        LoginRegister.prototype.register = function (newUser) {
            return newUser;
        };
        return LoginRegister;
    }());
    Authentication.LoginRegister = LoginRegister;
    var Recovery = /** @class */ (function () {
        function Recovery() {
        }
        Recovery.prototype.recoverPassword = function () {
            return "Enviando email para recuperação de senha...";
        };
        return Recovery;
    }());
    Authentication.Recovery = Recovery;
})(Authentication || (Authentication = {}));
/// <reference path="./authentication/index.ts"/>
var newRegister = new Authentication.LoginRegister();
var result = newRegister.register({
    name: "joao",
    email: "joao@email.com",
    password: "123456"
});
console.log(result);
