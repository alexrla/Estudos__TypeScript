"use strict";
let address;
address = {
    street: "Rua dos Bobos",
    number: 0
};
address = {
    str: "Rua dos Bobos",
    num: 0
};
let newAddress;
newAddress = {
    street: "Rua dos Bobos",
    number: 0,
    district: "Centro",
    city: "São Paulo"
};
;
let myNewAddress;
myNewAddress = {
    street: "Rua dos Bobos",
    number: 0,
    district: "Centro",
    city: "São Paulo"
};
const iogurte = {
    name: "Iogurte",
    price: 12,
    description: "Iogurte Natural",
    expirationDate: new Date(2022, 3, 22)
};
const notebook = {
    name: "Notebook",
    price: 5000
};
console.log(iogurte);
;
const cursoNode = {
    title: "NodeJS",
    price: 3000,
    loadHorary: 39,
    classification: 5
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
let calculator;
function multiply(multiplying, multiplier) {
    return multiplying * multiplier;
}
const division = (dividend, divider) => dividend / divider;
calculator = {
    sum: (valueOne, valueTwo) => {
        return valueOne + valueTwo;
    },
    subtraction: function (valueOne, valueTwo) {
        return valueOne - valueTwo;
    },
    multiplication: multiply,
    division
};
console.log(calculator.sum(2, 3));
;
const frontEnd = {
    name: "Front-end",
    id: 1
};
const backEnd = {
    name: "Back-end",
    id: 1
};
let menu = {
    categories: [frontEnd, backEnd]
};
console.log(menu);
let myTaskList;
myTaskList = ["Estudar TypeScript", "Estudar Angular"];
console.log(myTaskList[0]);
const joao = {
    id: 1,
    name: "Joao",
    email: "joao@email.com",
    password: "abc123"
};
//# sourceMappingURL=interfaces.js.map