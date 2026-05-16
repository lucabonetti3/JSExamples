//LOCAL STORAGE sono dati che rimangono per sempre sul sito finche non li cancelliamo (ad es darkmode)
localStorage.setItem("chiave", "valore")
localStorage.setItem("nome", "luca")
//SESSION STORAGE sono dati che rimangono salvati sono in quella tab/sessione (dati temporanei)
sessionStorage.setItem("nomeSessione", "Prova 2")

console.log("leggo da local: ", localStorage.getItem("nome"))

console.log("leggo da session: ", sessionStorage.getItem("nomeSessione"))
localStorage.clear()
sessionStorage.clear()

const persona = {
    nome: "Mario",
    età: 25
}

localStorage.setItem("persona", JSON.stringify(persona))  //faccio stringify perche setitem del localstorage accetta solo stringhe e persona sarebbe un oggetto
const temp = JSON.parse(localStorage.getItem("persona"))
console.log(temp)

temp.nome = "lucaaa"
console.log(temp)
localStorage.setItem("persona", JSON.stringify(temp))
//COOKIE (obsoleti)

//INDEXED DB per app web offline 
