class persona{
    constructor(nome, cognome){
        this.nome = nome
        this.cognome = cognome
    }

    saluta(){
        console.log(`ciao sono ${this.nome} ${this.cognome}`)
    }

    saluta2(nomeSaluto){
        console.log(`Ciao ${nomeSaluto}`)
    }
}

let persona1 = new persona("Luca", "bonetti");

persona1.saluta();
persona1.saluta2("Giacomo")