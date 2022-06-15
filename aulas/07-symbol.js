/**
 * O tipo Symbol é primitivo, único e imutável, atuando como uma
 * chave única em um objeto.
 */

Symbol("a") === Symbol("a"); // false

let regexp = /JavaScript/;
// "/JavaScript/".startsWith(regexp); // TypeError: First argument to String.prototype.startsWith must not be a regular expression

regexp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regexp)); // true