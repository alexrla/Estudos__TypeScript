console.log("Hello World!");

console.log("===============");

const nome = "João";
console.log("Olá " + nome + "!");

console.log("===============");

class Produto   {
    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number)  {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
}