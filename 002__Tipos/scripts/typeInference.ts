// Dedução de tipo
let language = "JavaScript";

console.log(`Eu estou aprendendo ${language}`);

// Erro: language é do tipo string
// language = 2022;

const userInfo = [1, "Rafale", new Date];

userInfo.push(2);
userInfo.push("Rafael");
userInfo.push(new Date(2022, 6, 12));
// Erro: true não corresponde aos parâmetros passados inicialmente no array (number, string e Date)
// userInfo.push(true);