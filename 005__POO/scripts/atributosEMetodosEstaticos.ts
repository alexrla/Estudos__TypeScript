/*
    - Podemos acessar atributos e métodos estáticos, sem precisar realizar uma nova instância
    do nosso objeto;

    - Em atributos estáticos, não precisamos do .this;
*/

interface IDataBase {
    ip: string,
    user: string,
    password: string,
    typeDataBase: string,
}

class DataBase {
    static LOCAL = "127.0.0.1";
    static TYPE_MYSQL = "MySQL";
    static TYPE_SQLSERVE = "SQL Server";

    constructor(
        private ip: string,
        private user: string,
        private password: string,
        private typeDataBase: string
    ){}

    static factory(parametros: IDataBase)    {
        if(![DataBase.TYPE_MYSQL, DataBase.TYPE_SQLSERVE].includes(parametros.typeDataBase)) {
            throw new Error("Tipo de banco de dados, inválido.");
        }

        return new DataBase(
            parametros.ip,
            parametros.user,
            parametros.password,
            parametros.typeDataBase
        );
    }
}

const connectionDataBase = DataBase.factory({
    typeDataBase: DataBase.TYPE_MYSQL,
    password: "123456",
    user: "root",
    ip: DataBase.LOCAL,
});

console.log(connectionDataBase);