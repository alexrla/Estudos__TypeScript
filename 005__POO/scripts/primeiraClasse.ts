// Construindo classes em TypeScript

class Person    {
    name: string;
    age: number;
    height: number;

    constructor(name: string, age: number, height: number)    {
        this.name = name;
        this.age = age;
        this.height = height;
    }  

    toString(): string {
        return `${this.name} tem ${this.age} anos e ${this.height} de altura`;
    }
}

const ronaldo = new Person("Ronaldo", 32, 1.85);
const marcos = new Person("Marcos", 30, 1.99);

console.log(ronaldo.toString);

ronaldo.name = "Ronaldo da Silva";

console.log("Pessoa: " + marcos);