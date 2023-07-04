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
];
pokemonList.forEach(function(pokemon) { 
        if (pokemon.height > 0.6) {
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' +' - Wow, that\'s big'+ '</p>');
        }
        else {(pokemonList.height <= 0.6)
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + '</p>');
    }
});