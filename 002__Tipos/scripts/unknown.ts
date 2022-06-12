// Unknown - Novidade do TypeScript


// Semelhante ao any
let result: unknown;

result = {
    success: true,
};

result = "Deu tudo certo";

result = 200;

console.log("=============");

const information: any = 150;
const unknownInformation: unknown = 250;

const firstNumber: number = information;

// Erro: não podemos atribuir uma variável (seu valor) do tipo unknown, a qualquer outra variável de qualquer outro tipo
// const secondNumber: number = unknownInformation;