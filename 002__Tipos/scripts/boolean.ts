// Boolean - Nativo do JavaScript

let administrator: boolean = true;
console.log(administrator);

administrator = false;
console.log(administrator);

administrator = (2 > 1);
console.log(administrator);

// Convertendo para boolean
administrator = Boolean("1");
console.log(administrator);

administrator = Boolean("0");
console.log(administrator);

administrator = Boolean("[]");
console.log(administrator);

administrator = Boolean("");
console.log(administrator);

administrator = Boolean(0);
console.log(administrator);

administrator = Boolean([]);
console.log(administrator);

administrator = Boolean(null);
console.log(administrator);

administrator = Boolean(undefined);
console.log(administrator);