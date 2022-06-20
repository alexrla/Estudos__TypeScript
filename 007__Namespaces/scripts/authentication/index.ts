// Criando um namespace
namespace Authentication {
    interface IUser {
        email: string;
        password: string;
    }

    interface INewUser {
        name: string;
        email: string;
        password: string;
    }

    export class LoginRegister {
        login(user: IUser) {
            return user;
        }

        register(newUser: INewUser) {
            return newUser;
        }
    }

    export class Recovery  {
        recoverPassword()   {
            return "Enviando email para recuperação de senha...";
        }
    }
}