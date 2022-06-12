// Objeto (Object) - Nativo do JavaScript

let serverConfiguration: object = {
    server: "Microsoft Azure",
    ip: "127.0.0.1",
    port: "8080",
    password: "123456"
};

console.log(serverConfiguration);

// Não procura saber sobre o tamanho do objeto (a quantidade de propriedades com valores) e sim, se de fato, temos um objeto
serverConfiguration = {
    server: "Google Cloud"
};
console.log(serverConfiguration);

// Não da erro
serverConfiguration = new Array();
console.log(serverConfiguration);

serverConfiguration = new Object();
console.log(serverConfiguration);