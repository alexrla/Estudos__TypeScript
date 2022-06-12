// Never - Novidade TypeScript

// Indica um valor que nunca deve ser retornado (que uma função nunca deve retornar algo)

// Normalmente, usamos o tipo never para representar o tipo de retorno de uma função que sempre gera um erro
function showError(message: string): never {
    throw new Error(message);
}

// console.log(showError("Algo deu errado!"));

let number = 0;

// E também, usamos o tipo never, quando a função apresenta uma expressão com loop infinito
function loopInfinity(): never {
    while(true) {
        console.log(++number);
    }
}

// loopInfinity();

/*
    - Never x Void
        * O tipo never não pode receber nenhum valor;
        * O tipo void pode receber null ou undefined; 
*/