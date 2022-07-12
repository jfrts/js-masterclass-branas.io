export class Parser {
    constructor() {
        this.commands = new Map([
            ["createTable", /create table ([a-z]+) \((.+)\)/],
            ["insert", /insert into ([a-z]+) \((.+)\) values \((.+)\)/],
            ["select", /select (.+) from ([a-zA-Z]+)( where )?(.+)?/],
            ["delete", /delete from ([a-z]+)(?: where (.+))?/]
        ]);
    }
    
    parse(statement) {
        for (const [command, regExp] of this.commands) {
            const parsedStatement = statement.match(regExp);
            
            if (parsedStatement) {
                return { command, parsedStatement };
            }
        }
    }
}