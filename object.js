//-------OBJECT--------

let persona = {
    nome: "luca",
    cognome: "Rossi",
    età: 25,
    indirizzo: {
        via: "tassera",
        civico: 3,
        CAP: "23030"
    },
    genere: "maschio",
    saluta: function(){
        return `ciao sono ${this.nome} ${this.cognome}`
    }
}

delete persona.indirizzo.civico

console.log(persona.saluta());

console.log(Object.keys(persona))
console.log(Object.values(persona))
console.log(Object.entries(persona))
