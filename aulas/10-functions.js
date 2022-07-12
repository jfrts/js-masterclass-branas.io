/**
* Functions
*/

// Function declaration
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));

// Function expression
const sum1 = function(a, b) {
    return a + b;
}
console.log(sum1(2, 2));

/**
* Qual a diferença entre as duas formas?
*/
{
    console.log(sum(2, 2)); // 4
    function sum(a, b) {
        return a + b;
    }
    
    // Com function declaration essa ordem funciona
}

{
    // console.log(sum1(2, 2)); // cannot access 'sum1' before initialization
    const sum1 = function (a, b) {
        return a + b;
    };
    
    // Function expression não vai funcionar, pois não sofrerá hoisting
}

/**
* Funções de primeira classe 
*/
{
    console.log("\nFUNÇÕES DE PRIMEIRA CLASSE");
    
    const sum = function(a, b) {
        return a + b;
    }
    
    const subtract = function(a, b) {
        return a - b;
    }
    
    const calculator = function(fn) {
        return function(a, b) {
            return fn(a, b)
        }
    }
    
    console.log(sum(2, 2));
    console.log(subtract(2, 2));
    console.log(calculator(sum)(8, 8));
    console.log(calculator(subtract)(8, 8));
}

/**
* Arguments
*/
{
    console.log("\nARGUMENTS");
    
    const sum = function() {
        console.log(arguments);
    }
    
    sum(5, 8, 9, 8, 4, 7); // [Arguments] { '0': 5, '1': 8, '2': 9, '3': 8, '4': 4, '5': 7 }
}

/**
* Rest Parameter
*/
{
    console.log("\nREST PARAMETER");
    
    const sum = function(...numbers) {
        console.log(numbers);
    }
    
    sum(5, 8, 9, 8, 4, 7); // [ 5, 8, 9, 8, 4, 7 ]
}

/**
* This
*   Existe uma variável implícita chamada de this que faz referência para
*   o objeto responsável pela sua invocação
*/

{
    console.log("\nTHIS");
    
    const calculateArea = function() {
        console.log(this); // Objeto do escopo global
    }
    
    const calculateAreaSquare = function() {
        return this.x ** 2;
    }
    
    const rectangle = {
        x: 2,
        y: 5,
        calculateArea() {
            return this.x * this.y;
        }
    };
    
    const square = {
        x: 4,
        calculateAreaSquare
    };
    
    console.log("Rectangle:", rectangle);
    console.log("Rectangle Area:", rectangle.calculateArea());
    console.log("Square Area:", square.calculateAreaSquare());
}

{
    console.log("\n____________________________________\n");
    console.log("\tGETTERS E SETTERS");
    console.log("____________________________________\n");
    
    const calculateArea = function() {
        console.log(this); // Objeto do escopo global
    }
    
    const calculateAreaSquare = function() {
        return this.x ** 2;
    }
    
    const rectangle = {
        x: 2,
        y: 5,
        calculateArea() {
            return this.x * this.y;
        }
    };
    
    const square = {
        x: 4,
        calculateAreaSquare
    };
    
    console.log("Rectangle:", rectangle);
    console.log("Rectangle Area:", rectangle.calculateArea());
    console.log("Square Area:", square.calculateAreaSquare());
}

/**
* CALL, APPLY E BIND
*/

/**
* NEW
*/
{
    console.log("\n____________________________________\n");
    console.log("\t\tNEW");
    console.log("____________________________________\n");

    const Person = function(name, city, year) {
        this.name = name;
        this.city = city;
        this.year = year;
    };
    
    Person.prototype.getAge = function() {
        return (new Date()).getFullYear() - this.year;
    }

    const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
    const person2 = new Person("Bill Gates", "Seattle", 1955);

    console.log(person1);
    console.log(person1.__proto__);
    console.log(person1.getAge());

    console.log(person2);
    console.log(person2.__proto__);
    console.log(person2.getAge());

    console.log(person1.__proto__ === person2.__proto__);
}

{
    console.log("\n____________________________________\n");
    console.log("RECONSTRUINDO ALGORITMO DO NEW");
    console.log("____________________________________\n");


    const _new = function(fn, ...params) {
        const obj = {};
        Object.setPrototypeOf(obj, fn.prototype);
        fn.apply(obj, params);
        return obj;
    };
    
    const Person = function(name, city, year) {
        this.name = name;
        this.city = city;
        this.year = year;
    };
    
    Person.prototype.getAge = function() {
        return (new Date()).getFullYear() - this.year;
    }

    const person1 = _new(Person, "Linus Torvalds", "Helsinki", 1969);
    const person2 = _new(Person, "Bill Gates", "Seattle", 1955);

    console.log(person1);
    console.log(person1.__proto__);
    console.log(person1.getAge());

    console.log(person2);
    console.log(person2.__proto__);
    console.log(person2.getAge());

    console.log(person1.__proto__ === person2.__proto__);
}