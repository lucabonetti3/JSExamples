function mioclick() {
    console.log("hai schiacciato la tua funzione")
}

const bottone = document.querySelector("button")

// // FUNZIONE ANONIMA
// bottone.addEventListener("click", function(){
//     console.log("sto cliccando la function anonima")
// });

// // ARROW FUNCTION
// bottone.addEventListener("click", () => {
//     console.log("sto cliccando arrow anonima")
// });

// // FUNZINE PROPRIA
// bottone.addEventListener("click", mioclick)

// // RIMOZIONE EVENT LISTENER
// bottone.removeEventListener("click", mioclick)

// bottone.addEventListener("click", (event) =>{
//     console.log(event)
// })

// SHORTCUT TASTIERA
document.addEventListener("keydown", e =>{
    console.log(`Tasto premuto: ${e.key}`);
    if(e.key === "Enter"){
        console.log("hai premuto Enter")
    }
})


// CAPTURING
document.getElementById("grandparent").addEventListener("click", () =>{
    console.log("granparent scende")
}, {capture: true})                 //capturing
document.getElementById("parent").addEventListener("click", () =>{
    console.log("parent scende")
}, {capture: true})                 //capturing
document.getElementById("child").addEventListener("click", () =>{
    console.log("child (target)")
})                                  //target
document.getElementById("parent").addEventListener("click", () =>{
    console.log("parent sale")
})                                  //bubbling
document.getElementById("grandparent").addEventListener("click", () =>{
    console.log("hgranparent sale")
})                                  //bubbling
// con il capture, dico di catturare pure quelli, senno farebbe bubbling di ogni listener, quindi farebbe target, parent scende, parent sale, grandparent scende, grandparent sale.
// // CAPTURING MA CON STOP PROPAGATION
// document.getElementById("grandparent").addEventListener("click", () =>{
//     console.log("granparent scende")
// }, {capture: true})
// document.getElementById("parent").addEventListener("click", () =>{
//     console.log("parent scende")
// }, {capture: true})
// document.getElementById("child").addEventListener("click", (event) =>{
//     console.log("child (target)")
//     event.stopPropagation()
// })
// document.getElementById("parent").addEventListener("click", () =>{
//     console.log("parent sale")
// })
// document.getElementById("grandparent").addEventListener("click", () =>{
//     console.log("hgranparent sale")
// })