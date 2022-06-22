/**
 * Exercício 2 - Objetivo
 *
 *  Com base no nome da tabela e nas colunas, monte uma estrutura de objetos para
 *  armazenar tanto a definição da tabela quanto os dados.
 */

const statement = "create table author (id number, name string, age number, city string, state string, country string)";
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

const database = {
    tables: {
        [tableName]: columnsObj,
        data: []
    }
};

console.log(JSON.stringify(database));