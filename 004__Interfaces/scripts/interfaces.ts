// Interfaces

// Tipagem de objeto
let address: object; 


// Eu posso ter qualquer propriedade (nome) e valor, que nenhum erro é acusado
address = {
    street: "Rua dos Bobos",
    number: 0
};

address = {
    str: "Rua dos Bobos",
    num: 0
};

// Criando regras
let newAddress: {
    street: string,
    number: number,
    district: string,
    city: string
};

newAddress = {
    street: "Rua dos Bobos",
    number: 0,
    district: "Centro",
    city: "São Paulo"
};

// Criando uma interface

// Padrão PascalCase e Letra I no inicio
interface IAddress {
    street: string,
    number: number,
    district: string,
    city: string
};

// Definindo uma tipagem de dados
let myNewAddress: IAddress; // Convenção: colocar a letra I na frente do nome da interface

myNewAddress = {
    street: "Rua dos Bobos",
    number: 0,
    district: "Centro",
    city: "São Paulo"
};

// Propriedades opcionais (utilizamos o sinal de interrogação, assim como fazemos com parâmetros de funções, que são opcionais)
interface IProduct  {
    name: string,
    price: number,
    description?: string,
    expirationDate?: Date
}

const iogurte: IProduct = {
    name: "Iogurte",
    price: 12,
    description: "Iogurte Natural",
    expirationDate: new Date(2022, 3, 22)
};

const notebook: IProduct = {
    name: "Notebook",
    price: 5000
};

console.log(iogurte)

// Propriedade readonly (se quisermos que o valor de uma propriedade não seja alterado)
interface ICurso    {
    readonly title: string,
    description?: string,
    price: number,
    loadHorary: number,
    classification: number
};

const cursoNode: ICurso = {
    title: "NodeJS",
    price: 3000,
    loadHorary: 39,
    classification: 5
};

// Erro: cursoNode.titulo = "Node";

// O readonly funciona para variáveis do tipo const e let

console.log(cursoNode);

// Funções em interfaces
interface IArithmeticOperation {
    (operatingOne: number, operatingTwo: number): number;
};

let sum: IArithmeticOperation;

sum = (numberOne: number, numberTwo: number): number => {
    return numberOne + numberTwo;
};

const sumOne = sum(13, 13); 

console.log(sumOne);

// Métodos em interfaces
interface ICalculations {
    sum(numOne: number, numTwo: number): number,
    subtraction(numOne: number, numTwo: number): number,
    multiplication(numOne: number, numTwo: number): number,
    division(numOne: number, numTwo: number): number
};

let calculator: ICalculations;

function multiply(multiplying: number, multiplier: number): number  {
    return multiplying * multiplier;
}


const division = (dividend: number, divider: number): number => dividend / divider;

calculator = {
    sum: (valueOne: number, valueTwo: number): number => {
        return valueOne + valueTwo;
    },
    subtraction: function(valueOne: number, valueTwo: number): number {
        return valueOne - valueTwo;
    },
    multiplication: multiply,
    division
};

console.log(calculator.sum(2, 3));

// Arrays em interfaces
interface ICategories   {
    name: string,
    id: number,
    parentCategory?: ICategories 
};

const frontEnd: ICategories = {
    name: "Front-end",
    id: 1
};

const backEnd: ICategories = {
    name: "Back-end",
    id: 1
};

interface IMenu {
    categories: ICategories[]
}

let menu: IMenu = {
    categories: [frontEnd, backEnd]
};

console.log(menu);

interface ITaskList {
    [index: number]: string;
}

let myTaskList: ITaskList;

myTaskList = ["Estudar TypeScript", "Estudar Angular"];

console.log(myTaskList[0]);

// Extends em interfaces (podemos aplicar as regras de uma interfaces em várias outras)
interface Model     {
    id: number
}

interface IPerson extends Model   {
    name: string,
}

interface IUser extends IPerson {
    email: string,
    password: string,
}

const joao: IUser = {
    id: 1,
    name: "Joao",
    email: "joao@email.com",
    password: "abc123"
}