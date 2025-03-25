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


// PODMÍNKA IF
if (int1 >= 7) {            // Jestli je int1 větší nebo rovno 7   
    console.log("Ano");     // Piš "Ano"
} else if (int1 == 6) {     // Pokud je int1 rovno 6       
    console.log("6");       // Piš "6"
} else {                    // Jinak
    console.log("Ne");      // Piš "Ne"
}

console.log(int1 >= 7);     // Toto vypíše do konzole true nebo false

console.log(int1 >= 7 ? "ano" : "ne");  // Při používání této zkratky si můžeme určit co to má udělat pokud true/false


// SMYČKA FOR -- Používáme, když víme, kolikrát chceme kód zopakovat

for(i=1;i<=10;i++) {        
    console.log(i);         // Vypíše čísla od 1 do 10
}

// SMYČKA WHILE -- Dokud
let a = 1
while(a<=5) {
    console.log(a);     // Vypíše čísla od 1 do 5
    a++;                // ! NESMÍME ZAPOMENOUT ! (jinak bude cyklus nekonečný)
}



// SYNTAXE:  (<> nepíšeme)

    // DEKLARACE
    // let/const/var <jméno proměnné> <hodnota>
        // ARRAY
            // do <hodnota> v deklaraci dosadíme [<položka1>,<položka2>]    (CTRL + F = [])
        // OBJEKT
            // do <hodnota> v deklaraci dosadíme {<proměnná1>: <hodnota1> , <proměnná2>: <hodnota2>

    // FUNKCE
    // function <jméno funkce> (<parametry>) {<kód>}

    // PODMÍNKY
        // if(<podmínka>) {<kód>}

    // SMYČKY/CYKLY
        // FOR:
            // for (i=<číslo, většinou 1 nebo 0>; i<relační operátor><číslo>;i++) {<kód>}
        // WHILE:
            // while(<proměnná><relační operátor><číslo>) {kód}
