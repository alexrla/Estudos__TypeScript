// Funções

// O T é usado por convenção, mas não é obrigatório, podemos usar um outro identificador
// <T> (antes dos parâmetros da função): declaração do tipo

// No exemplo abaixo, cada elemento do array, passa a ser do tipo T e só podemos retornar esses elementos, que são do tipo T
function returnFirstPosition<T>(myArray: Array<T>): T  {
    return myArray[0];
}

console.log(returnFirstPosition([1, 2, 3]));


// Interfaces   
// <T> (antes do par de chaves da interface): declaração do tipo
interface IProcessing<T>    {
    value: T;

    performProcessing(argument: T): T;
}

const phrase: IProcessing<string> = {
    value: "myString",

    performProcessing(argument: string): string {
        return argument.toUpperCase();
    }
}

console.log(phrase.value);
console.log(phrase.performProcessing(phrase.value));

const num: IProcessing<number> = {
    value: 10,

    performProcessing(argument: number): number {
        return argument * argument;
    }
}

console.log(num.value);
console.log(num.performProcessing(num.value));

// Classes 
// <T> (antes do par de chaves da classe): declaração do tipo
interface IRegistrationDefault    {
    readonly id: number,
    readonly createAt: Date,
    readonly updateAt: Date
}

interface IRegistrationUser extends IRegistrationDefault   {
    name: string,
    email: string,
    password: string,
}

interface IRegistrationCategory extends IRegistrationDefault    {
    name: string,
}

class Registration<IBasic> {
    create(data: IBasic): IBasic    {
        console.log("Criando novo registro...");

        return data;
    }

    read(id: number): IBasic  {
        console.log(`Dados do registro de ID: ${id}...`);

        // Forçando o retorno a se do tipo IBasic (as)
        return {} as IBasic;
    }

    update(id: number, dataUpdate: IBasic): IBasic {
        console.log(`Retornando dados do ID: ${id}...`);

        return dataUpdate;
    }

    delete(id: number): boolean {
        console.log(`Excluindo registro do ID: ${id}...`);

        return true;
    }
}

const newUser = new Registration<IRegistrationUser>();

console.log(
    newUser.create({
        id: 1,
        name: "João",
        email: "joao@email.com",
        password: "123456",
        createAt: new Date("2019-05-17"),
        updateAt: new Date("2020-04-01")
    })
);

const newCategory = new Registration<IRegistrationCategory>();

console.log(
    newCategory.create({
        id: 2,
        name: "TypeScript",
        createAt: new Date("2021-08-10"),
        updateAt: new Date("2022-05-19")
    })
);

class User extends Registration<IRegistrationUser>  {}

const myUser = new User();

console.log(
    myUser.create({
        id: 1,
        name: "Douglas",
        email: "douglas12@email.com",
        password: "1A2B3C",
        createAt: new Date("2020-07-28"),
        updateAt: new Date("2022-03-12")
    })
);

// Restrições genéricas
interface ILength {
    length: number;
}

// Tipo genérico extendendo de uma interface
function showAmountTotal<T extends ILength>(value: T): T  {
    console.log(`Total: ${value.length}`);

    return value;
}

showAmountTotal([1, 2, 3]);
showAmountTotal("hello");
showAmountTotal({length: 20});