// Enum - Novidade do Typescript

// Podemos informar explicitamente, mas se não informarmos, a enumeração ocorre automaticamente, de 1 em 1
// E também podemos usar strings
enum Permission {
    ADMIN = 1,
    USER = "USER",
    READONLY = "READONLY"
}

// Formas de acessar os valores
// #1 - Como propriedade de objeto
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
// #2 - Como array (através de índice)
console.log(Permission[1]);
console.log(Permission["ADMIN"]);