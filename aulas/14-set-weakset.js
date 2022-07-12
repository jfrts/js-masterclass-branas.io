/**
* SET
* 
* Um set é um objeto que armazena elementos únicos que podem ser de qualquer tipo de dado
*/

const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);
console.log(charsets);

/**
* Diferença para um Array: Não permite elementos duplicados.
* Dá pra usar o set para remover duplicações em arrays
*/

/**
 * WeakSet
 */
const circles = new WeakSet();

function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}

Circle.prototype.calculateArea = function() {
    if (circles.has(this)) {
        return Math.PI * this.radius ** 2;
    } else {
        throw "Objeto não foi criado através da função construtora";
    }
}

const c1 = new Circle(10);

const c2 = {
    radius: 5
};

console.log(c1.calculateArea());
// console.log(c1.calculateArea.call(c2));

const user = {name: "julio"};

const set = new Set([user, {name: "julio"}]);
console.log(set.has({name: "julio"}));
console.log("user:", set.has(user));
console.log(set)