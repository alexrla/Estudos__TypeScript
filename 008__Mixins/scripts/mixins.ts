// Em TypeScript (assim como no JavaScript), uma classe só pode estender de uma única outra classe (para resolver essas restrições, utilizamos os mixins)

import applyMixins from "./applyMixins";

class Product   {
    sell(amount: number)  {
        return `Foram vendidos ${amount} itens desse produto`;
    }

    buy(amount: number)  {
        return `Foram comprados ${amount} itens desse produto`;
    }
}

class Furniture    {
    push(meters: number)  {
        return `A mobília foi empurrada por ${meters} metros`;
    }
}

class Couch     {
    constructor(public name: string) {}
}

// Técnica utilizada para extender mais de uma classe
interface Couch extends Product, Furniture {}

applyMixins(Couch, [Product, Furniture]);
// applyMixins(Classe/Interface_Herdeira, [Classes_Herdadas]);
// Copia os métodos das classes herdaradas para a classe herdeira

const newProduct = new Couch("Sofá");

console.log(newProduct.sell(10));
console.log(newProduct.push(40));
console.log(newProduct.name);