class formaGeometrica {
    constructor(colore){
        this.colore = colore
        this.x = 0
        this.y = 0
    }
    
    muovi(Xnuova, Ynuova){
        this.x = Xnuova
        this.y = Ynuova
    }

    get posizione(){
        return {x: this.x, y: this.y}
    }

    get area(){
        throw new Error("l'area deve essere implementata nella classe figlia")
    }
}


class rettangolo extends formaGeometrica {
    constructor (larghezza, altezza, colore){
        super(colore)
        this.larghezza = larghezza
        this.altezza = altezza
        // this.colore = colore     duplicato
        // this.x = 0
        // this.y = 0
    }

    // muovi(Xnuova, Ynuova){       duplicato
    //     this.x = Xnuova
    //     this.y = Ynuova
    // }

    // get posizione(){             duplicato
    //     return {x: this.x, y: this.y}
    // }

    get area(){
        return this.larghezza * this.larghezza
    }
}

const rett = new rettangolo(30,20,"blu")
// rett.muovi(100,32)
// console.log(rett.area)


class cerchio extends formaGeometrica {
    constructor (raggio, colore){
        super(colore)
        this.raggio = raggio
        // this.colore = colore     duplicato
        // this.x = 0
        // this.y = 0
    }

    // muovi(Xnuova, Ynuova){       duplicato
    //     this.x = Xnuova
    //     this.y = Ynuova
    // }

    // get posizione(){             duplicato
    //     return {x: this.x, y: this.y}
    // }

    get area(){
        return Math.PI * this.raggio * this.raggio
    }
}

const cer = new cerchio(10, "rosso")
// cer.muovi(20,10)
// console.log(cer)
cer.muovi(10,20)
let forme = [rett, cer]

forme.forEach(forma => {
    console.log(`${forma.constructor.name} : x: ${forma.posizione.x} y: ${forma.posizione.y}`)
})