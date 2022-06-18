/*
    - É possível, ainda, encontrarmos atributso privados com o underline. Ex.: _name;
    
    - Com getteres e setters, é possível fazermos verificações a mais (adicionando um nível 
    a mais de segurança, na hora de retornar ou e definir informações para ele) 

    - Nos métodos, get e set, devemos ter names diferentes (por isso o underline)

    - O método set não retorna nenhum valor, apenas define uma nova informação
*/

class Permission    {
    constructor(
        private _name: string,
        private _level: number
    )   {}

    get name() {
        return this._name.toUpperCase();
    }


    set name(novoname)  {
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