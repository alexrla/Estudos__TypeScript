// Number - Nativo do JavaScript

let year: number;

year = 2022;

// Erro
// year = "2022";

// Convertendo string para number
let newYear: number;

// Number
newYear = Number("2023");
console.log(newYear);

// Atalho pra Number
newYear = +"2024";
console.log(newYear);

// parseInt
newYear = parseInt("2025");
console.log(newYear);

// parseFloat
newYear = parseFloat("2026");
console.log(newYear);

const bigNumber: bigint = 50n;
console.log(bigNumber);

console.log(year + newYear);