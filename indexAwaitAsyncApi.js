async function getPokemon(nome){
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`) //fetch è nuovo rispetto ad ajax, e serve per prendere durante le chiamate async, mentre await dice, aspetta la risposta del fetch, e quando hai la risposta mettila nella variabile
        if(!response.ok){
            throw new Error(`Pokemon non trovato: ${nome}`)
        }

        let pokemon = await response.json()
        console.log(pokemon)
    } catch (error) {
        console.error(`Errore nel caricare Pokemon: `, error)
        throw error
    }
}

getPokemon("charizard")