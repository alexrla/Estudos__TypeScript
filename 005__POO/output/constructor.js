"use strict";
class RequestProduct {
    product;
    totalValue;
    deliveryForecast;
    constructor(product, totalValue, deliveryForecast) {
        this.product = product;
        this.totalValue = totalValue;
        this.deliveryForecast = deliveryForecast;
    }
}
const myRequest = new RequestProduct("Notebook", 4000, new Date("2022-07-01"));
console.log(myRequest);
//# sourceMappingURL=constructor.js.map