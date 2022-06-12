"use strict";
function showError(message) {
    throw new Error(message);
}
let number = 0;
function loopInfinity() {
    while (true) {
        console.log(++number);
    }
}
//# sourceMappingURL=never.js.map