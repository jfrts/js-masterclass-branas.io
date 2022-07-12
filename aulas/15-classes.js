class Square {
    constructor(side) {
        this.side = side;
    }
    
    calculateArea() {
        return Math.pow(this.side, 2);
    }
    
    toString() {
        return `side: ${this.side}`;
    }
    
    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}

const square = new Square(4);
console.log(Square); // [class Square]
console.log(square); // Square { side: 4 }
console.log(square.__proto__.toString()); // Undefined
console.log(square.toString()) // 4

const square2 = Square.fromArea(16);
console.log(Square); // [class Square]
console.log(square2); // Square { side: 4 }
console.log(square2.__proto__.toString()); // Undefined
console.log(square2.toString()) // 4

/**
* As classes não sofrem hoisting
* 
* As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods
*/

/**
* O construtor é invocado no momento da instanciação da classe.
*/