const x = 10;
const y = 15;
const xy = x + y;
console.log("la somma di ", x , "e di ", y, "e': ", xy);


const array = ["audi", 1, 33];

array.push("test");

console.log (array[3]);

const objectTest = {"nome":"luca", "cognome":"bonetti"};

console.log(objectTest);

const x2 = 10;
const y2 = 15;

x2 > y2 ? console.log("si") : console.log("no")

for(i=0;i<10;i++){
    if (i==3) {continue}
    console.log(i);
}

console.log("questa è una \'prova\' ");

let text = "Please   locate where 'locate' occurs!";
console.log(text.search("locate"));
