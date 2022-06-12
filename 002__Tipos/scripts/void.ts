// Void - Novidade do TypeScript

// Usado para especificar o retorno de funções/métodos (um retorno vazio)
const myConsole: void = console.log("Typescript");

// A função deve retornar nada
function showPhrase(): void   {
    console.log("Aprendendo Typescript!");

    return;
}

showPhrase();