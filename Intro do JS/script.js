let int1 = 10;    // data typu INT
let int2 = 400;   // data typu INT
let float1 = 5.8; // data typu FLOAT

let soucin = (int1*float1) / int2 // součin proměnných int1 a float1, děleno int2


let name1 = "Martin";  // data typu STRING
let name2 = "Honza";   // data typu STRING

console.log(name1);
console.log(name2);

let arr1 = [1,2,3,4,5]  // ARRAY (pole) dat typu INT
let arr2 = ["a","b","c"]  // ARRAY dat typu STRING

arr1.push(6);  // přidá do arr1 6
console.log(arr1);
// ARRAY nemusí obsahovat data stejného typu

let obj1 = {                // OBJEKT
    name: "Martin",         // přidání dat do OBJEKTU, proměnnou určujeme dvojtečkou , oddělené čárkou 
    age: 16,
    dreamJob: "Programmer"
};
console.log(obj1.name);


function myFunction(x, y){  // FUNKCE - tvoříme - function <jméno> (<parametry>) {<kód, co dělá funkce>}
    console.log(x ** y);    // v tomto případě je to mocnina - x(INT) na y(INT), a tu logujeme v konzoli
};                          // nesmíme zapomenout funkci zavolat, neboli aktivovat - při definování funkce ji nevoláme, jenom zaznamenáváme 

myFunction(2,8);            // teď už funkci voláme, nesmíme zapomenout parametry - takže je to teď 2 (parametr 1) na 8 (param. 2)
// čísla 2, 8 nahrazují v definování funkce na řádku 29-31 x, y