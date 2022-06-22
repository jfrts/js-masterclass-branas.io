/**
* Um object é uma coleção dinâmica de propriedades, definidas por chaves, que podem
* ser do tipo String ou Symbol, e valores que podem ser de qualquer tipo de dado.
*/

const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    page: 464,
    language: 'English',
    available: true
};

// new Object();
// Object.create(null); // Caso queira especificar o protótipo do objeto, nesse caso null

// let i = 0;
// console.time('testefor');
// while (i < 100) {
//     for (let key in book) {
//         console.log(book[key])
//     }
//     i++;
// }
// console.timeEnd('testefor');


/**
* O tipo undefined é retornado caso a chave não seja encontrada
*/


/**
* Herança
*/

/** 01 */
// { 
//     const scheme = {
//         name: "Scheme",
//         year: 1975,
//         paradigm: "Functional"
//     };
//     const javascript = {
//         name: "JavaScript",
//         year: 1995,
//         paradigm: "Functional"
//     };
//     console.log(scheme);
//     console.log(javascript);
// }

/** 02 */
// {
//     const functionalLanguage = {
//         paradigm: "Functional"
//     }

//     const scheme = {
//       name: "Scheme",
//       year: 1975,
//       paradigm: "Functional",
//     };
//     const javascript = {
//       name: "JavaScript",
//       year: 1995,
//       paradigm: "Functional",
//     };
//     console.log(functionalLanguage);
//     console.log(scheme);
//     console.log(javascript);
// }

/** 03 */
// {
//     const functionalLanguage = {
//         paradigm: "Functional"
//     }

//     const scheme = {
//       name: "Scheme",
//       year: 1975,
//       __proto__: functionalLanguage
//     };
//     const javascript = {
//       name: "JavaScript",
//       year: 1995,
//       __proto__: functionalLanguage,
//     };
//     console.log(functionalLanguage);
//     console.log(scheme);
//     console.log(javascript);
//     console.log(javascript.__proto__);
//     console.log(javascript.paradigm);

//     for (key in javascript) {
//         console.log(
//             "Key:",
//             key,
//             "| hasOWn:",
//             javascript.hasOwnProperty(key)
//         );
//     };
// }

/** Outro método */
// {
//     const functionalLanguage = {
//         paradigm: "Functional"
//     }

//     const scheme = {
//       name: "Scheme",
//       year: 1975,
//     };
//     Object.setPrototypeOf(scheme, functionalLanguage);

//     const javascript = {
//       name: "JavaScript",
//       year: 1995,
//     };
//     Object.setPrototypeOf(javascript, functionalLanguage);

//     console.log(functionalLanguage);
//     console.log(scheme);
//     console.log(javascript);
//     console.log(javascript.__proto__);
//     console.log(javascript.paradigm);

//     for (key in javascript) {
//         console.log(
//             "Key:",
//             key,
//             "| hasOWn:",
//             javascript.hasOwnProperty(key)
//         );
//     };
// }

/**
* OBJECT API
*/

// {
//     const pessoa = {
//         nome: "Júlio",
//         idade: {
//             valor: 27
//         }
//     };

//     const copiaPessoa = { ...pessoa }; // Aqui muda também o pessoa se for alterado o atributo valor dentro de idade.

//     // const copiaPessoa = {};
//     // Object.assign(copiaPessoa, pessoa); // Com esse método também muda o pessoa se for alterado o atributo valor dentro de idade.

//     // const copiaPessoa = structuredClone(pessoa); // Node 17 deepClone, porém funciona apenas no node17 +

//     copiaPessoa.idade.valor = 30
//     copiaPessoa.nome = "César"

//     console.log(pessoa, copiaPessoa);
// }

{
    const javascript = {};
    
    // Object.defineProperty(javascript, "name", {
    //     value: "JavaScript",
    // });
    console.log(javascript); // {}
    
    Object.defineProperty(javascript, "name", {
        value: "JavaScript",
        enumerable: true,
        writable: true
    });
    console.log(javascript); // { name: 'JavaScript' }
    
    javascript.name = "ECMAScript"; // Sem o writable: true o valor não será alterado.
    console.log(javascript); // { name: 'JavaScript' }
}