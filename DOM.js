//let x = document.getElementById("qwerty")

//let x = document.getElementsByClassName("qwerty")

//let x = document.getElementsByTagName("button")


//prende tutti i query selector (1 selettore che si usano anche in css)
// let x = document.querySelector("button")


//prende tutti i query selector (tutti i seletori che si usano anche in css)
let x = document.querySelectorAll("button")
console.log(x)

//selettori
document.querySelector("p")             // tag
document.querySelector("#myId")         // ID
document.querySelector(".myClass")      // classe
document.querySelector("*")             // tutti
document.querySelector("[href]")                // ha attributo href  
document.querySelector("[type='submit']")       // type = submit
document.querySelector("[class='btn']")         // classe contiene btn
document.querySelector("[data-id='123']")       // data-id = 123
document.querySelector("div p")         // p dentro div
document.querySelector("div > p")       // p figlio diretto di div
document.querySelector("h2 + p")        // p subito dopo h2
document.querySelector("li:first-child")        // primo figlio
document.querySelector("h2 ~ p")                //p fratello di h2   (alt 126)
document.querySelector("li:last-child")         // ultimo figlio
document.querySelector("li:nth-child(2)")       // secondo figlio
document.querySelector("tr:nth-child(odd)")     //righe dispari
document.querySelector("input:checked")         //input selezionati
document.querySelector("a:hover")               // link in hover


let container = document.getElementById("container")
let x2 = container.querySelector("button")
let x3 = container.querySelectorAll("button")
console.log(x2)
console.log(x3)


//-----------------------------
let elemento = document.querySelector("p.ciao")
// elemento.innerHTML = "<h1>pro</h1>"   //prende anche l'html e sostituisce tutto
// elemento.textContent = "prova"   // non prende html, sostituisce solo il contenuto di testo


let text = document.createElement("p")
text.textContent = "textoappend"
elemento.appendChild(text)

//aggiungere una classe ad un elemento
elemento.classList.add("active", "prova")
// .remove per rimuovere
// .toggle
// .contains
// .replace

elemento.style.cssText = "color: blue; border: solid 3px"