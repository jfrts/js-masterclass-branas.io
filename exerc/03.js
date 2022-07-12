/**
* Exercício 2 - Objetivo
*
*  Com base no nome da tabela e nas colunas, monte uma estrutura de objetos para
*  armazenar tanto a definição da tabela quanto os dados.
*/

// const statement = "create table author (id number, name string, age number, city string, state string, country string)";
// const regExp = /create table ([a-z]+) \((.+)\)/;
// const parsedStatement = statement.match(regExp);
// const tableName = parsedStatement[1];
// const columnsString = parsedStatement[2];
// const columns = columnsString.split(", ");
// const columnsObj = {};

// for (const key of columns) {
//     const [columnKey, columnValue] = key.split(" ");
//     columnsObj[columnKey] = columnValue;
// }

const database = {
    tables: {},
    createTable(statement) {
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statement.match(regExp);
        const tableName = parsedStatement[1];
        const columnsString = parsedStatement[2];
        const columns = columnsString.split(", ");
        const columnsObj = {};
        
        for (const key of columns) {
            const [columnKey, columnValue] = key.split(" ");
            columnsObj[columnKey] = columnValue;
        }

        this.tables = {
            [tableName]: { ...columnsObj },
            data: []
        }
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }
    }
};

console.log(database.execute("create table author (id number, name string, age number, city string, state string, country string)"));
console.log(database);
console.log(JSON.stringify(database));


