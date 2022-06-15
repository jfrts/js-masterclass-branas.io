/**
 * As expressões regulares são estruturas formadas por uma
 * sequência de caracteres que especificam um padrão formal
 * que servem para validar, extrair ou mesmo substituir
 * caracteres dentro de uma String.
 * 
 */

const regExp1 = /jcsr\.frts@gmail\.com/; // Escapei com a \ para o . não ser um meta e sim um . normal
typeof regExp1; // object

let result = regExp1.test("jcsr.frts@gmail.com") // true
// let result = regExp1.exec("jcsr.frts@gmail.com") // ['jcsr.frts@gmail.com', index: 0, input: 'jcsr.frts@gmail.com', groups: undefined]

console.log(result);

/**
 * 
 *      . (qualquer coisa)
 *      ^ (inicia de determinada maneira)
 *      $ (finaliza de determinada maneira)
 * 
 * Grupo de caracteres
 *      
 *      [abc] (Aceita qualquer caractere dentro do grupo, nesse caso: a, b e c)
 *      [^abc] (Não aceita qualquer caractere dentro do grupo. Negação)
 *      [0-9] (Aceita qualquer caractere entre 0 e 9)
 *      [^0-9] (Não aceita qualquer caractere entre 0 e 9)
 * 
 * Quantificadores
 * 
 *      {n} (Quantifica um número específico)
 *      {n,} (Quantifica um número mínimo)
 *      {n,m} (Quantifica um número mínimo e um máximo)
 *      ? (Zero ou um)
 *      * (Zero ou mais)
 *      + (Um ou mais)
 * 
 * Metacaracteres
 * 
 *      \w (Representa o conjunto [a-zA-Z0-9_])
 *      \W (Representa a negação do conjunto de cima: [^a-zA-Z0-9_])
 *      \d (Representa o conjunto [0-9])
 *      \D (Representa a negação do conjunto de cima: [^0-9])
 *      \s (Representa um espaço em branco)
 *      \S (Representa um não espaço em branco)
 *      \n (Representa uma quebra de linha)
 *      \t (Representa um tab)
 * 
 * Grupos de Captura
 * 
 *      Envolver um trecho entre () e após usar 
 *      o método exec conseguir capturar usando o index da array
 * 
 */