// Array - Nativo do JavaScript

// Definindo um array de strings
const moviesCategory: string[] = ["Ação", "Aventura", "Ficção científica"];

console.log(moviesCategory);

moviesCategory.push("Romance");
console.log(moviesCategory);

// Erro
// moviesCategory.push(123);

// Definindo um array de números
const moviesYear: Array<number> = [];

for(let year = 2000; year <= new Date().getFullYear(); year++){
    moviesYear.push(year);
}

console.log(moviesYear);

// Definindo um array de números e strings
// #1
const moviesCategoryTwo: (string | number)[]  = [];

// #2
const moviesYearTwo: Array<number | string> = [];