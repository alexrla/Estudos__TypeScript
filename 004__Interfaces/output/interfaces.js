"use strict";
let address;
address = {
    rua: "Rua dos Bobos",
    numero: 0
};
address = {
    logradouro: "Rua dos Bobos",
    num: 0
};
let newAddress;
newAddress = {
    rua: "Rua dos Bobos",
    numero: 0,
    bairro: "Centro",
    cidade: "São Paulo"
};
;
let myNewAddress;
myNewAddress = {
    rua: "Rua dos Bobos",
    numero: 0,
    bairro: "Centro",
    cidade: "São Paulo"
};
const iogurte = {
    nome: "Iogurte",
    preco: 12,
    descricao: "Iogurte Natural",
    dataValidade: new Date(2022, 3, 22)
};
const notebook = {
    nome: "Notebook",
    preco: 5000
};
console.log(iogurte);
;
const cursoNode = {
    titulo: "NodeJS",
    preco: 3000,
    cargaHoraria: 39,
    classificacao: 5
};
console.log(cursoNode);
;
let sum;
sum = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};
const sumOne = sum(13, 13);
console.log(sumOne);
;
let calculadora;
function multiply(multiplying, multiplier) {
    return multiplying * multiplier;
}
const division = (dividend, divider) => dividend / divider;
calculadora = {
    sum: (valueOne, valueTwo) => {
        return valueOne + valueTwo;
    },
    subtraction: function (valueOne, valueTwo) {
        return valueOne - valueTwo;
    },
    multiplication: multiply,
    division
};
console.log(calculadora.sum(2, 3));
;
const frontEnd = {
    nome: "Front-end",
    id: 1
};
const backEnd = {
    nome: "Back-end",
    id: 1
};
let menu = {
    categorias: [frontEnd, backEnd]
};
console.log(menu);
let myTaskList;
myTaskList = ["Estudar TypeScript", "Estudar Angular"];
console.log(myTaskList[0]);
const joao = {
    id: 1,
    nome: "Joao",
    email: "joao@email.com",
    senha: "abc123"
};
//# sourceMappingURL=interfaces.js.map