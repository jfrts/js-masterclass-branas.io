export class DatabaseError {
    constructor(statementm, message) {
        this.statement = statementm;
        this.message = message;
    }
}