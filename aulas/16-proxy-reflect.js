function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        },

        deleteProperty(target, key) {
            if (!(key in target)) {
                throw new Error("Invalid key.");
            }

            delete target[key];
            target.length--;
        }
    });
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

console.log(languages);


delete languages[1];
delete languages[2];
// delete languages[3];

console.log(languages);