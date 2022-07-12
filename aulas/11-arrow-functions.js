{
    const sum = function(a, b) {
        return a + b;
    };
    
    const subtract = function(a, b) {
        return a - b;
    };
    
    const calculator = function(fn) {
        return function (a, b) {
            return fn(a, b);
        };
    };

    console.log(calculator(sum)(2, 2));
    console.log(calculator(subtract)(2, 2));
}

{
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const calculator = fn => (a, b) => fn(a, b);

    console.log(calculator(sum)(2, 2));
    console.log(calculator(subtract)(2, 2));
}

{
    /**
     * Arrow Functions não possuem a própria variável this e nem arguments
     */
}