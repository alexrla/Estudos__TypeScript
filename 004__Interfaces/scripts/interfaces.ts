// Interfaces

// Tipagem de objeto
let address: object; 


// Eu posso ter qualquer propriedade (nome) e valor, que nenhum erro é acusado
address = {
    rua: "Rua dos Bobos",
    numero: 0
};

address = {
    logradouro: "Rua dos Bobos",
    num: 0
};

// Criando regras
let newAddress: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string
};

newAddress = {
    rua: "Rua dos Bobos",
    numero: 0,
    bairro: "Centro",
    cidade: "São Paulo"
};

// Criando uma interface

// Padrão PascalCase e Letra I no inicio
interface IAddress {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
};

// Definindo uma tipagem de dados
let myNewAddress: IAddress; // Convenção: colocar a letra I na frente do nome da interface

myNewAddress = {
    rua: "Rua dos Bobos",
    numero: 0,
    bairro: "Centro",
    cidade: "São Paulo"
};

// Propriedades opcionais (utilizamos o sinal de interrogação, assim como fazemos com parâmetros de funções, que são opcionais)
interface IProduct  {
    nome: string,
    preco: number,
    descricao?: string,
    dataValidade?: Date
}

const iogurte: IProduct = {
    nome: "Iogurte",
    preco: 12,
    descricao: "Iogurte Natural",
    dataValidade: new Date(2022, 3, 22)
};

const notebook: IProduct = {
    nome: "Notebook",
    preco: 5000
};

console.log(iogurte)

// Propriedades readonly (se quisermos que o valor de uma propriedade não seja alterado)
interface ICurso    {
    readonly titulo: string,
    descricao?: string,
    preco: number,
    cargaHoraria: number,
    classificacao: number
};

const cursoNode: ICurso = {
    titulo: "NodeJS",
    preco: 3000,
    cargaHoraria: 39,
    classificacao: 5
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

let calculadora: ICalculations;

function multiply(multiplying: number, multiplier: number): number  {
    return multiplying * multiplier;
}


const division = (dividend: number, divider: number): number => dividend / divider;

calculadora = {
    sum: (valueOne: number, valueTwo: number): number => {
        return valueOne + valueTwo;
    },
    subtraction: function(valueOne: number, valueTwo: number): number {
        return valueOne - valueTwo;
    },
    multiplication: multiply,
    division
};

console.log(calculadora.sum(2, 3));

// Arrays em interfaces
interface ICategories   {
    nome: string,
    id: number,
    categoriaPai?: ICategories 
};

const frontEnd: ICategories = {
    nome: "Front-end",
    id: 1
};

const backEnd: ICategories = {
    nome: "Back-end",
    id: 1
};

interface IMenu {
    categorias: ICategories[]
}

let menu: IMenu = {
    categorias: [frontEnd, backEnd]
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
    nome: string,
}

interface IUser extends IPerson {
    email: string,
    senha: string,
}

const joao: IUser = {
    id: 1,
    nome: "Joao",
    email: "joao@email.com",
    senha: "abc123"
}