// Funções

// É recomendado definir os tipos dos parâmetros
// Alterando o "noImplicitAny" para "false", essa recomendação/erro deixa de aparecer
function showMessage(message: string | number | object): boolean   {
    console.log(message);

    return true;
}

showMessage("Hello World!");
console.log(showMessage("Hello World!"));

showMessage(100);
showMessage({url: "www.google.com"});

// Arrow Function
const show = (code: string | number): string | number => {
    return code;
}

// Parâmetros com valores padrões e opcionais
function sendEmail(to: string, subject: string = "Sem assunto", sender?: string): void    {
    console.log(
        {
            to, 
            subject, 
            sender
        }
    );
}

sendEmail("joao12@gmail.com", "TypeScript"); // sender = undefined


// Rest Parameters

// Sem o Rest Parameters
function sumIncome(monthOne: number, monthTwo: number, monthThree: number): number    {
    return monthOne + monthTwo + monthThree;
}

console.log(sumIncome(100, 200, 300));

// Com o Rest Parameters

// Expred Operator
function sumIncomeTwo(...months: number[]): number    {
    return months.reduce((totalIncome: number, currentIncome: number) => totalIncome + currentIncome, 0);
}

console.log(sumIncomeTwo(100, 200, 300)); 
// Não precisa se preocupar com os colchetes
// Usando vírgula, entende-se que temos um novo item