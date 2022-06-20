// NodeJS - module.exports
// JavaScript - export

import { IDataBase } from '../interfaces/IDataBase';

export class DataBase {
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