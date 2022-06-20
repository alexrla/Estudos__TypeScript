"use strict";
function returnFirstPosition(myArray) {
    return myArray[0];
}
console.log(returnFirstPosition([1, 2, 3]));
const phrase = {
    value: "myString",
    performProcessing(argument) {
        return argument.toUpperCase();
    }
};
console.log(phrase.value);
console.log(phrase.performProcessing(phrase.value));
const num = {
    value: 10,
    performProcessing(argument) {
        return argument * argument;
    }
};
console.log(num.value);
console.log(num.performProcessing(num.value));
class Registration {
    create(data) {
        console.log("Criando novo registro...");
        return data;
    }
    read(id) {
        console.log(`Dados do registro de ID: ${id}...`);
        return {};
    }
    update(id, dataUpdate) {
        console.log(`Retornando dados do ID: ${id}...`);
        return dataUpdate;
    }
    delete(id) {
        console.log(`Excluindo registro do ID: ${id}...`);
        return true;
    }
}
const newUser = new Registration();
console.log(newUser.create({
    id: 1,
    name: "João",
    email: "joao@email.com",
    password: "123456",
    createAt: new Date("2019-05-17"),
    updateAt: new Date("2020-04-01")
}));
const newCategory = new Registration();
console.log(newCategory.create({
    id: 2,
    name: "TypeScript",
    createAt: new Date("2021-08-10"),
    updateAt: new Date("2022-05-19")
}));
class User extends Registration {
}
const myUser = new User();
console.log(myUser.create({
    id: 1,
    name: "Douglas",
    email: "douglas12@email.com",
    password: "1A2B3C",
    createAt: new Date("2020-07-28"),
    updateAt: new Date("2022-03-12")
}));
function showAmountTotal(value) {
    console.log(`Total: ${value.length}`);
    return value;
}
showAmountTotal([1, 2, 3]);
showAmountTotal("hello");
showAmountTotal({ length: 20 });
//# sourceMappingURL=generics.js.map