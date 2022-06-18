"use strict";
class Permission {
    _name;
    _level;
    constructor(_name, _level) {
        this._name = _name;
        this._level = _level;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(novoname) {
        if (novoname.length < 5) {
            throw new Error("O nome da permissão, deve ter no mínimo, 5 letras.");
        }
        this._name = novoname;
    }
}
const myPermission = new Permission("user", 10);
console.log(myPermission.name);
myPermission.name = "adm";
console.log(myPermission.name);
//# sourceMappingURL=gettersESetters.js.map