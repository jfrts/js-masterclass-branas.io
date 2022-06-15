const bool = new Boolean(false);

// > !!bool; true //
/**
 * Acontece porque o tipo da variável bool é object e não boolean. Fazendo a coerção de tipo object é true.
 */

console.log(typeof bool); // Object

/**
 * São 6 casos em que o resultado da coerção é false:
 * 
 * 1 - false
 * 2 - null
 * 3 - undefined
 * 4 - "" (string vazia)
 * 5 - 0
 * 6 - NaN
 *  
 */