"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = __importDefault(require("./applyMixins"));
class Product {
    sell(amount) {
        return `Foram vendidos ${amount} itens desse produto`;
    }
    buy(amount) {
        return `Foram comprados ${amount} itens desse produto`;
    }
}
class Furniture {
    push(meters) {
        return `A mobília foi empurrada por ${meters} metros`;
    }
}
class Couch {
    name;
    constructor(name) {
        this.name = name;
    }
}
(0, applyMixins_1.default)(Couch, [Product, Furniture]);
const newProduct = new Couch("Sofá");
console.log(newProduct.sell(10));
console.log(newProduct.push(40));
console.log(newProduct.name);
//# sourceMappingURL=mixins.js.map