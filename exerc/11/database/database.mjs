import { DatabaseError } from './database-error.mjs';
import { Parser } from './parser.mjs';

export class Database {
    constructor() {
        this.tables = {};
        this.parser = new Parser();
    }
    
    createTable(parsedStatement) {
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
    }
    
    insert(parsedStatement) {
        let [, tableName, columns, values] = parsedStatement;
        const row = {};
        columns = columns.split(", ");
        values = values.split(", ");
        
        for (const [index, column] of columns.entries()) {
            row[column] = values[index];
        }
        
        this.tables[tableName].data.push(row);
    }
    
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
            let data = this.tables[tableName].data.filter(row => row[columnWhere] === valueWhere);
            data = data.map(selectRow);
            return data;
        }
        
        const data = this.tables[tableName].data.map(selectRow);
        return data;
    }
    
    delete(parsedStatement) {
        let [, tableName, whereCondition] = parsedStatement;
        
        if(whereCondition) {
            const [columnWhere, valueWhere] = whereCondition.split(/\s*=\s*/);
            this.tables[tableName].data = this.tables[tableName].data.filter(row => row[columnWhere] !== valueWhere);
        } else {
            this.tables[tableName].data = [];
        }
    }
    
    execute(statement) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.parser.parse(statement);
                
                if (result) {
                    resolve(this[result.command](result.parsedStatement));
                }
                
                reject(new DatabaseError(statement, `Syntax error: "${statement}"`));
            }, 1000)
        });
    }
}