//DESTRUTTURAZIONE ARRAY
let arr1 = [1, 2, 3, 4, 5]

let [item1, item2, item3, item4, item5] = arr1

/* fa la stessa cosa di fare:
let item1 = arr1[0]
let item2 = arr1[1]
.
.
let item 5 = arr1[5]
*/

// console.log(item3)

//DESTRUTTURAZIONE OGGETTI
let obj1 = {
    nome: "mario",
    età: 25,
    città: "sondrio",
    indirizzo: {
        via: "son",
        civico: 3,
    }
};

let {nome, età, città,indirizzo, indirizzo: {via, civico}} = obj1

// console.log(indirizzo)
// console.log(via, civico)


// REST OPERATOR
let arr2 = [1, 2, 3, 4, 5]

let [item10, item20, ...tuttiGliAltri] = arr2

console.log(tuttiGliAltri)

//SPREAD OPERATOR
let arr3 = [1, 2, 3, 4, 5]
let arr4 = [6, 7, 8, 9, 10]
let arrayFusione = [...arr3, ...arr4]

console.log(arrayFusione) 