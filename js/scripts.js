// Where I get my pokemon information from https://pokedex.org/#/pokemon/3

let pokemonList = [
    {
        name: "Bulbasaur", 
        height: 0.7, 
        type: ["grass","poison"]
    },
    {
        name: "Charmander", 
        height: 0.6, 
        type: "fire"
    },
    {
        name: "Squirtle", 
        height: 0.5, 
        type: "water"
    },
]
for (let i=0; i < pokemonList.length; i++) { 
        if (pokemonList[i].height > 0.6) {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' +' - Wow, that\'s big'+ '<br />');
        document.write("<br />");
        }
        else {(pokemonList[i].height <= 0.6)
            document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + '<br />');
            document.write('<br />');
    }
}