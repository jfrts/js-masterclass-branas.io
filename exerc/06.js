function parseStatement(statement, regExp) {
    return statement.match(regExp);
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
            [tableName]: { 
                columns: { ...columnsObj },
                data: []
            },
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

        this.tables[tableName].data.push(row);
    },

    select(statement) {
        const parsedStatement = parseStatement(statement, /select (.+) from ([a-zA-Z]+)( where )?(.+)?/);
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

    delete(statement) {
        const parsedStatement = parseStatement(statement, /delete from ([a-z]+)(?: where (.+))?/);
        let [, tableName, whereCondition] = parsedStatement;

        if(whereCondition) {
            const [columnWhere, valueWhere] = whereCondition.split(/\s*=\s*/);
            this.tables[tableName].data = this.tables[tableName].data.filter(row => row[columnWhere] !== valueWhere);
        } else {
            this.tables[tableName].data = [];
        }
    },
    
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }

        if (statement.startsWith("insert into")) {
            return this.insert(statement);
        }

        if (statement.startsWith("select")) {
            return this.select(statement);
        }

        if (statement.startsWith("delete")) {
            return this.delete(statement);
        }
    }
};

// console.log(database.tables);
database.execute("create table author (id number, name string, age number, city string, state string, country string)");

database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");

// console.log(database.tables);

console.log(database.execute("select name, age from author"));
console.log(database.execute("select name, age from author where id = 1"));

// console.log(database)

database.execute("delete from author where id = 2");