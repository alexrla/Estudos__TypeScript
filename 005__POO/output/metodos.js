"use strict";
class Teacher {
    name;
    age;
    subject;
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    introduceYourself() {
        return `Meu nome é ${this.name}, tenho ${this.age} anos e sou professor de ${this.subject}`;
    }
    sayNotes(...notas) {
        const notasTotal = notas.reduce((nota, notaAtual) => nota + notaAtual);
        return `Você aluno, obteve média final: ${notasTotal / notas.length}.`;
    }
}
const glaucio = new Teacher("Glaucio", 32, "Programação");
const jose = new Teacher("Jose", 24, "Matemática");
console.log(glaucio.introduceYourself());
console.log(jose.introduceYourself());
console.log(jose.sayNotes(10, 10, 10, 0));
//# sourceMappingURL=metodos.js.map