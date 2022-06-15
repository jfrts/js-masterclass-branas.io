console.log(pi) // undefined: Motivo hoisting por conta de declarar com var

var pi = 3.141592;
console.log(pi) // 3.141592

pi = 3
console.log(pi) // 3

var pi = 5
console.log(pi) // 5: var permite redeclaração de variável

if (true) {
    var test = 10
}
console.log(test) // 10: Var respeita o escopo de função e não do bloco. 

// Let
// console.log(pi_let) // ReferenceError: Cannot access 'pi_let' before initialization: Comportamento do LET
let pi_let = 3.141592;
pi_let = 3; // Aceita
// let pi_let = 3; // SyntaxError: Identifier 'pi_let' has already been declared
