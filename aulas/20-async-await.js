function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (!a || !b) return reject("Invalid Input");

        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

(async () => {
    try {
        const functions = [
            sum(2, 2),
            sum(4, 4)
        ];
        
        const results = [];
        
        for await(let result of functions) {
            results.push(result);
        }

        const [a, b] = results;
        const result = await sum(a, b);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();
