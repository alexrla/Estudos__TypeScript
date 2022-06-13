"use strict";
function showMessage(message) {
    console.log(message);
    return true;
}
showMessage("Hello World!");
console.log(showMessage("Hello World!"));
showMessage(100);
showMessage({ url: "www.google.com" });
const show = (code) => {
    return code;
};
function sendEmail(to, subject = "Sem assunto", sender) {
    console.log({
        to,
        subject,
        sender
    });
}
sendEmail("joao12@gmail.com", "TypeScript");
function sumIncome(monthOne, monthTwo, monthThree) {
    return monthOne + monthTwo + monthThree;
}
console.log(sumIncome(100, 200, 300));
function sumIncomeTwo(...months) {
    return months.reduce((totalIncome, currentIncome) => totalIncome + currentIncome, 0);
}
console.log(sumIncomeTwo(100, 200, 300));
//# sourceMappingURL=funcoes.js.map