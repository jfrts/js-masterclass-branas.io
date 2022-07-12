function parseStatement(statement, regExp) {
    return statement.match(regExp);
}

const Parser = function() {
    const commands = new Map([
        ["createTable", /create table ([a-z]+) \((.+)\)/],
        ["insert", /insert into ([a-z]+) \((.+)\) values \((.+)\)/],
        ["select", /select (.+) from ([a-zA-Z]+)( where )?(.+)?/],
        ["delete", /delete from ([a-z]+)(?: where (.+))?/]
    ]);

    this.parse = function(statement) {
        for (const [command, regExp] of commands) {
            const parsedStatement = statement.match(regExp);

            if (parsedStatement) {
                return { command, parsedStatement };
            }
        }
    }
}

const database = {
    tables: {},
    parser: new Parser(),

    createTable(parsedStatement) {
        console.log("CREATE:", parsedStatement);
        const [, tableName, columnsString] = parsedStatement;
        const columns = columnsString.split(", ");
        const columnsObj = {};

        for (const key of columns) {
            const [columnKey, columnValue] = key.split(" ");
            columnsObj[columnKey] = columnValue;
        }

        this.tables = {
            [tableName]: { 
                columns: { ...columnsObj },
                data: []
            },
        }
    },

    insert(parsedStatement) {
        let [, tableName, columns, values] = parsedStatement;
        const row = {};
        columns = columns.split(", ");
        values = values.split(", ");

        for (const [index, column] of columns.entries()) {
            row[column] = values[index];
        }

        this.tables[tableName].data.push(row);
    },

    select(parsedStatement) {
        let [, columns, tableName, , whereCondition] = parsedStatement; 
        columns = columns.split(", ");

        function selectRow(row) {
            let selectedRow = {};
            columns.forEach(column => {
                selectedRow[column] = row[column];
            });
            return selectedRow;
        }

        if (whereCondition) {
            const [columnWhere, valueWhere] = whereCondition.split(/\s*=\s*/);
            data = this.tables[tableName].data.filter(row => row[columnWhere] === valueWhere);
            data = data.map(selectRow)
            return data;
        }

        data = this.tables[tableName].data.map(selectRow);
        return data;
    },

    delete(parsedStatement) {
        let [, tableName, whereCondition] = parsedStatement;

        if(whereCondition) {
            const [columnWhere, valueWhere] = whereCondition.split(/\s*=\s*/);
            this.tables[tableName].data = this.tables[tableName].data.filter(row => row[columnWhere] !== valueWhere);
        } else {
            this.tables[tableName].data = [];
        }
    },

    execute(parsedStatement) {
        const result = this.parser.parse(parsedStatement);

        if (result) {
            return this[result.command](result.parsedStatement);
        }
    }
};

console.log(database.tables);
database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
console.log(database.tables);
console.log(database.execute("select name, age from author"));
console.log(database.execute("select name, age from author where id = 1"));
database.execute("delete from author where id = 2");
console.log(database.tables);