// Simplificando o construtor

class RequestProduct   {
    // private product: string;
    // protected totalValue: number;
    // public deliveryForecast: Date;

    // Promovendo a variável para atributo (cria o atributo e coloca o argumento, dentro daquele atributo)
    constructor(private product: string, protected totalValue: number, public deliveryForecast: Date) {
    //     this.product = product;
    //     this.totalValue = totalValue;
    //     this.deliveryForecast = deliveryForecast;
    }
}

const myRequest = new RequestProduct("Notebook", 4000, new Date("2022-07-01"));

console.log(myRequest);