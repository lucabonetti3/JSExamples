class rettangolo{
    constructor(larghezza, altezza){
        this.larghezza = larghezza
        this.altezza = altezza
    }

    set altezza(value){
        if (!value || typeof value != "number"){
            throw Error("si accettano solo numeri")
        }
        this._altezza = value
    }

    get altezza (){
        return this._altezza
    }

    get area(){
        return this.altezza * this.larghezza
    }
}

let ret = new rettangolo(20,10)

ret.altezza = 55
console.log(ret.area)