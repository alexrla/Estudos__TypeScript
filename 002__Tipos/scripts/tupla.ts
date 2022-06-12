// Tupla (Tuple) - Novidade do Typescript

// Podemos definir uma ordem para o dados, o tipo que cada dado deve ser e podemos especificar o seu tamanho

let superSet: [string, number, boolean];
superSet = ["Typescript", 2022, true];
console.log(superSet);

// Erro - O terceiro elemento deve ser um boolean
// superSet = ["Typescript", 2022, "true"];


// Erro - O array deve ter tamanho 3 (3 elementos)
// superSet = ["Typescript", 2022, true, 2023];

let dayOfWeek: [string, string, string, string, string, string, string];

dayOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

console.log(dayOfWeek);