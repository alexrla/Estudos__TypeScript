// Null e Undefined - Nativos do JavaScript

const element: HTMLHeadElement | null = document.querySelector('#element');

let dataBase: string | null = "mysql, 127.0.0.1, password";

// Geralmente, iremos usar o null em union types (com união de tipos)

// O undefined vai ser usado quase que da mesma forma (com union types)

let myVar: string | undefined;

if(new Date().getDate() === 15) {
    myVar = "Hoje é 15 de maio";
}

console.log(myVar);