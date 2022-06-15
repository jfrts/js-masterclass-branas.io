console.log(2 + 2);
console.log(8 - 3);
console.log(4 * 5);
console.log(9 / 3);
console.log(7 % 2);


console.log('-'.repeat(15));


// Operadores binários
console.log(4 | 3);
/**
 * Por que?
 * 
 * Está fazendo uma comparação binária, no caso:
 */

(4).toString(2); // '100' Valor do número 4 em binário
(3).toString(2); // '11' Valor do número 3 em binário
(4).toString(2).padStart(32, 0); // 00000000000000000000000000000100 -> O valor 4 em 32 bits
(3).toString(2).padStart(32, 0); // 00000000000000000000000000000011 -> O valor 3 em 32 bits
// Da direita para a esquerda é feito a comparação: 0 OU 1, 0 OU 1, 1 OU 0; Resultado: 00000000000000000000000000000111
console.log(0b00000000000000000000000000000111); // 7
console.log(0b111); // 7


console.log("-".repeat(45));


console.log(4 & 3); // 0: Mesmo funcionamento do OU, mas usando E
(4).toString(2); // '100' Valor do número 4 em binário
(3).toString(2); // '11' Valor do número 3 em binário
(4).toString(2).padStart(32, 0); // 00000000000000000000000000000100 -> O valor 4 em 32 bits
(3).toString(2).padStart(32, 0); // 00000000000000000000000000000011 -> O valor 3 em 32 bits
// Da direita para a esquerda é feito a comparação: 0 E 1, 0 E 1, 1 E 0; Resultado: 00000000000000000000000000000000
console.log(0b00000000000000000000000000000000); // 0
console.log(0b0); // 0


console.log("-".repeat(45));

/**
 * Operador NÃO (~)
 * Inverte todos os bits: Complemento de 1 e de 2.
 */
console.log(~2); // -3
console.log((-3 >>> 0).toString(2).padStart(32, 0)); // 11111111111111111111111111111101
console.log((2).toString(2).padStart(32, 0)); //        00000000000000000000000000000010


console.log("-".repeat(45));


/**
 * Operador << para andar com o bit para a esquerda. Multiplicar sucessivamente por 2
 * 
 * 4 << 2 = 16 
 * 4 em binário = 100, ao andar o bit 2x para a esquerda temos: 10000 que é 16.
 * 
 * 5 << 3 = 40 
 * 5 em binário = 101, ao andar o bit 3x para a esquerda temos: 101000 que é 40.
 * 
 */

/**
 * Operador >> para andar com o bit para a direita. Dividir sucessivamente por 2
 * 4 >> 2 = 1
 * 5 >> 3 = 0
 */

/**
 * Operador >>> anda para a direita e troca o sinal do número
 */