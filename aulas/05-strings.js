// const str = new String('Javascript'); // A função construtora é mais lenta e pode prejudicar a performance

// console.log(str); // [String: 'Javascript']
// console.log(str instanceof String); // true

let counter = 0;
let counter2 = 0;

// console.time('performance');
// while (counter < 100000) {
//     const str = 'Javascript';
//     counter++;
// }
// console.timeEnd('performance');

// console.time("performance");
// while (counter < 500000) {
//     'Javascript'.includes('cript');
//     counter++;
// }
// console.timeEnd("performance");

// console.time("performance2");
// while (counter2 < 500000) {
//   "Javascript".indexOf("cript") > -1;
//   counter2++;
// }
// console.timeEnd("performance2");

const str1 = "JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web,";
const str2 = "mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. ";
const str3 = "O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos,";
const str4 = "imperativos e declarativos (como por exemplo a programação funcional). Saiba mais sobre o JavaScript.";

// console.time("performance1");
// while (counter < 500000) {
//     `${str1}${str2}${str3}${str4}`;
//     counter++;
// }
// console.timeEnd("performance1");

// console.time("performance2");
// while (counter2 < 500000) {
//     str1.concat(str2, str3, str4);
//     counter2++;
// }
// console.timeEnd("performance2");

console.time("performance1");
while (counter < 50000000) {
    ' Self'.trim();
    counter++;
}
console.timeEnd("performance1");

console.time("performance2");
while (counter2 < 50000000) {
    " Self".trimStart();
    counter2++;
}
console.timeEnd("performance2");