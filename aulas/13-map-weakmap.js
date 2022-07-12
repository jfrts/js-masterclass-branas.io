/**
* MAP
* Um Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer
* tipo de dado.
*/
{
    console.log("\n\n############# MAP #############\n\n")
    
    const timeUnits = new Map([
        ["second", 1],
        ["minute", 60],
        ["hour", 3600]
    ]);
    
    console.log("Quantidade de itens:", timeUnits.size); // Retorno a quantidade de elementos
    timeUnits.set("day", 86400); // Adicionar um novo par de chave e valor
    console.log(timeUnits); // [ ["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400] ]
    
    // console.log(timeUnits.forEach((value, key) => console.log(value, key))); // Por espelhar o forEach do Array o key é jogado pra segundo arg
    
    console.log(timeUnits.has("hour")); // true => Verifica a existência de uma chave e retorna true ou false.
    console.log(timeUnits.get("hour")); // 3600 => retorna o valor da chave se não existir uma chave o retorno é undefined
    timeUnits.delete("hour"); 
    timeUnits.clear(); // Apaga todo o map
    
}


/**
* WeakMap é um objeto, similar ao map, que permite apenas chaves do tipo Object e mantém
* as referências de forma fraca, sendo volátil e não iterável.
*/
{
    console.log("\n\n############# WEAKMAP #############\n\n")
    
    const wm1 = new WeakMap();
    console.log("WeakMap init:", wm1); // WeakMap { <items unknown> }
    
    /**
    * Funções
    * 
    * set
    * has
    * get
    * delete
    * 
    */

    const obj1 = {};
    const obj2 = {};

    wm1.set(obj1, "objeto1");
    wm1.set(obj2, "objeto2");

    console.log("WeakMap após o set:", wm1); // WeakMap { <items unknown> }
    console.log(wm1.has(obj1)); // true
    console.log(wm1.has(obj2)); // true

    console.log(wm1.get(obj1)); // objeto1
    console.log(wm1.get(obj2)); // objeto2
}

{
    console.log("\n\n############# PRÁTICA WEAKMAP #############\n\n");

    const areas = new WeakMap();
    
    const rect1 = {
        x: 10,
        y: 2
    };

    function calculateArea(rect) {
        if (areas.has(rect)) {
            console.log("Using cache...");
            return areas.get(rect);
        }

        const area = rect.x * rect.y;
        areas.set(rect, area);
        return area;
    }

    console.log(calculateArea(rect1));
    rect1.x = 5;
    console.log(calculateArea(rect1));
    console.log(calculateArea(rect1));
    console.log(calculateArea(rect1));
    areas.delete(rect1);
    console.log(calculateArea(rect1));
    console.log(calculateArea(rect1));

}