class Utente{
    static numeroUtenti = 0
    
    constructor(nome, cognome){
        this.id = Utente.utenteID()
        this.nome = nome
        this.cognome = cognome

        Utente.numeroUtenti++  //devo chiamarlo attraverso il nome della classe, non this
    }

    static utenteID(){          // con static posso chiamare il metodo anche se non lo chiamo su un oggetto
        return Math.random()
    }
}

let utente1 = new Utente("luca", "rossi")
let utente2 = new Utente("marco", "verdi")

console.log(Utente.numeroUtenti)    //devo chiamarlo sul nome della classe
console.log(utente1.id)


//se un metodo è strettamente legato all oggetto, allora posso non mettere static, se non è legato all oggetto e mi serve chiamarla fuori posso mettere static