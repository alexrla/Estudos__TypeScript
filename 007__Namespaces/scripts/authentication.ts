/// <reference path="./authentication/index.ts"/>

const newRegister = new Authentication.LoginRegister();

const result = newRegister.register({
    name: "joao",
    email: "joao@email.com",
    password: "123456"
});

console.log(result);

/*
    - Usando namespaces, devemos informar a referência ao nosso arquivo, que deveria importar o namespace (esse será a nossa forma de importação):
    
        /// <reference path="./authentication/index.ts"/>

    - Agora, no terminal, devemos realizar o tsc do nosso arquivo onde informamos a referência (o arquivo responsável por utilizar aquilo que foi importado). Nesse caso:
    
        tsc scripts/authentication.ts --outFile output authentication.js
*/