function parseStatement(statement, regExp) {
    return statement.match(regExp);
}

const DatabaseError = function(statement, message) {
    this.statement = statement;
    this.message = message;
}

const database = {
    tables: {},
    createTable(statement) {
        const parsedStatement = parseStatement(statement, /create table ([a-z]+) \((.+)\)/);

        const [, tableName, columnsString] = parsedStatement;
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
    insert(statement) {
        const parsedStatement = parseStatement(statement, /insert into ([a-z]+) \((.+)\) values \((.+)\)/);
        let [, tableName, columns, values] = parsedStatement;
        const row = {};

        columns = columns.split(", ");
        values = values.split(", ");

        for (const [index, column] of columns.entries()) {
            row[column] = values[index];
        }

        this.tables.data.push(row);
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }

        if (statement.startsWith("insert into")) {
            return this.insert(statement);
        }

        throw new DatabaseError(statement, `Syntax error: "${statement}"`);
    }
};

console.log(database.execute("select "));
console.log(database.tables);
console.log(database.execute("create table author (id number, name string, age number, city string, state string, country string)"));

console.log(database.tables);
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");

console.log(database.tables);
