"use strict";
class DataBase {
    ip;
    user;
    password;
    typeDataBase;
    static LOCAL = "127.0.0.1";
    static TYPE_MYSQL = "MySQL";
    static TYPE_SQLSERVE = "SQL Server";
    constructor(ip, user, password, typeDataBase) {
        this.ip = ip;
        this.user = user;
        this.password = password;
        this.typeDataBase = typeDataBase;
    }
    static factory(parametros) {
        if (![DataBase.TYPE_MYSQL, DataBase.TYPE_SQLSERVE].includes(parametros.typeDataBase)) {
            throw new Error("Tipo de banco de dados, inválido.");
        }
        return new DataBase(parametros.ip, parametros.user, parametros.password, parametros.typeDataBase);
    }
}
const connectionDataBase = DataBase.factory({
    typeDataBase: DataBase.TYPE_MYSQL,
    password: "123456",
    user: "root",
    ip: DataBase.LOCAL,
});
console.log(connectionDataBase);
//# sourceMappingURL=atributosEMetodosEstaticos.js.map