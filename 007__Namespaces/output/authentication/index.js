"use strict";
var Authentication;
(function (Authentication) {
    class LoginRegister {
        login(user) {
            return user;
        }
        register(newUser) {
            return newUser;
        }
    }
    Authentication.LoginRegister = LoginRegister;
    class Recovery {
        recoverPassword() {
            return "Enviando email para recuperação de senha...";
        }
    }
    Authentication.Recovery = Recovery;
})(Authentication || (Authentication = {}));
//# sourceMappingURL=index.js.map