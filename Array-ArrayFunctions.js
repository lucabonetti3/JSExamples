
//---------ARRAY------
console.log("ARRAY")

let nomi = ["Luca", "marco", 1, null];

nomi.push("orazio");  //aggiunge orazio
console.log(nomi);
nomi.pop()  // rimuove l'ultimo
console.log(nomi);  
nomi.unshift("orazio")  //aggiunge orazio all inizio
console.log(nomi);
nomi.shift()  //toglie il primo
console.log(nomi);


//---------SPLICE-------
console.log("SPLICE")

// slice ritorna un array senza modificare l array di partenza, splice lo modifica
let items = ["a", "b", "c", "d", "e"];

//rimuovere elementi
let removed = items.splice(1, 2); //rimuove due elementi dall indice 1
console.log (removed);
console.log(items);

//aggiungere elementi
items.splice(1, 0, "x", "y");  //aggiungi x e y all indice 1     lo 0 toglie niente, agigugne solo
console.log(items);

//sostituire elementi
items.splice(1, 2, "z");  //remuovi due elementi e aggiungi z
console.log(items);



//---------FIND-------
console.log("FIND")

let users = [
    { name: "luca", age: 20 },
    { name: "marco", age: 25 },
    { name: "francesco", age: 30 }
];

let older = users.find( user => user.age > 25);
console.log(older);


//------------ARRAY FUNCTIONS--------


//-----MAP----
//map() trasforma ogni elemento
console.log("MAP")

let numeri = [10, 50, 100, 150];
let doppio = numeri.map(num => num *2);

console.log(doppio);

let nomi2 = ["luca", "alessia", "mario"];  //prende la l, e ci accoda uca con sclice da index 1
let iniziale = nomi2.map(iniz => iniz.charAt(0).toUpperCase() + iniz.slice(1));

console.log(iniziale);

//----FILTER----
//filter() serve a filtrare
console.log("FILTER")

let filtrati = [10, 30, 40, 50];
let numeriPari = filtrati.filter(num => num % 2 == 0);

console.log(numeriPari);

let persone = [
    {nome: "luca", anni: 23},
    {nome: "alessia", anni: 22}
];

let filtroPersone = persone.filter(persona => persona.anni < 24);

console.log(filtroPersone);


//------REDUCE------
//reduce()  riduce qualcosa in un unico valore
console.log("REDUCE")

let numeriReduce = [10, 20, 30, 40];
let reduce = numeriReduce.reduce((accumulator, current) =>{  //
    return accumulator + current
}, 0)  //lo 0 serve a specificare a che index iniziare

//al primo giro il accumulator vale 0, il current è 10, somma 0+10
//al secondo giro accumulator vale 10, current vale 20, la somma 10+20 ecc

console.log(reduce)


//------FIND--FINDINDEX----
//find()/findIndex()  cerca o cerca per indice
console.log("FIND/FIND INDEX")

let numeroFind = [10, 20, 30, 50]
let find = numeroFind.find(num => num > 10 && num < 50)  //trova solo il primo
let findIndex = numeroFind.findIndex(num => num > 10 && num < 50)

console.log(find)
console.log(findIndex)


//-----SOME--EVERY----
//some()/every() tipo find ma boolean
console.log("SOME EVERY")

let età = [12, 18, 30, 40]
let some = età.some(num => num < 30)  // ritorna true se almeno uno lo è

console.log(some)

let every = età.every(num => num < 41)  // ritorna true se TUTTI lo sono

console.log(every)

//--------FOREACH----
//forEach()
console.log("FOREACH")

let numeri2 = [10, 20, 50, 160]

numeri2.forEach(num =>{
    console.log(num)
})