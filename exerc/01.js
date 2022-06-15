/**
 * Objetivo
 * Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em variáveis.
 * 
 * Instruções
 * Dado o comando:
 * 
 * create table author (id number, name string, age number, city string, state string, country string) 
 * 
 *      1. Extraia o nome da tabela e armazene em uma variável chamada "tableName".
 *      2. Extraia as colunas da tabela e armazene em uma variável chamada "columns".
 *      3. Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.
 * 
 * Dicas:
 *  Explore ao máximo as operações disponíveis na String API como: String.prototype.match,
 *  String.prototype.replace e String.prototype.split, juntamente com expressões regulares. 
 *  A operação String.prototype.split retorna uma array, então não é necessário se preocupar
 *  em criar ou adicionar as colunas no array.
 * 
 */

const statement = 'create table author (id number, name string, age number, city string, state string, country string)';
const regExp = /create table ([a-z]+) \((.+)\)/
const parsedStatement = statement.match(regExp);
const tableName = parsedStatement[1];
const columnsString = parsedStatement[2];
const columns = columnsString.split(', ');

console.log(tableName);
console.log(columns);